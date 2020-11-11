// index

import { removeStore } from './store'

async function cargando() {
	removeStore()
	await setTimeout(function () {
		location.href = `http://${location.host}/perfil1.html`
	}, 3000)
}

document.addEventListener('load', cargando, true)
