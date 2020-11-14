import { PlanioStore, setStorage } from './store'
import { volver } from './util'

const perfil1Button = document.getElementById(
	'perfil1Button',
) as HTMLButtonElement

function goToPerfil2(event: any) {
	let data: PlanioStore = {} as PlanioStore
	setStorage(data)
	event.preventDefault()
	location.href = `http://${location.host}/perfil2.html`
}

const perfil2Button = document.getElementById(
	'perfil2Button',
) as HTMLButtonElement

function goToPerfil3(event: any) {
	event.preventDefault()
	location.href = `http://${location.host}/perfil3.html`
}

function setListeners() {
	perfil1Button === null
		? null
		: perfil1Button.addEventListener('click', goToPerfil2, true)

	perfil2Button === null
		? null
		: perfil2Button.addEventListener('click', goToPerfil3, true)
}

setListeners()

const buttonVolver = document.getElementById('volver')

buttonVolver.addEventListener('click', volver)
