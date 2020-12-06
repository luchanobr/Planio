import { volver } from './util'

function goToPerfil3(event: Event) {
	event.preventDefault()
	location.href = `http://${location.host}/perfil2.html`
}

const button = document.getElementById('perfilTButton')

const buttonVolver = document.getElementById('volver')

buttonVolver.addEventListener('click', volver)
button.addEventListener('click', goToPerfil3)
