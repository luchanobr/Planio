import { getStorage, setStorage } from './store'
import { volver } from './util'

const planioStore = getStorage()
const comidas = planioStore.comidas

function tipoComida(index: number): string {
	if (index === 0) return 'desayuno'
	else if (index === 1) return 'almuerzo'
	else if (index === 2) return 'merienda'
	else return 'cena'
}

function setComidas() {
	let comidasContainer = document.getElementById('recetas-container')
	comidas.map((comida, index) => {
		let card = document.createElement('div')
		card.classList.add('card-receta', 'w90', 'd-flex', 'flex-wrap')
		card.style.background = `linear-gradient(
			rgba(0, 0, 0, 0.1),
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.75),
			rgba(0, 0, 0, 0.97)
		),
		url(${comida.img})`
		card.style.backgroundSize = 'cover'
		card.innerHTML = `<div class="d-flex justify-content-between mt-05 w100">
						<h3 class="text-light white ml-1 mt-05 capitalize">${tipoComida(index)}</h3>
						<button class="btn-icon white mr-05">
							<i class="far fa-heart"></i>
						</button>
					</div>
					<h4 class="white ml-1 titulo-receta w66">
						${comida.titulo}
					</h4>
					<div class="d-flex justify-content-between align-self-end w100 mb-1">
						<div class="ml-1">
							<span class="white mr-05">
								<i class="far fa-clock fa-sm"></i> ${comida.tiempo}
							</span>
							<span class="white">
								<i class="fas fa-dollar-sign fa-sm"></i> ${comida.costo}
							</span>
						</div>
						<button class="btn-card mr-05" id="${tipoComida(index)}">
							reemplazar <i class="fas fa-sync-alt"></i>
						</button>
					</div>`
		comidasContainer.appendChild(card)
	})
}

setComidas()

const reemplazarDesayuno = document.getElementById(
	'desayuno',
) as HTMLButtonElement
const reemplazarAlmuerzo = document.getElementById(
	'almuerzo',
) as HTMLButtonElement
const reemplazarMerienda = document.getElementById(
	'merienda',
) as HTMLButtonElement
const reemplazarCena = document.getElementById('cena') as HTMLButtonElement

reemplazarAlmuerzo.addEventListener(
	'click',
	goToRecetas.bind(this, reemplazarAlmuerzo.id),
	true,
)
reemplazarDesayuno.addEventListener(
	'click',
	goToRecetas.bind(this, reemplazarDesayuno.id),
	true,
)
reemplazarMerienda.addEventListener(
	'click',
	goToRecetas.bind(this, reemplazarMerienda.id),
	true,
)
reemplazarCena.addEventListener(
	'click',
	goToRecetas.bind(this, reemplazarCena.id),
	true,
)

function goToRecetas(id: string, e: Event) {
	const data = getStorage()
	data.comida = id
	console.log(data)
	setStorage(data)
	location.href = `http://${location.host}/recetas.html`
}

const buttonVolver = document.getElementById('volver')

buttonVolver.addEventListener('click', volver)
