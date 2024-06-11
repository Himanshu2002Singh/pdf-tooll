import React from 'react';
import HomeTools from './HomeTools'; // Adjust the path as per your file structure
import './HomePage.css';
import Fotter from './Fotter';
import Navigation from './Navbar';
import  AuthProvider  from './AuthContext';


const HomePage = () => {
  return (
    <div>
      <AuthProvider>
    <Navigation/>
    </AuthProvider>
    
    <div className="main">
      {/* Background Pattern */}
     
      {/* Home Title */}
      <div className="home-title">
        <h1 className="home-title__title">Comprehensive PDF tools all in one convenient site</h1>
        <h2 className="home-title__subtitle">
          Every PDF tool you need is here, 100% free and easy to use! Quickly merge, split, compress, convert with minimal effort.
        </h2>
      </div>
      
      {/* Tools Section */}
      <div className="twj">
        <HomeTools />
      </div>

      {/* Solutions Section */}
      <div className="solutions-section">
        <h2 className="solutions-title">Looking for another solution?</h2>
        <div className="solutions-container">
          <div className="solution-item">
            <h3>DEMO Desktop</h3>
            <p>
              Get the <a href='/'>DEMO PDF </a> Mobile App to manage your documents remotely. Turn your Android or iPhone into a PDF editor and scanner, making it easy to annotate, sign, and share documents wherever you are.
            </p>
          </div>
          <div className="solution-item">
            <h3>DEMO Mobile</h3>
            <p>
              Get the <a href='/'>DEMO PDF </a> Mobile App to manage your documents remotely. Turn your Android or iPhone into a PDF editor and scanner, making it easy to annotate, sign, and share documents wherever you are.
            </p>
          </div>
        </div>
      </div>

      {/* Trusted by Millions Section */}
      <div className="trusted-section">
        <h2 className="trusted-title">The PDF software relied on by millions of users.</h2>
        <p className="trusted-description">
        DEMO PDF is your top choice for effortless PDF editing. Access all the tools you need to manage your digital documents efficiently, with your data safety assured
        </p>
      </div>

      {/* Premium Section */}
      <div className="premium-section">
        <div className="premium-content">
        <div class="row align-items-center justify-content-center d-lg-flex">
            <div class="col-lg-7 col-md-12 premium-text">
          <h2 className="premium-title">Enjoy extra benefits with Premium</h2>
            <p className="premium-description">
            Boost productivity by utilizing batch file processing, OCR technology for converting scanned documents, and electronic signatures for your business agreements.
            </p>
            <a href='/user-premium'>
            <button className="premium-button">Get Premium</button>
            </a>
          </div>
          <div className="premium-image col-lg-5 col-md-8 col-sm-8 mt-md-5 mt-sm-5 d-flex justify-content-lg-end section__item">
                                    <svg width="365" height="269" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><path d="m74.201 47.499 13.238 9.32c.435.305.73.766.824 1.297l13.874 79.259a4.778 4.778 0 0 1-3.853 5.535l-62.328 11.069a4.74 4.74 0 0 1-5.5-3.872L15.073 62.253c-.458-2.6 1.275-5.074 3.854-5.535l53.783-9.547a1.971 1.971 0 0 1 1.491.328Z" fill="#fff"/></g><path d="M112.206 69.24 86.698 178.415c-.45 1.942.601 3.925 2.355 4.431l134.773 38.69c1.754.506 3.547-.667 3.998-2.61l25.508-109.173c.451-1.942-.601-3.925-2.354-4.431l-134.774-38.69c-1.754-.496-3.537.667-3.998 2.61Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/><path fill="#FF6A58" d="M108 232.535 144.51 222l6.654 23.06-36.51 10.534z"/><path d="M144.701 243.222c.365-.007.707.281.831.734l.979 3.536c.45 1.632-.257 3.381-1.554 3.841l-2.82 1.007a.649.649 0 0 1-.21.039c-.357.008-.707-.281-.831-.726-.148-.538.078-1.093.505-1.249l2.82-1.007c.443-.164.699-.796.544-1.35l-.979-3.537c-.148-.538.078-1.093.505-1.249.07-.023.14-.031.21-.039Z" fill="#F5F5FA"/><path d="m134.181 239.046.248.898-7.908 2.834a.558.558 0 0 0-.226.156l-.272-.968 8.158-2.92Z" fill="#FF6A58"/><path d="M121.876 229.28c-.575.211-.924.89-.885 1.632.007.156.031.312.077.468l1.911 6.893-1.266.453-1.911-6.893a4.295 4.295 0 0 1-.155-.937c-.078-1.491.613-2.849 1.771-3.271l6.098-2.185a2.21 2.21 0 0 1 .668-.125 2.39 2.39 0 0 1 1.399.445l4.366 3.068c.645.445 1.149 1.186 1.39 2.068l.746 2.678-1.266.453-.746-2.678-2.649.906a1.586 1.586 0 0 1-.497.093c-.855.016-1.678-.671-1.974-1.733l-.978-3.528-6.099 2.193Zm9.532.469-.862-.609.233.835.629-.226Z" fill="#fff"/><path d="m130.538 229.14.862.609-.629.226-1.833.656 1.833-.656-.233-.835Z" fill="#fff"/><path d="m127.864 247.618 7.908-2.834.35 1.257-8.157 2.92-.365-1.327c.031.007.07.007.108.007a.567.567 0 0 0 .156-.023Z" fill="#FF6A58"/><path d="M127.701 251.528c-.598.016-1.181-.484-1.399-1.257l-2.12-7.642 2.12 7.642c.218.765.801 1.265 1.399 1.257Z" fill="#FDE4DF"/><path d="m136.013 238.391 2.121 7.642c.047.156.07.312.078.469.039.741-.311 1.428-.886 1.631l-9.291 3.326a.978.978 0 0 1-.334.062c-.598.016-1.181-.492-1.399-1.257l-2.12-7.642 1.833-.656.272.968c-.171.187-.249.5-.163.804.085.305.303.515.536.562l.544 1.975c-.171.195-.241.508-.163.804.085.305.302.515.536.554l.365 1.328 8.157-2.92-.35-1.257.086-.031c.334-.117.505-.547.396-.96-.101-.352-.365-.57-.645-.562a.393.393 0 0 0-.163.031l-.086.031-.512-1.842.085-.031c.334-.118.505-.547.396-.961-.093-.351-.365-.57-.644-.562a.415.415 0 0 0-.164.031l-.085.032-.249-.898 1.849-.671Z" fill="#FF6A58"/><path d="m134.843 241.451.512 1.834-7.908 2.834a.642.642 0 0 0-.233.156l-.544-1.975c.031.008.07.008.109.008a.413.413 0 0 0 .163-.031l7.901-2.826Z" fill="#FF6A58"/><path d="M135.603 243.222c.28-.007.544.219.645.562.117.414-.062.844-.396.961l-.086.031-7.908 2.834a.41.41 0 0 1-.163.031c-.039 0-.07 0-.109-.008-.241-.047-.451-.25-.536-.554-.085-.305-.016-.617.163-.804a.529.529 0 0 1 .233-.156l7.909-2.834.085-.031a.398.398 0 0 1 .163-.032Z" fill="#fff"/><path d="m128.378 255.596-7.085.976c-.124.015-.249.031-.373.031l7.085-.976c.124 0 .249-.016.373-.031Z" fill="#BD060A"/><path d="M134.678 239.889c.279-.008.551.218.644.562.117.414-.062.843-.396.96l-.085.031-7.909 2.834a.393.393 0 0 1-.163.031c-.031 0-.07 0-.109-.007-.241-.047-.45-.258-.536-.563-.085-.304-.015-.616.163-.804a.558.558 0 0 1 .226-.156l7.908-2.833.086-.032a.62.62 0 0 1 .171-.023Z" fill="#fff"/><path d="m132.859 234.284.116.422-8.157 2.919-1.732-6.245 3.675-1.319.341 1.226c.591 2.123 2.238 3.505 3.955 3.466.334-.008.668-.071.994-.188l.808-.281Z" fill="#FF6A58"/><path d="m127.103 231.287-.341-1.226-3.675 1.319 1.732 6.246-1.833.655-1.911-6.893a1.958 1.958 0 0 1-.078-.468c-.039-.75.303-1.429.886-1.632l6.083-2.178.979 3.529c.295 1.062 1.118 1.749 1.973 1.733.163 0 .334-.031.497-.094l2.641-.944.754 2.716-1.834.656-.116-.422-.808.289c-.326.117-.668.18-.994.188-1.717.031-3.364-1.343-3.955-3.474ZM139.113 237.282l2.121 7.642c.839 3.006-.334 6.277-2.82 7.159l-9.291 3.325a3.846 3.846 0 0 1-1.127.219h-.101c-2.066.016-4.001-1.733-4.7-4.247l-2.121-7.642 1.834-.656 2.12 7.642c.428 1.538 1.593 2.538 2.789 2.514.218-.008.443-.047.661-.125l9.291-3.333c1.158-.414 1.857-1.78 1.771-3.271a4.305 4.305 0 0 0-.155-.937l-2.121-7.642 1.849-.648Z" fill="#FF6A58"/><path d="M126.879 223.152a3.538 3.538 0 0 1 1.088-.21h.139c.808-.008 1.616.257 2.347.765l-.863 2.021.863-2.021-.863 2.021.878-2.014 4.366 3.068c1.096.765 1.935 2.022 2.339 3.466l.745 2.678-1.833.656-.746-2.678c-.241-.874-.746-1.616-1.39-2.069l-4.366-3.067c-.443-.305-.925-.461-1.399-.445-.225.007-.45.046-.668.124l-6.098 2.186c-1.158.414-1.857 1.78-1.772 3.271.016.312.07.625.156.937l1.911 6.893-1.834.656-1.911-6.893c-.839-3.006.334-6.277 2.82-7.167l6.091-2.178Zm7.132 5.543-.062.14.062-.14Z" fill="#FF6A58"/><path d="M142.307 233.745c.334 1.203-.171 2.452-1.134 2.795l-2.059.734-1.833.656-1.266.452-1.834.656-8.157 2.92-1.833.656-1.267.452-1.833.656-2.059.734c-.155.054-.31.086-.474.086-.808.015-1.584-.633-1.872-1.64-.334-1.202.179-2.451 1.134-2.794l2.059-.734 1.834-.656 1.266-.453 1.833-.655 8.157-2.92 1.834-.656 1.266-.453 1.833-.655 2.051-.734c.156-.055.311-.086.474-.086.816-.008 1.593.64 1.88 1.639Zm-1.429 1.749c.497-.18.761-.827.59-1.444-.147-.523-.543-.859-.963-.851a.666.666 0 0 0-.241.047l-22.141 7.931c-.497.18-.761.828-.582 1.444.147.523.551.859.963.851a.646.646 0 0 0 .241-.047l22.133-7.931Z" fill="#FF6A58"/><path d="M117.284 225.033c.357-.007.707.281.831.734.148.539-.077 1.093-.505 1.249l-2.82 1.007c-.442.164-.699.796-.543 1.351l.986 3.536c.148.539-.078 1.093-.505 1.249a.649.649 0 0 1-.21.039c-.357.008-.707-.281-.831-.734l-.979-3.536c-.45-1.632.257-3.38 1.554-3.841l2.82-1.007a.454.454 0 0 1 .202-.047Z" fill="#fff"/><path d="m153.276 248.164-9.051-32.615c-.745-2.67-1.266-3.49-1.942-4.349-.676-.858-1.484-1.389-2.424-1.608a2.821 2.821 0 0 0-1.134-.187c-.652.016-1.476.211-2.758.671l-26.048 9.329c-2.129.765-2.859 1.304-3.434 2.147-.66.788-1.049 1.748-1.173 2.896-.21 1.085-.132 2.155.606 4.824l9.051 32.616c.738 2.67 1.266 3.489 1.942 4.348.676.859 1.53 1.288 2.424 1.608.357.133.707.203 1.134.188.652-.016 1.476-.211 2.758-.672l26.04-9.329c2.129-.765 2.774-1.358 3.434-2.146.66-.789 1.049-1.749 1.173-2.897.226-1.085.148-2.154-.598-4.824Zm-20.292-28.79 2.82-1.007c.21-.078.42-.11.629-.117 1.111-.024 2.207.882 2.587 2.248l.979 3.536c.148.539-.07 1.093-.505 1.249a.643.643 0 0 1-.209.039c-.358.008-.707-.281-.832-.733l-.986-3.537c-.132-.468-.529-.796-.917-.788-.07 0-.14.015-.21.039l-2.828 1.007a.665.665 0 0 1-.209.039c-.358.008-.707-.281-.832-.734-.139-.531.086-1.085.513-1.241Zm-18.264 14.785a.649.649 0 0 1-.21.039c-.357.008-.707-.281-.831-.734l-.979-3.536c-.45-1.631.256-3.38 1.554-3.841l2.82-1.007a.677.677 0 0 1 .21-.039c.357-.007.707.281.831.734.147.539-.078 1.093-.505 1.249l-2.82 1.007c-.443.164-.699.796-.544 1.351l.987 3.536c.147.531-.086 1.093-.513 1.241Zm11.513 23.896-2.82 1.007c-.21.07-.419.117-.629.117-1.111.023-2.199-.882-2.579-2.256l-.987-3.536c-.148-.539.078-1.093.505-1.249a.649.649 0 0 1 .21-.039c.357-.008.707.281.831.733l.987 3.537c.132.468.528.796.924.788.07 0 .14-.016.21-.039l2.82-1.015a.677.677 0 0 1 .21-.039c.365-.008.707.281.831.734.148.546-.078 1.101-.513 1.257Zm12.205-5.964-4.646.662-4.646 1.663a3.834 3.834 0 0 1-1.126.219h-.101c-2.066.015-4.001-.733-4.7-3.247l-2.121-7.642-2.059.733c-.155.055-.31.086-.474.086-.807.016-1.584-.632-1.872-1.639-.334-1.202.179-2.451 1.134-2.795l2.059-.734-1.911-6.893a7.238 7.238 0 0 1-.179-3.091 6.3 6.3 0 0 1 .342-1.288c.031-.078.062-.164.101-.242.241-.554.56-1.054.948-1.476.109-.117.225-.234.35-.335.108-.094.217-.172.326-.25.046-.031.085-.063.132-.086.249-.156.513-.289.792-.39l6.099-2.186a3.786 3.786 0 0 1 1.087-.211h.14c.117 0 .233.008.358.016.691.062 1.367.32 1.996.749 0 0 .008.008.016.008l.155.109 4.203 2.959c.777.546 1.422 1.327 1.872 2.256.187.383.342.788.459 1.21l.745 2.678 2.051-.734c.156-.055.311-.086.474-.086.808-.016 1.593.632 1.865 1.639.334 1.203-.171 2.452-1.135 2.795l-2.058.734 2.121 7.642c.839 3.006-.335 5.269-2.82 6.159m6.541.258-2.82 1.007a.649.649 0 0 1-.21.039c-.357.008-.707-.281-.831-.726-.148-.538.077-1.093.505-1.249l2.82-1.007c.443-.164.699-.796.544-1.35l-.979-3.537c-.148-.538.077-1.092.505-1.249a.67.67 0 0 1 .209-.039c.366-.007.707.281.832.734l.978 3.536c.459 1.632-.248 3.373-1.553 3.841Z" fill="#FF6A58"/><path d="M136.435 218.25c1.111-.023 2.206.882 2.587 2.248l.979 3.537c.147.538-.07 1.092-.505 1.249a.677.677 0 0 1-.21.039c-.357.007-.707-.281-.831-.734l-.987-3.537c-.132-.468-.528-.796-.916-.788-.07 0-.14.016-.21.039l-2.828 1.007a.649.649 0 0 1-.21.039c-.357.008-.707-.281-.831-.734-.148-.538.078-1.093.505-1.249l2.82-1.007a2.11 2.11 0 0 1 .637-.109Z" fill="#fff"/><path d="M127.848 251.513Z" fill="#9999A2"/><path d="m137.28 237.938 2.121 7.642c.086.312.14.625.156.937.077 1.491-.614 2.857-1.772 3.271l-9.291 3.333a2.205 2.205 0 0 1-.66.125c-1.197.023-2.362-.976-2.789-2.514l-2.121-7.642 1.266-.453 2.121 7.643c.21.765.8 1.264 1.398 1.256.109 0 .218-.023.334-.062l9.292-3.326c.575-.21.924-.89.885-1.639a1.956 1.956 0 0 0-.077-.468l-2.121-7.643 1.258-.46ZM119.916 252.098c.358-.008.707.281.832.734l.986 3.536c.132.469.528.797.925.789a.67.67 0 0 0 .209-.039l2.82-1.015a.677.677 0 0 1 .21-.039c.365-.008.707.281.831.734.148.538-.077 1.093-.505 1.249l-2.82 1.007a1.99 1.99 0 0 1-.629.117c-1.111.023-2.198-.882-2.579-2.256l-.987-3.536c-.147-.539.078-1.093.505-1.249a.82.82 0 0 1 .202-.032ZM140.497 233.199c.419-.008.823.328.963.851.171.616-.093 1.264-.583 1.444l-22.14 7.931c-.078.032-.163.039-.241.047-.42.008-.824-.328-.963-.851-.171-.616.093-1.264.582-1.444l22.141-7.931a.673.673 0 0 1 .241-.047Z" fill="#fff"/><path d="m109.919 219.389-7.085.968 28.081-9.881L138 209.5l-28.081 9.889ZM120.958 267.985l-7.085.975a3.544 3.544 0 0 1-.482.039 3.082 3.082 0 0 1-1.134-.187c-.894-.328-1.748-.749-2.424-1.608-.676-.859-1.197-1.679-1.942-4.348l7.085-.976c.738 2.67 1.266 3.489 1.942 4.348.676.859 1.53 1.288 2.424 1.608.357.133.707.203 1.134.188.155 0 .311-.016.482-.039Z" fill="#E5322D"/><path d="m120.958 267.985-7.085.975a3.544 3.544 0 0 1-.482.039 3.082 3.082 0 0 1-1.134-.187c-.894-.328-1.748-.749-2.424-1.608-.676-.859-1.197-1.679-1.942-4.348l7.085-.976c.738 2.67 1.266 3.489 1.942 4.348.676.859 1.53 1.288 2.424 1.608.357.133.707.203 1.134.188.155 0 .311-.016.482-.039ZM106.493 221.536l-7.085.976c.575-.843 1.298-1.382 3.434-2.147l7.085-.975c-2.136.765-2.867 1.303-3.434 2.146Z" fill="#E5322D"/><path d="m106.493 221.536-7.085.976c.575-.843 1.298-1.382 3.434-2.147l7.085-.975c-2.136.765-2.867 1.303-3.434 2.146ZM105.319 224.432l-7.085.976c.125-1.147.513-2.108 1.174-2.896l7.085-.976c-.661.789-1.057 1.757-1.174 2.896Z" fill="#E5322D"/><path fill-rule="evenodd" clip-rule="evenodd" d="m105.743 222.755.004-.001c.187-.445.435-.851.746-1.21l-7.085.976c-.301.364-.549.76-.742 1.201l-.004.001a6.093 6.093 0 0 0-.428 1.686l7.085-.976a5.606 5.606 0 0 1 .424-1.677Zm9.234 39.125-7.085.976-9.05-32.616 7.085-.975 9.05 32.615Zm-9.758-36.589v.015c-.027.877.161 1.981.708 3.958h-.001v.001l-7.085.975c-.551-1.983-.738-3.083-.707-3.965l.004-.001v-.008l-.003.001c.007-.305.046-.586.1-.859l7.086-.976-.002.008h.002a5.025 5.025 0 0 0-.099.793l-.002.058h-.001Z" fill="#E5322D"/><path d="m169.974 33.323 1.227-5.192c-.093.406-.155.93-.179 1.686l-1.227 5.192c.023-.765.078-1.288.179-1.686Z" fill="#E5322D"/><path d="M192.385 31.816v-.04c.008-.296.279-.514.598-.491l3.939.281c.023 0 .039 0 .054.008.163.039.28.18.28.335l-.132 3.607c-.008.289-.28.515-.599.492a.444.444 0 0 1-.1-.016c-.272-.062-.467-.296-.459-.554l.109-2.865-3.131-.226a.599.599 0 0 1-.551-.453l-.008-.078ZM175.729 33.97l.132-3.606c.008-.172.171-.305.365-.297l3.939.29c.038 0 .07.007.101.015.272.062.466.296.458.554-.008.289-.28.515-.598.492l-3.131-.227-.109 2.865a.523.523 0 0 1-.458.484l-.093.008h-.047a.39.39 0 0 1-.101-.016c-.264-.062-.466-.296-.458-.561ZM192.471 44.11l-.723-2.622-.342-.023-.093 2.458c-.008.266-.179.492-.427.61l-.101.038-.109.024-.116.008h-.094a.444.444 0 0 1-.14-.024.828.828 0 0 1-.629-.6l-.015-.094v-.086l.217-5.925c.008-.305.241-.555.575-.617l.101-.008h.093l1.088.078c.295.023.567.063.808.117.45.11.808.273 1.08.508.419.367.613.913.59 1.623-.031.797-.303 1.35-.823 1.616l-.14.063.8 2.865.008.054v.078c-.016.336-.327.586-.692.563-.054 0-.116-.016-.171-.024a1.033 1.033 0 0 1-.652-.468l-.055-.11-.038-.101Zm-.894-3.84c.35.023.606-.008.762-.086l.062-.039c.14-.094.225-.32.233-.687.015-.351-.047-.593-.156-.71-.062-.07-.186-.125-.357-.172-.039-.008-.085-.016-.132-.031l-.132-.016-.148-.015-.194-.016-.062 1.749.124.023Z" fill="#fff"/><path d="m179.949 38.506.015-.117c.008-.078.023-.148.031-.203a.88.88 0 0 1 .124-.289.373.373 0 0 1 .187-.133c.101-.03.241-.039.419-.03.094.007.179.015.249.03a.783.783 0 0 1 .163.055c.086.04.14.086.179.156.054.094.085.195.109.305.015.086.023.203.023.328l-.008.14-.109 2.99-.007.14-.016.125c-.008.078-.023.149-.031.211a.786.786 0 0 1-.132.297.33.33 0 0 1-.194.14c-.101.04-.241.047-.412.04a1.867 1.867 0 0 1-.233-.032c-.07-.015-.124-.039-.179-.062a.404.404 0 0 1-.178-.164.84.84 0 0 1-.101-.32 2.105 2.105 0 0 1-.024-.344v-.148l.109-2.982.016-.133Z" fill="#FF6A58"/><path d="M186.039 38.225a.723.723 0 0 0-.132.132.644.644 0 0 0-.077.203l-.032.157-.023.148-.023.273-.109 2.818c-.015.46.031.78.14.945.062.093.163.156.326.195a1.49 1.49 0 0 0 .505.023.294.294 0 0 0 .132-.062.66.66 0 0 0 .125-.133.595.595 0 0 0 .062-.187l.031-.195.015-.172.016-.344c.015-.398.381-.694.816-.663.046 0 .093.008.139.023.296.07.536.29.606.57l.016.102v.132a3.949 3.949 0 0 1-.086.734 2.438 2.438 0 0 1-.233.633 1.53 1.53 0 0 1-.442.5 1.682 1.682 0 0 1-.669.28c-.256.055-.551.07-.877.047a4.167 4.167 0 0 1-.568-.078c-.132-.031-.248-.07-.365-.11a2.11 2.11 0 0 1-.683-.421 1.888 1.888 0 0 1-.42-.609 2.484 2.484 0 0 1-.194-.702c-.016-.117-.023-.242-.031-.367v-.406l.085-2.413a3.98 3.98 0 0 1 .094-.803 2.54 2.54 0 0 1 .248-.68c.124-.218.28-.398.466-.538.195-.133.428-.234.707-.297.272-.063.583-.078.932-.055.21.016.412.047.591.086.482.11.847.32 1.103.633.264.327.412.749.451 1.264l.007.203v.273c-.015.399-.38.695-.815.664a.435.435 0 0 1-.14-.023.807.807 0 0 1-.606-.57l-.016-.102v-.086l.008-.21v-.258l-.008-.117-.007-.04-.039-.163-.024-.055a.673.673 0 0 0-.093-.117.234.234 0 0 0-.054-.039 1.495 1.495 0 0 0-.163-.047c-.008 0-.016-.008-.024-.008a.732.732 0 0 0-.194-.023 1.378 1.378 0 0 0-.318.008c-.07 0-.125.015-.156.047ZM178.287 38.725l.007-.195c.055-.672.257-1.187.614-1.538.404-.406 1.026-.57 1.857-.515.225.015.427.046.614.093.52.125.924.352 1.196.687.287.367.45.828.489 1.398l.008.218v.195l-.093 2.6-.016.21c-.054.664-.256 1.172-.606 1.538-.404.422-1.033.594-1.864.54a4.374 4.374 0 0 1-.598-.087 2.57 2.57 0 0 1-.49-.164 1.855 1.855 0 0 1-.753-.585 2.15 2.15 0 0 1-.373-.812 3.158 3.158 0 0 1-.078-.57l-.008-.21v-.22l.094-2.583Zm1.833-.836a.739.739 0 0 0-.124.29 1.248 1.248 0 0 0-.031.202l-.016.117-.008.14-.108 2.983v.148c0 .133.007.242.023.344a.895.895 0 0 0 .109.32c.038.07.101.125.178.164a1.057 1.057 0 0 0 .412.094c.171.015.311 0 .412-.04a.364.364 0 0 0 .194-.14.936.936 0 0 0 .132-.297c.016-.062.023-.133.031-.21l.016-.125.007-.14.109-2.99.008-.141c0-.133-.008-.242-.023-.328a.805.805 0 0 0-.109-.305.355.355 0 0 0-.179-.156 1.135 1.135 0 0 0-.412-.086c-.178-.015-.318 0-.419.032a.337.337 0 0 0-.202.124ZM175.17 49.326l.132-3.607c.008-.289.28-.515.599-.492.038 0 .069.008.101.016.271.062.466.296.458.554l-.109 2.865 3.131.227a.39.39 0 0 1 .101.015.601.601 0 0 1 .45.43l.016.085v.04c-.008.288-.28.515-.598.491l-3.939-.289c-.023 0-.039 0-.062-.008-.163-.03-.288-.171-.28-.327Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="m200.008 58.303 1.227-5.191-.008.032.008-.032a3.202 3.202 0 0 1-.769 1.452l-.001.001-.001.001.001-.003-.084.09a3.35 3.35 0 0 1-1.103.723c-.63.257-1.243.374-2.875.265l-1.227 5.191h.002l-.002.008c.563.039 1.011.047 1.375.032l-.002.007a4.81 4.81 0 0 0 1.041-.148l.001-.006h.002l-.001.006c.155-.047.303-.094.45-.156a4.09 4.09 0 0 0 .373-.18l.001-.003.008-.004-.002.007c.311-.172.583-.39.816-.64v-.002l.001-.001-.001.003c.113-.12.213-.247.306-.386l.029-.043c.186-.29.334-.586.435-1.023Z" fill="#E5322D"/><path d="M172.132 53.416a3.64 3.64 0 0 1-1.422-1.452c-.303-.585-.466-1.147-.427-2.607l.365-9.86.357-9.688c.055-1.584.257-2.154.622-2.708a3.264 3.264 0 0 1 1.515-1.242c.621-.257 1.235-.374 2.843-.273l10.9.789 10.418.757c.815.062 1.382.14 1.825.242.497.117.824.265 1.158.453.621.359 1.103.85 1.421 1.452.311.593.467 1.17.42 2.677l-.241 6.636-.474 12.841c-.054 1.593-.264 2.147-.621 2.71a3.285 3.285 0 0 1-1.523 1.24c-.629.258-1.251.375-2.874.266l-6.837-.492-14.442-1.046c-.816-.055-1.39-.133-1.833-.242a3.974 3.974 0 0 1-1.15-.453Zm18.334-16.151c-.326.062-.567.304-.575.616l-.217 5.925v.086l.015.094a.83.83 0 0 0 .629.593c.047.016.094.016.14.024h.094l.116-.008.109-.023.101-.04c.248-.117.419-.343.427-.608l.093-2.46.342.024.723 2.623.038.101.055.11c.14.234.373.406.652.468a.608.608 0 0 0 .171.023c.373.024.684-.226.692-.562v-.078l-.008-.054-.8-2.865.14-.063c.52-.265.792-.82.823-1.616.031-.71-.171-1.257-.59-1.623-.264-.235-.622-.398-1.08-.508a5.749 5.749 0 0 0-.808-.117l-1.088-.078h-.093l-.101.016Zm-9.074-.703a3.601 3.601 0 0 0-.613-.094c-.832-.062-1.461.11-1.857.516-.358.35-.552.866-.614 1.538l-.008.195-.093 2.591v.219l.008.21c.015.204.039.391.078.57.077.297.194.57.372.813.179.25.435.445.754.585.148.07.311.125.489.164.179.039.389.07.599.086.823.054 1.46-.117 1.864-.539.35-.367.552-.882.606-1.538l.016-.21.093-2.6v-.195l-.008-.219c-.031-.57-.194-1.038-.489-1.397-.28-.336-.676-.57-1.197-.695Zm3.053 1.218a2.54 2.54 0 0 0-.248.679c-.047.234-.078.5-.093.804l-.086 2.412v.406c.008.133.016.25.031.367.031.242.101.476.194.703.101.234.249.437.42.609.179.171.404.312.684.421a3.11 3.11 0 0 0 .932.187c.326.024.621.008.878-.046.264-.063.489-.156.668-.281.178-.125.326-.297.443-.5.108-.195.186-.406.233-.632.046-.219.077-.46.085-.734v-.133l-.015-.101a.795.795 0 0 0-.606-.57c-.047-.016-.086-.016-.14-.024-.435-.03-.8.266-.816.664l-.016.343-.015.172-.031.195a.596.596 0 0 1-.062.188.487.487 0 0 1-.125.132.294.294 0 0 1-.132.063 1.513 1.513 0 0 1-.505-.023c-.163-.04-.264-.102-.326-.196-.101-.156-.155-.476-.14-.944l.109-2.818.023-.274.024-.148.031-.156a.545.545 0 0 1 .077-.203.54.54 0 0 1 .132-.133.316.316 0 0 1 .164-.062c.085-.016.194-.016.318-.008l.194.023c.008 0 .016.008.024.008.062.016.116.031.163.047.023.008.039.023.062.04a.43.43 0 0 1 .085.1l.031.07.039.165.008.039.008.117v.258l-.008.21v.086l.016.102c.07.28.303.5.606.57.046.015.093.015.139.023.435.031.801-.266.816-.664v-.273l-.008-.203c-.038-.515-.186-.944-.45-1.264-.249-.313-.622-.516-1.103-.633a3.368 3.368 0 0 0-.591-.086 3.225 3.225 0 0 0-.932.055 2.01 2.01 0 0 0-.707.297 1.833 1.833 0 0 0-.482.554Zm11.094 9.399-.101 2.865-3.131-.227c-.318-.023-.59.196-.598.492-.008.266.187.492.458.555.032.007.063.015.101.015l3.939.289c.194.016.35-.117.358-.289l.132-3.606c.007-.266-.187-.492-.459-.555a.453.453 0 0 0-.101-.015h-.046l-.094.008a.515.515 0 0 0-.458.468Zm-19.305-17.104c-.194-.016-.358.117-.358.297l-.132 3.606c-.007.265.187.492.459.554.031.008.062.016.101.016h.046l.094-.008c.264-.039.458-.234.466-.484l.108-2.865 3.131.227c.319.023.591-.195.598-.492.008-.266-.186-.492-.458-.554a.453.453 0 0 0-.101-.016l-3.954-.281Zm3.216 19.883c.319.023.59-.195.598-.492v-.039l-.015-.086a.601.601 0 0 0-.451-.437c-.031-.008-.062-.016-.101-.016l-3.131-.226.109-2.865c.008-.265-.186-.492-.458-.554-.031-.008-.062-.016-.101-.016-.319-.023-.591.195-.598.492l-.125 3.607c-.007.156.117.296.28.335a.13.13 0 0 0 .054.008l3.939.289Zm13.549-18.673c-.319-.023-.583.195-.599.492v.039l.016.078a.6.6 0 0 0 .451.437c.031.008.062.016.101.016l3.13.226-.108 2.865c-.008.265.186.492.458.554.031.008.062.016.101.016.319.023.59-.195.598-.492l.132-3.607a.355.355 0 0 0-.279-.335c-.016-.008-.039-.008-.055-.008l-3.946-.281Z" fill="#FF6A58"/><path d="m191.577 40.27-.124-.008.062-1.748.194.015.148.016.132.015a.651.651 0 0 1 .132.032c.171.039.295.101.358.164.108.117.171.359.155.71-.008.36-.093.585-.233.687l-.062.04c-.156.077-.412.108-.762.077Z" fill="#FF6A58"/><path d="m170.657 39.497-1.227 5.192.357-9.688 1.227-5.191-.357 9.687Z" fill="#E5322D"/><path d="M192.17 50.871c-.272-.062-.467-.296-.459-.554.008-.289.28-.515.598-.492l3.131.227.101-2.865c.008-.25.202-.445.458-.484l.094-.008h.046a.39.39 0 0 1 .101.015c.272.063.466.297.459.555l-.132 3.606c-.008.172-.171.305-.358.29l-3.938-.29c-.039.008-.07 0-.101 0Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="m170.292 49.357-.009.038c-.035 1.424.12 1.989.428 2.57.319.6.8 1.092 1.421 1.45l.002-.006c.326.187.66.335 1.149.453.443.109 1.01.187 1.834.241l14.441 1.047-1.227 5.19-14.442-1.045c-.816-.055-1.39-.133-1.833-.242a4.068 4.068 0 0 1-1.149-.453l-.002.008a3.638 3.638 0 0 1-1.421-1.452c-.303-.586-.466-1.148-.428-2.608l.01-.04.364-9.82 1.227-5.19-.365 9.859Zm26.102 6.292-1.227 5.191-6.837-.492 1.228-5.19 6.836.491Z" fill="#E5322D"/><g filter="url(#b)"><path d="m336.694 27.413-65.622-17.221c-3.116-.82-6.301 1.062-7.117 4.2L226.58 158.249c-.815 3.138 1.049 6.347 4.164 7.159l65.622 17.213c3.116.82 6.301-1.062 7.117-4.2l37.375-143.85c.816-3.138-1.049-6.346-4.164-7.158Z" fill="#fff"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M280.042 22.019c5.19 1.358 8.297 6.69 6.946 11.905-1.352 5.214-6.658 8.337-11.848 6.979-5.189-1.359-8.297-6.69-6.945-11.905 1.36-5.215 6.658-8.338 11.847-6.98Z" fill="#FFC233"/><path fill-rule="evenodd" clip-rule="evenodd" d="m272.634 31.675.474-4.402c.015-.102.093-.172.178-.164.031 0 .062.015.086.039l2.082 2.006c.062.055.147.047.209-.016l3.178-3.434c.062-.07.163-.07.217 0a.142.142 0 0 1 .031.062l1.251 4.606c.024.086.093.133.171.11l2.859-.72c.085-.023.163.04.179.134.007.03 0 .07-.016.101l-1.74 4.075c-.031.086-.117.133-.187.11l-8.864-2.327c-.07-.008-.116-.086-.108-.18ZM272.36 34.01a.652.652 0 0 1 .792-.469l7.311 1.92a.652.652 0 0 1-.326 1.265l-7.311-1.92a.654.654 0 0 1-.466-.796Z" fill="#33333B"/><path d="m307.189 120.778-57.807-15.168a1.273 1.273 0 0 0-1.554.921l-1.476 5.684a1.29 1.29 0 0 0 .909 1.569l57.807 15.168a1.274 1.274 0 0 0 1.554-.922l1.476-5.683a1.277 1.277 0 0 0-.909-1.569ZM310.884 106.578 253.077 91.41a1.272 1.272 0 0 0-1.553.921l-1.476 5.683c-.179.687.233 1.39.909 1.57l57.806 15.167a1.272 1.272 0 0 0 1.554-.921l1.476-5.683a1.289 1.289 0 0 0-.909-1.569ZM303.683 134.276l-57.807-15.168a1.271 1.271 0 0 0-1.553.921l-1.477 5.683a1.29 1.29 0 0 0 .909 1.569l57.807 15.168a1.272 1.272 0 0 0 1.554-.921l1.476-5.683a1.276 1.276 0 0 0-.909-1.569Z" fill="#F5F5FA"/><path d="m293.67 31.73 32.675 8.571" stroke="url(#c)" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round"/><path d="m291.744 39.115 27.773 7.284" stroke="url(#d)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/><path d="m285.62 55.22-20.44-5.363c-1.359-.36-2.757.468-3.115 1.834l-3.325 12.78c-.357 1.373.459 2.779 1.826 3.13l20.439 5.363c1.36.36 2.758-.468 3.116-1.835l3.317-12.779a2.552 2.552 0 0 0-1.818-3.13ZM318.755 63.908l-20.448-5.363c-1.359-.359-2.757.469-3.115 1.843l-3.317 12.779c-.357 1.374.458 2.779 1.826 3.13l20.447 5.363c1.359.36 2.758-.468 3.115-1.834l3.317-12.78a2.57 2.57 0 0 0-1.825-3.138ZM313.916 92.238 256.109 77.07a1.273 1.273 0 0 0-1.554.92l-1.476 5.684c-.179.687.233 1.39.909 1.57l57.807 15.167a1.271 1.271 0 0 0 1.553-.921l1.477-5.683a1.284 1.284 0 0 0-.909-1.57Z" fill="#F5F5FA"/><path d="M23.144 204.527c23.218-3.04 46.186-7.184 68.533-14.358 13.968-4.484 27.609-9.951 40.967-16.053 13.348-6.102 27.054-12.674 39.639-20.548 11.331-7.086 22.695-16.49 28.611-28.836 1.951-4.057 2.496-8.672 1.711-13.09-.948-5.325-4.532-9.492-9.457-11.493-3.051-1.236-6.396-1.443-9.643-1.389-3.857.077-7.692.46-11.506 1.05-7.561 1.159-14.861 3.434-21.9 6.452-13.99 6.003-27.141 15.43-37.067 27.087-6.591 7.764-10.492 21.05-2.756 29.394 4.554 4.899 11.734 6.933 18.076 8.016 5.894.995 11.876 1.345 17.847 1.334 8.139-.011 16.376-.492 24.438-1.662 11.593-1.695 22.293-6.201 31.532-13.451 2.898-2.263 5.579-4.779 8.39-7.152.272-.229.556-.459.828-.678.828-.678-.676.471.163-.131.556-.404 1.112-.809 1.7-1.159.251-.142.501-.273.752-.415.087-.044.218-.088.294-.154.534-.371-.97.274-.349.143.251-.044.502-.175.741-.252.098-.022.196-.044.294-.076.937-.296-.283.273-.294.01 0-.021.698-.032.752-.032.098 0 .207.022.305.011.839-.044-.599.164-.425-.066.207-.284 2.408 1.017.915.219.404.218.284.382-.239-.252.305.372.098.263.065-.011-.043-.383-.218-.306-.022.033-.523-.929-.261-.733-.174-.372.174.711.087-1.05 0 .088-.011.164-.033.372-.011.525.087.721.207-.853.022-.153-1.068 4.035-2.909 7.742-4.173 11.711-1.406 4.374-1.863 9.689 1.83 13.101 3.247 2.996 7.66 3.171 11.615 1.673 4.238-1.608 8.008-4.177 11.637-6.846 4.543-3.346 8.226-6.386 12.366-9.502 3.661-2.756 7.409-5.424 11.549-7.426.229-.109.861-.339-.054.022.207-.076.403-.175.621-.24.403-.142.795-.285 1.198-.405.382-.109.774-.197 1.155-.284.186-.044.371-.066.567-.099-1.209.23-.479.044-.174.055.327.011.719.044 1.035.011.697-.066-.872-.317-.251-.022.044.022.305.099.382.088.098 0 .937.262.01-.033.033.011.48.229.512.317l-.337-.241c.294.318.283.274-.033-.131.174.252.305.514.458.788-.447-.799.119.601.218.907.316 1.006-.011-.733.065.361.022.252.044.503.054.744.077 1.454-.021 2.93-.174 4.385-.131 1.214-.218 1.771-.468 3.313-.251 1.542-.491 2.975-.676 4.462-.381 3.138-.011 6.594 1.841 9.24 2.016 2.876 4.98 4.396 8.401 4.801 5.862.7 12.029-2.308 17.226-4.681 5.241-2.394 10.263-5.238 15.352-7.939 10.318-5.489 20.701-10.027 32.403-9.71 6.854.186 13.533 2.067 19.983 4.789 1.961.832 4.325-.896 4.837-2.766.622-2.286-.784-4.046-2.745-4.877-12.617-5.337-26.259-6.649-39.431-2.636-11.027 3.357-20.789 9.623-31.053 14.708-2.506 1.247-4.685 2.242-6.853 3.084-1.264.481-2.528.94-3.814 1.345-1.209.383-2.898.809-3.552.842-1.71.088-1.667.12-3.072-.383.654.241.141.055-.011-.022-.294-.164-.588-.328-.861-.535.589.448.142.065.033-.044-.469-.47.109.394-.338-.416-.142-.262-.305-.514-.414-.787.262.623.044.011.011-.109-.229-.864-.196-.492-.229-1.422-.022-.733.044-1.454.12-2.198-.109 1.072.131-.875.185-1.192.872-5.435 2.343-11.777-.12-17.004-2.211-4.692-7.42-5.665-11.985-4.451-4.097 1.093-7.866 3.488-11.331 5.894-2.038 1.411-4.021 2.909-5.982 4.407-1.111.853-2.212 1.717-3.323 2.581l-1.482 1.159c-.25.186-.49.383-.741.58.578-.449-.37.284-.392.295-3.705 2.876-7.453 5.796-11.528 8.125-.784.448-1.59.853-2.397 1.257-.806.405.589-.186-.381.164-.458.164-.915.328-1.384.46-.348.098-.751.142-1.1.262-.567.197.316-.044.414-.044-.207.011-.403.044-.61.044-.175 0-.872.098-.97-.033-.076-.098 1.1.339.49.055a2.121 2.121 0 0 0-.534-.142c-.621-.022.927.59.164.076-.142-.098-.349-.186-.501-.273-.087-.044-.752-.58-.251-.153.545.459-.163-.164-.152-.197l-.164-.186c.338.47.425.58.262.328-.011-.109-.229-.415-.295-.503.502.667.197.634.131.306-.032-.186-.109-.656-.207-.798-.218-.306-.011.951.033.208.011-.208-.011-.427-.011-.634 0-.394.044-.788.076-1.17-.12 1.213.087-.296.153-.591.131-.58.294-1.148.468-1.717 1.199-3.86 3.258-7.458 4.152-11.416 1.024-4.56-.404-8.803-5.154-10.236-2.996-.908-6.102-.197-8.76 1.334-2.659 1.531-4.979 3.751-7.278 5.785-1.406 1.236-2.801 2.46-4.25 3.642-.348.284-.697.557-1.046.831.785-.624-.468.35-.675.503-.959.71-1.94 1.399-2.931 2.055-4.456 2.942-8.564 4.9-13.315 6.43-6.864 2.22-13.935 3.008-21.093 3.511-6.865.47-13.772.678-20.637.251a111.218 111.218 0 0 1-3.813-.306c-.621-.066-1.242-.131-1.863-.208-1.155-.131.49.077-.196-.022-.404-.054-.807-.12-1.199-.175-2.027-.328-4.042-.732-6.014-1.279a35.12 35.12 0 0 1-2.506-.776c-.382-.132-.752-.274-1.133-.416-.142-.055-.295-.12-.425-.164-.741-.273.762.372.119.044-1.231-.624-2.462-1.192-3.606-1.98-.207-.142-.403-.317-.621-.448.316.186.643.558.044.011-.382-.35-.774-.689-1.123-1.072-.152-.175-.294-.35-.446-.514-.567-.601.566.897.13.186-.207-.339-.446-.667-.643-1.017-.087-.164-.163-.339-.261-.503-.425-.732.163.645.142.35-.077-.907-.611-1.859-.741-2.777-.501-3.259.261-6.704 1.754-9.613 1.645-3.204 4.042-5.762 6.537-8.299a103.677 103.677 0 0 1 8.226-7.568c11.07-9.142 24.276-15.834 38.266-18.929a72.607 72.607 0 0 1 10.394-1.553c3.105-.229 6.799-.47 9.338.099.632.142 1.242.328 1.852.536 1.09.371-.381-.208.218.076.261.12.512.252.763.394.25.142 1.503 1.071.795.47.425.361.817.765 1.198 1.17.175.175.513.744.033.011.109.153.229.317.327.481.24.416.458.842.686 1.269.447.809-.174-.788.033.12.044.175.131.372.175.547.163.547.25 1.115.392 1.673.054.219.065.776-.022-.208.022.284.054.569.076.853.022.427.033.842.033 1.279 0 .427-.033.832-.055 1.258-.01.241-.152 1.181.022.033-.043.262-.076.525-.131.787a17.203 17.203 0 0 1-.631 2.45c-.055.153-.12.295-.153.448-.229.776.468-.776.054-.12-.294.47-.501 1.017-.773 1.498-3.269 5.993-7.736 11.143-12.813 15.637-9.283 8.235-20.746 14.118-31.826 19.815-13.696 7.043-27.686 13.516-42.068 19.006-22.26 8.497-45.304 14.336-68.85 18-5.273.82-9.98 1.465-14.698 2.088-2.103.274-3.933 1.619-3.933 3.97 0 1.935 1.809 4.243 3.933 3.969l-.043.044Z" fill="url(#e)"/><path d="M82.335 51.05a2.442 2.442 0 0 0 2.827 1.991l10.589-1.881a.405.405 0 0 0 .163-.726L81.1 40.004a.405.405 0 0 0-.629.399l1.865 10.648Z" fill="#FFB6AD"/><g filter="url(#f)"><path d="m93.824 24.493 13.238 9.321c.435.304.73.773.824 1.296l13.874 79.259a4.778 4.778 0 0 1-3.853 5.535l-62.328 11.069a4.74 4.74 0 0 1-5.5-3.872L34.697 39.247c-.459-2.6 1.274-5.074 3.853-5.534l53.783-9.548a1.978 1.978 0 0 1 1.491.328Z" fill="#fff"/></g><path d="m93.824 24.493 13.238 9.321c.435.304.73.773.824 1.296l13.874 79.259a4.778 4.778 0 0 1-3.853 5.535l-62.328 11.069a4.74 4.74 0 0 1-5.5-3.872L34.697 39.247c-.459-2.6 1.274-5.074 3.853-5.534l53.783-9.548a1.978 1.978 0 0 1 1.491.328Z" stroke="#fff"/><path d="m100.219 45.742-52.206 9.274a.762.762 0 0 0-.613.882l.202 1.124c.07.414.466.695.878.617l52.205-9.266a.756.756 0 0 0 .614-.882l-.194-1.124a.768.768 0 0 0-.886-.625ZM106.147 79.872l-52.206 9.266a.761.761 0 0 0-.614.883l.195 1.124c.07.413.466.695.877.616l52.206-9.266a.756.756 0 0 0 .614-.882l-.194-1.124a.744.744 0 0 0-.878-.617ZM102.293 57.374l-52.205 9.274a.762.762 0 0 0-.614.882l.194 1.124c.07.414.466.695.878.617l52.206-9.274a.762.762 0 0 0 .613-.882l-.194-1.124a.757.757 0 0 0-.878-.617ZM108.213 91.496l-52.205 9.266a.762.762 0 0 0-.614.882l.194 1.124c.07.414.466.687.878.617l52.206-9.274a.762.762 0 0 0 .613-.882l-.194-1.124a.763.763 0 0 0-.878-.61ZM103.024 61.738 50.81 71.004a.762.762 0 0 0-.614.882l.195 1.124c.07.414.466.695.878.617l52.213-9.259a.762.762 0 0 0 .614-.882l-.194-1.124a.757.757 0 0 0-.878-.624ZM108.944 95.86l-52.206 9.274a.761.761 0 0 0-.614.882l.194 1.124c.07.414.467.695.878.617l52.206-9.274a.762.762 0 0 0 .614-.882l-.194-1.124a.76.76 0 0 0-.878-.617ZM78.398 54.283l-29.467 5.23a.898.898 0 0 0-.722 1.03l.155.875a.883.883 0 0 0 1.026.718l29.466-5.23a.887.887 0 0 0 .715-1.03L79.416 55a.877.877 0 0 0-1.018-.718ZM84.316 88.405l-29.467 5.23a.898.898 0 0 0-.722 1.03l.155.875a.877.877 0 0 0 1.026.718l29.466-5.23a.886.886 0 0 0 .715-1.03l-.155-.875a.877.877 0 0 0-1.018-.718ZM81.185 70.075l-29.467 5.23a.898.898 0 0 0-.722 1.031l.155.874a.883.883 0 0 0 1.026.719l29.467-5.23a.887.887 0 0 0 .714-1.031l-.155-.875a.873.873 0 0 0-1.018-.718ZM87.113 104.205l-29.467 5.23a.898.898 0 0 0-.722 1.031l.155.874a.883.883 0 0 0 1.026.718l29.466-5.23a.887.887 0 0 0 .715-1.031l-.155-.874a.871.871 0 0 0-1.018-.718Z" fill="#D6D6DF"/><path d="M93.71 36a2.442 2.442 0 0 0 2.827 1.99l10.589-1.88a.405.405 0 0 0 .163-.727l-14.815-10.43a.405.405 0 0 0-.629.399L93.71 36Z" fill="#FF6A58"/><defs><linearGradient id="c" x1="291.472" y1="33.615" x2="328.556" y2="38.378" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset=".53" stop-color="#FCEE21"/><stop offset="1" stop-color="#FFB400"/></linearGradient><linearGradient id="d" x1="290.75" y1="40.834" x2="320.537" y2="44.659" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset=".53" stop-color="#FCEE21"/><stop offset="1" stop-color="#FFB400"/></linearGradient><linearGradient id="e" x1="22.974" y1="151.644" x2="361.571" y2="151.644" gradientUnits="userSpaceOnUse"><stop stop-color="#9CF"/><stop offset=".351" stop-color="#0062C5"/><stop offset=".691" stop-color="#9CF"/><stop offset="1" stop-color="#0062C5"/></linearGradient><filter id="a" x="0" y="37.14" width="117.211" height="136.914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="5"/><feGaussianBlur stdDeviation="7.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_811_12387"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_811_12387" result="shape"/></filter><filter id="b" x="211.389" y="0" width="144.66" height="202.813" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="5"/><feGaussianBlur stdDeviation="7.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_811_12387"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_811_12387" result="shape"/></filter><filter id="f" x="19.623" y="14.134" width="117.211" height="136.914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="5"/><feGaussianBlur stdDeviation="7.5"/><feColorMatrix values="0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0.1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_811_12387"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_811_12387" result="shape"/></filter></defs></svg>
                            </div>
        </div>
    </div>
</div>
<div>
  <Fotter/>
</div>
</div>

</div>

  );
};

export default HomePage;
