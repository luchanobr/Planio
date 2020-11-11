import { Receta, recetas } from './db'
import { setStorage, PlanioStore } from './store'

function goToReceta(receta: Receta) {
	console.log(receta)
	let data: PlanioStore = {} as PlanioStore
	data.receta = receta
	setStorage(data)
	location.href = `http://${location.host}/receta.html`
}

function setOpciones(recetas: Receta[]) {
	let container = document.getElementById(
		'mini-recetas-container',
	) as HTMLDivElement

	recetas.map((receta) => {
		let miniReceta = document.createElement('div')
		miniReceta.id = receta.titulo
		miniReceta.classList.add(
			'w40',
			'mx-05',
			'd-flex',
			'justify-content-center',
			'flex-wrap',
			'h200',
		)
		miniReceta.innerHTML = `
					<div
                        class="mini-receta d-flex w100 h150 justify-content-center text-center" style="
                        background: linear-gradient(
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 1)
		),
		url(${receta.img}); background-size: cover"
					>
						<div class="align-self-end mb-05 small w100">
							<span class="brand w50 mr-05">
								<i class="far fa-clock fa-sm"></i> ${receta.tiempo}
							</span>
							<span class="white w50 ml-05">
								<i class="fas fa-dollar-sign fa-sm"></i> ${receta.costo}
							</span>
						</div>
					</div>
					<h2 class="titulo-mini-receta">${receta.titulo}</h2>
				`

		container.appendChild(miniReceta)

		miniReceta.addEventListener('click', goToReceta.bind(this, receta))
	})
}

setOpciones(recetas)
