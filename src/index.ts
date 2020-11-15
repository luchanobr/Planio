// index

import { defaultComidas } from './db'
import { removeStore, setStorage, PlanioStore } from './store'

async function cargando() {
	removeStore()
	const data = {} as PlanioStore
	data.comidas = defaultComidas
	setStorage(data)
	await setTimeout(function () {
		location.href = `http://${location.host}/perfil1.html`
	}, 3000)
}

document.addEventListener('load', cargando, true)
