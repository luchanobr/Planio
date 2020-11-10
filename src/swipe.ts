type preferencia = {
	url: string
	fondo: string
	titulo: string
	descripcion: string
}

const images: Array<preferencia> = [
	{
		url: 'assets/img/chili.png',
		fondo: ' rgb(255,173, 154)',
		titulo: 'Chili',
		descripcion:
			'Pimenton, ajos o morrones de diversos tipos. Son utilizados en diversas recetas.',
	},

	{
		url: 'assets/img/ostras.png',
		fondo: 'rgb(174, 254, 209)',
		titulo: 'Ostras',
		descripcion:
			'Poseen un gran valor nutricional y son utilizadas mayormente como acompañamiento',
	},
	{
		url: 'assets/img/huevos.png',
		fondo: 'rgb(190, 182, 140)',
		titulo: 'huevos',
		descripcion:
			'xxxx xxxxx xxxxx xxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxx xxx',
	},
	{
		url: 'assets/img/brocoli.png',
		fondo: 'rgb(174, 254, 209)',
		titulo: 'Brocoli',
		descripcion:
			'xxxx xxxxx xxxxx xxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxx xxx',
	},
]

const swipe = document.getElementById('swipe')

function setScale(index: number) {
	return 1 - (images.length - index) * 0.01
}

function setImagenes() {
	//  refactor
	let initialX = 0
	swipe.innerHTML = ''
	images.length === 0
		? (location.href = `http://${location.host}/perfil4.html`)
		: null
	images.map((item, index) => {
		const card = document.createElement('div')
		card.id = `${index}`
		const s = index - images.length
		card.innerHTML = `<div class="img-container"> <div class="img" style="background-image: url(${item.url});"></div> <div class="fondo-img" style="background: ${item.fondo}"> </div>  </div>  <h3 class="ml-05 my-1">${item.titulo}</h3> <p class="ml-05 text-light my-1">${item.descripcion}</p>`
		card.classList.add('swipe-item')
		let z = (index + 1) * 10
		let margin = `${index * -10}px`
		card.style.setProperty('z-index', z.toString())
		card.style.setProperty('top', margin)
		index !== images.length - 1
			? card.style.setProperty('transform', `scale(${setScale(index)})`)
			: null
		swipe.appendChild(card)
	})

	const img = document.getElementById(`${images.length - 1}`)
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
			images.splice(-1, 1)
			setTimeout(() => {
				setImagenes()
			}, 1000)
		} else {
			img.classList.add('salirDer')
			images.splice(-1, 1)
			setTimeout(() => {
				setImagenes()
			}, 1000)
		}
	}
}

setImagenes()

const buttonContinuar = document.getElementById(
	'continuar',
) as HTMLButtonElement

function goToPerfil4() {
	location.href = `http://${location.host}/perfil4.html`
}
buttonContinuar.addEventListener('click', goToPerfil4, true)
