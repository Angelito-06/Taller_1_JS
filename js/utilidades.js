function crearNodo(nodo) {
    var nodo = document.createElement(nodo)
    return nodo
}

function crearNodoTexto(nodo, texto) {
    var nodo = crearNodo(nodo)
    var nodoTexto = document.createTextNode(texto)
    nodo.appendChild(nodoTexto)
    return nodo
}

function crearAbreviacion(titulo, texto) {
    var abbr = crearNodo("abbr")
    abbr.textContent = texto
    abbr.title = titulo
    return abbr
}

function crearImagen(rutImagen, textoAlternativo, ancho, alto) {
    var imagen = crearNodo("img")
    imagen.src = rutImagen
    imagen.alt = textoAlternativo
    imagen.width = ancho
    imagen.height = alto
    adicionarNodoBody(imagen)
}

function crearEnlace(text, rutEnlace, target) {
    var enlace = crearNodo("a")
    var nodoTexto = document.createTextNode(text)
    enlace.href = rutEnlace
    enlace.target = target
    enlace.appendChild(nodoTexto)
    return enlace
}

function crearVideo(rutaVideo) {
    var nodoVideo = crearNodo("Video")
    var source = crearNodo("source")
    source.src = rutaVideo
    nodoVideo.setAttribute("controls", "controls")
    nodoVideo.appendChild(source)
    return nodoVideo
}

function adicionarNodoBody(nodo) {
    document.body.appendChild(nodo)
}

function adicionarContenedor(nodo, contenedor){
    contenedor.appendChild(nodo)
}