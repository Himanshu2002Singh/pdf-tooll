from flask import Flask, request, send_file, make_response, jsonify
from werkzeug.utils import secure_filename
import os
from flask_cors import CORS
from pdf2docx import Converter
from PyPDF2 import PdfMerger
import uuid
from docx2pdf import convert as docx2pdf_convert
from PIL import Image
import fitz  # PyMuPDF library
from rembg import remove

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
        docx2pdf_convert(docx_path, pdf_path)

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

@app.route('/compress-pdf', methods=['POST'])
def compress_pdf():
    try:
        file = request.files['pdfFile']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        filename = secure_filename(file.filename)
        unique_id = uuid.uuid4().hex
        pdf_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_{filename}")
        file.save(pdf_path)

        compressed_pdf_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_compressed.pdf")
        
        # PyMuPDF (fitz) compression example
        doc = fitz.open(pdf_path)
        doc.save(compressed_pdf_path, garbage=4, deflate=True)
        doc.close()

        response = make_response(send_file(compressed_pdf_path, as_attachment=True))
        response.headers['Content-Disposition'] = f'attachment; filename={secure_filename("compressed_document.pdf")}'

        return response

    except Exception as e:
        print(f"Error compressing PDF: {str(e)}")
        return jsonify({'error': 'Error compressing PDF. Please try again.'}), 500

@app.route('/image-to-pdf', methods=['POST'])
def image_to_pdf():
    try:
        file = request.files['imageFile']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        filename = secure_filename(file.filename)
        unique_id = uuid.uuid4().hex
        image_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_{filename}")
        file.save(image_path)

        pdf_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_converted_document.pdf")
        image = Image.open(image_path)
        image = image.convert('RGB')
        image.save(pdf_path)

        response = make_response(send_file(pdf_path, as_attachment=True))
        response.headers['Content-Disposition'] = f'attachment; filename={secure_filename("converted_document.pdf")}'

        return response

    except Exception as e:
        print(f"Error converting image to PDF: {str(e)}")
        return jsonify({'error': 'Error converting image to PDF. Please try again.'}), 500

@app.route('/resize-image', methods=['POST'])
def resize_image():
    try:
        file = request.files['imageFile']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        width = int(request.form['width'])
        height = int(request.form['height'])

        filename = secure_filename(file.filename)
        unique_id = uuid.uuid4().hex
        image_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_{filename}")
        file.save(image_path)

        resized_image_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_resized_{filename}")
        with Image.open(image_path) as img:
            img = img.resize((width, height))

            # Convert image to RGB if it has an alpha channel
            if img.mode == 'RGBA':
                img = img.convert('RGB')

            img.save(resized_image_path)

        response = make_response(send_file(resized_image_path, as_attachment=True))
        response.headers['Content-Disposition'] = f'attachment; filename={secure_filename("resized_" + filename)}'

        return response

    except Exception as e:
        print(f"Error resizing image: {str(e)}")
       

@app.route('/compress-image', methods=['POST'])
def compress_image():
    try:
        file = request.files['imageFile']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        quality = int(request.form['quality'])

        filename = secure_filename(file.filename)
        unique_id = uuid.uuid4().hex
        image_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_{filename}")
        file.save(image_path)

        compressed_image_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_compressed_{filename}")
        with Image.open(image_path) as img:
            img.save(compressed_image_path, quality=quality)

        response = make_response(send_file(compressed_image_path, as_attachment=True))
        response.headers['Content-Disposition'] = f'attachment; filename={secure_filename("compressed_" + filename)}'

        return response

    except Exception as e:
        print(f"Error compressing image: {str(e)}")
        return jsonify({'error': 'Error compressing image. Please try again.'}), 500

@app.route('/remove-background', methods=['POST'])
def remove_background():
    try:
        file = request.files['imageFile']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        filename = secure_filename(file.filename)
        unique_id = uuid.uuid4().hex
        image_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_{filename}")
        file.save(image_path)

        bg_removed_image_path = os.path.join(UPLOAD_FOLDER, f"{unique_id}_bg_removed_{filename}")
        with open(image_path, 'rb') as img_file:
            img_data = img_file.read()
            output_data = remove(img_data)
            with open(bg_removed_image_path, 'wb') as out_file:
                out_file.write(output_data)

        response = make_response(send_file(bg_removed_image_path, as_attachment=True))
        response.headers['Content-Disposition'] = f'attachment; filename={secure_filename("bg_removed_" + filename)}'

        return response

    except Exception as e:
        print(f"Error removing background: {str(e)}")
        return jsonify({'error': 'Error removing background. Please try again.'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
