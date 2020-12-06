// index

import { removeStore } from './store'

async function cargando(e: Event) {
	e.preventDefault()
	removeStore()

	location.href = `http://${location.host}/perfil1.html`
}
const comenzar = document.getElementById('comenzar')

comenzar.addEventListener('click', cargando, true)
