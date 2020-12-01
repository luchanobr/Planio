// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Receta, recetas, desayunos } from './db'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setStorage, PlanioStore, getStorage } from './store'
import { volver } from './util'

const planioStore = getStorage()

function setTitulos() {
	const h1 = document.querySelector('h1')
	const p = document.querySelector('p')
	h1.textContent = `Opciones de ${planioStore.comida}`
	p.textContent = `Reemplazar ${planioStore.comida}`
}

setTitulos()

function goToReceta(receta: Receta) {
	const data: PlanioStore = { ...planioStore }
	data.receta = receta
	setStorage(data)
	location.href = `http://${location.host}/receta.html`
}

const Scategoria = document.getElementById('categoria') as HTMLSelectElement
const Sorden = document.getElementById('orden') as HTMLSelectElement

function ordenar(recetas: Receta[]): Receta[] {
	const attr = Scategoria.value
	const orden = Sorden.value
	console.log({ attr }, { orden })
	recetas = recetas.sort((a, b) => {
		if (attr === 'tiempo') {
			if (a.tiempo < b.tiempo) {
				return -1
			} else return 1
		} else {
			return a.costo - b.costo
		}
	})
	orden === 'Desc' ? (recetas = recetas.reverse()) : null
	return recetas
}

function setOpciones() {
	let opcionesRecetas: Receta[]

	planioStore.comida === 'almuerzo' || planioStore.comida === 'cena'
		? (opcionesRecetas = recetas)
		: (opcionesRecetas = desayunos)

	const container = document.getElementById(
		'mini-recetas-container',
	) as HTMLDivElement
	container.innerHTML = ''
	opcionesRecetas = ordenar(opcionesRecetas)

	opcionesRecetas.map((receta) => {
		const miniReceta = document.createElement('li')
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
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.75),
			rgba(0, 0, 0, 1)
		),
		url(${receta.img}); background-size: cover"
					>	<h2 class="titulo-mini-receta w75">${receta.titulo}</h2>
						<div class="align-self-end mb-05  w100">

							<p class="white w50 mr-05 display-inline">
								<i class="far fa-clock fa-sm" aria-label="Tiempo de preparación"></i> ${receta.tiempo} min
							</p>
							<p class="white w50 ml-05 display-inline">
								<i class="fas fa-dollar-sign fa-sm" aria-label="Costo pesos"></i> ${receta.costo}
							</p>
						</div>
					</div>

				`

		container.appendChild(miniReceta)

		miniReceta.addEventListener('click', goToReceta.bind(this, receta))
	})
}

setOpciones()

const buttonVolver = document.getElementById('volver')

Scategoria.addEventListener('change', setOpciones)
Sorden.addEventListener('change', setOpciones)

buttonVolver.addEventListener('click', volver)
