function validar() {
    let tipomensaje, nombre, email, comentario

    tipomensaje = document.getElementById('tipomensaje').value
    nombre     = document.getElementById('nombre').value
    email       = document.getElementById('email').value
    comentario  = document.getElementById('comentario').value

    alert(tipomensaje + " " + nombre + " " + email + " " + comentario)

}