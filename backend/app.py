from flask import Flask, request, send_file, make_response, jsonify
from werkzeug.utils import secure_filename
import os
from flask_cors import CORS
import pdfkit
from pdf2docx import Converter
from PyPDF2 import PdfMerger
import uuid

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'uploads'

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/convert-pdf-to-docx', methods=['POST'])
def convert_pdf_to_docx():
    try:
        file = request.files['pdfFile']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        filename = secure_filename(file.filename)
        unique_id = uuid.uuid4().hex
        pdf_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_{filename}")
        file.save(pdf_path)
        
        docx_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_converted_document.docx")
        cv = Converter(pdf_path)
        cv.convert(docx_path, start=0, end=None)
        cv.close()

        response = make_response(send_file(docx_path, as_attachment=True))
        response.headers['Content-Disposition'] = f'attachment; filename={secure_filename("converted_document.docx")}'

        return response

    except Exception as e:
        print(f"Error converting PDF: {str(e)}")
        return jsonify({'error': 'Error converting PDF. Please try again.'}), 500

@app.route('/convert-docx-to-pdf', methods=['POST'])
def convert_docx_to_pdf():
    try:
        file = request.files['docFile']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        filename = secure_filename(file.filename)
        unique_id = uuid.uuid4().hex
        docx_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_{filename}")
        file.save(docx_path)

        pdf_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_converted_document.pdf")
        pdfkit.from_file(docx_path, pdf_path)

        response = make_response(send_file(pdf_path, as_attachment=True))
        response.headers['Content-Disposition'] = f'attachment; filename={secure_filename("converted_document.pdf")}'

        return response

    except Exception as e:
        print(f"Error converting DOCX: {str(e)}")
        return jsonify({'error': 'Error converting DOCX. Please try again.'}), 500

@app.route('/merge-pdf', methods=['POST'])
def merge_pdf():
    try:
        if 'files[]' not in request.files:
            return jsonify({'error': 'No files were uploaded.'}), 400

        files = request.files.getlist('files[]')
        merger = PdfMerger()

        for file in files:
            if file.filename == '':
                return jsonify({'error': 'No selected file.'}), 400
            if file:
                filename = secure_filename(file.filename)
                file_path = os.path.join(UPLOAD_FOLDER, filename)
                file.save(file_path)
                merger.append(file_path)

        merged_file_path = os.path.join(UPLOAD_FOLDER, 'merged_document.pdf')
        with open(merged_file_path, 'wb') as f_out:
            merger.write(f_out)
        merger.close()

        response = make_response(send_file(merged_file_path, as_attachment=True))
        response.headers['Content-Disposition'] = 'attachment; filename="merged_document.pdf"'

        return response

    except Exception as e:
        print(f"Error merging PDFs: {str(e)}")
        return jsonify({'error': 'Error merging PDFs. Please try again.'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
