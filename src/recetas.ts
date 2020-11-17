import { Receta, recetas, desayunos } from './db'
import { setStorage, PlanioStore, getStorage } from './store'
import { volver } from './util'

const planioStore = getStorage()

function setTitulos() {
	let h1 = document.querySelector('h1')
	let p = document.querySelector('p')
	h1.textContent = `Opciones de ${planioStore.comida}`
	p.textContent = `Reemplazar ${planioStore.comida}`
}

setTitulos()

function goToReceta(receta: Receta) {
	let data: PlanioStore = { ...planioStore }
	data.receta = receta
	setStorage(data)
	location.href = `http://${location.host}/receta.html`
}

function setOpciones() {
	let opcionesRecetas: Receta[]

	planioStore.comida === 'almuerzo' || planioStore.comida === 'cena'
		? (opcionesRecetas = recetas)
		: (opcionesRecetas = desayunos)

	let container = document.getElementById(
		'mini-recetas-container',
	) as HTMLDivElement

	opcionesRecetas.map((receta) => {
		let miniReceta = document.createElement('div')
		miniReceta.id = receta.titulo
		miniReceta.classList.add(
			'w40',
			'mx-1',
			'my-05',
			'd-flex',
			'justify-content-center',
			'flex-wrap',
		)
		miniReceta.innerHTML = `
					<div
						tabindex="0"
                        class="mini-receta d-flex w100 justify-content-end text-center flex-column flex-wrap" style="
                        background: linear-gradient(
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.6),
			rgba(0, 0, 0, 1)
		),
		url(${receta.img}); background-size: cover"
					>	<h2 class="titulo-mini-receta w75">${receta.titulo}</h2>
						<div class="align-self-end mb-05  w100">

							<span class="white w50 mr-05">
								<i class="far fa-clock fa-sm"></i> ${receta.tiempo}
							</span>
							<span class="white w50 ml-05">
								<i class="fas fa-dollar-sign fa-sm" aria-label="pesos"></i> ${receta.costo}
							</span>
						</div>
					</div>

				`

		container.appendChild(miniReceta)

		miniReceta.addEventListener('click', goToReceta.bind(this, receta))
	})
}

setOpciones()

const buttonVolver = document.getElementById('volver')

buttonVolver.addEventListener('click', volver)
