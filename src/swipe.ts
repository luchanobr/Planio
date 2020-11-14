import { preferencias } from './db'
import { volver } from './util'

const swipe = document.getElementById('swipe')

function setScale(index: number) {
	return 1 - (preferencias.length - index) * 0.01
}

function setImagenes() {
	//  refactor
	let initialX = 0
	swipe.innerHTML = ''
	preferencias.length === 0
		? (location.href = `http://${location.host}/perfil4.html`)
		: null
	preferencias.map((item, index) => {
		const card = document.createElement('div')
		card.id = `${index}`
		const s = index - preferencias.length
		card.innerHTML = `<div id="${index}3"> <div class="img-container"> <div class="img" style="background-image: url(${item.url});"  alt="${item.titulo}"></div> <div class="fondo-img" style="background: ${item.fondo}"> </div>  </div> <div tabindex="0" id="${item.titulo}"> <p class="sr-only"> Preferncias ${preferencias.length} de 4 <P> <h3 class="ml-05 my-1" >${item.titulo}</h3> <p class="ml-05 text-light my-1">${item.descripcion}</p> </div> </div>`
		card.classList.add('swipe-item')
		let z = (index + 1) * 10
		let margin = `${index * -10}px`
		card.style.setProperty('z-index', z.toString())
		card.style.setProperty('top', margin)
		swipe.appendChild(card)
		if (index !== preferencias.length - 1) {
			card.style.setProperty('transform', `scale(${setScale(index)})`)
			const hidden = document.getElementById(`${index}3`)
			hidden.setAttribute('aria-hidden', 'true')
		}
		const tituloCard = document.getElementById(item.titulo)
		preferencias.length !== 4 ? tituloCard.focus() : null
	})

	const img = document.getElementById(`${preferencias.length - 1}`)
	img.addEventListener('touchstart', move)
	img.addEventListener('touchend', moveEnd)

	function move(e: TouchEvent) {
		initialX = e.changedTouches[0].clientX
	}

	function moveEnd(e: TouchEvent) {
		let finalX = e.changedTouches[0].clientX
		let result = finalX - initialX
		console.log(finalX, result, initialX)
		if (Math.abs(result) <= 60) {
			null
		} else if (initialX >= finalX) {
			img.classList.add('salirIzq')
			preferencias.splice(-1, 1)
			setTimeout(() => {
				setImagenes()
			}, 1000)
		} else {
			img.classList.add('salirDer')
			preferencias.splice(-1, 1)
			setTimeout(() => {
				setImagenes()
			}, 1000)
		}
	}
}

setImagenes()

const aceptar = document.getElementById('aceptar') as HTMLButtonElement
const rechazar = document.getElementById('rechazar') as HTMLButtonElement
const buttonContinuar = document.getElementById(
	'continuar',
) as HTMLButtonElement

aceptar.addEventListener('click', aceptarPreferencia)
rechazar.addEventListener('click', rechazarPreferencia)

function aceptarPreferencia() {
	const img = document.getElementById(`${preferencias.length - 1}`)
	img.classList.add('salirDer')
	preferencias.splice(-1, 1)
	setTimeout(() => {
		setImagenes()
	}, 1000)
}

function rechazarPreferencia() {
	const img = document.getElementById(`${preferencias.length - 1}`)
	img.classList.add('salirIzq')
	preferencias.splice(-1, 1)
	setTimeout(() => {
		setImagenes()
	}, 1000)
}

function goToPerfil4() {
	location.href = `http://${location.host}/perfil4.html`
}
buttonContinuar.addEventListener('click', goToPerfil4, true)
const buttonVolver = document.getElementById('volver')

buttonVolver.addEventListener('click', volver)
