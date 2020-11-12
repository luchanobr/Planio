import { Receta, recetas } from './db'
import { getStorage, setStorage } from './store'

let receta: Receta = getStorage().receta || recetas[0]

function setReceta(receta: Receta) {
	const main = document.getElementById('receta')
	let porciones = 1

	function setIngredientes() {
		receta.ingredientes.map((ingrediente) => {
			let ul = document.getElementById('ul-ingredientes')
			let li = document.createElement('li')
			li.classList.add('d-flex', 'justify-content-between', 'mx-1', 'my-1')
			li.innerHTML = `  <span>${ingrediente.item}</span><span>${ingrediente.cant}</span>`
			ul.appendChild(li)
		})
	}
	function setPasos() {
		receta.pasos.map((paso, index) => {
			let ol = document.getElementById('ol-pasos')
			let li = document.createElement('li')
			li.innerHTML = `<p class="text-light">
								<span class="h5">Paso ${index + 1}</span>
								<br />
								${paso}
                            </p>`
			ol.appendChild(li)
		})
	}

	main.innerHTML = `<div class="receta-video"  style=" background: linear-gradient(
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.3)
		),
		url(${receta.img}); background-size: cover">
				<div class="w100 h15">
					<button class="btn-icon white">
						<i class="fas fa-arrow-left"></i>
					</button>
				</div>
				<div class="w100 d-flex justify-content-center h15">
					<button class="btn-icon white">
						<i class="far fa-play-circle fa-6x"></i>
					</button>
				</div>
				<div class="w100 h20">
					<h1 class="white ml-2 h1">${receta.titulo}</h1>
				</div>
			</div>
			<div id="tabs" class="tabs">
				<div class="expand-container">
					<button class="expand" id="toggle"></button>
				</div>
				<div class="tab-container" role="tablist" >
					<button class="tab-button black" role="tab" id="tb1" aria-selected="true">Ingredientes</button>
					<button class="tab-button" role="tab" id="tb2" aria-selected="false"  >Receta</button>
				</div>
				<div class="brand w100 d-flex justify-content-spaceEvenly mt-1">
					<select aria-label="porciones" id="porciones" class="select">
						<option value="1">1 porción</option>
						<option value="2">2 porciones</option>
						<option value="3">3 porciones</option>
						<option value="4">4 porciones</option>
					</select>
					<span class="brand mr-05">
						<i class="far fa-clock fa-sm"></i> ${receta.tiempo}
					</span>
					<span class="ml-05">
						<i class="fas fa-dollar-sign fa-sm"></i> ${receta.costo}
					</span>
				</div>

				<div
					id="ingredientes"
					role="tabpanel"
					class="tab-content w100"
					aria-labelledby="tb1"
					tabindex="0"

				>
					<div class="d-flex justify-content-spaceEvenly mt-1 w100">
						<div
							class="d-flex flex-column justify-content-center text-center small"
						>
							<span>Calorías</span><span id="kcal">${
								receta.datos.kcal * porciones
							}</span><span>kcal </span>
						</div>
						<div class="separador-datos"></div>
						<div
							class="d-flex flex-column justify-content-center text-center small"
						>
							<span>Proteinas</span><span id="prot">${
								receta.datos.prot * porciones
							}</span><span>Gramos </span>
						</div>
						<div class="separador-datos"></div>
						<div
							class="d-flex flex-column justify-content-center text-center small"
						>
							<span>Grasas</span><span id="grasas">${
								receta.datos.grasas * porciones
							}</span><span>Gramos </span>
						</div>
						<div class="separador-datos"></div>
						<div
							class="d-flex flex-column justify-content-center text-center small"
						>
							<span aria-label="Carbohidratos">Carbs.</span><span id="carbs">${
								receta.datos.carbs * porciones
							}</span
							><span>Gramos </span>
						</div>
					</div>
                    <ul class="w80 text-light" id="ul-ingredientes">

					</ul>
				</div>
				<div id="pasos" class="tab-content w100 display-none" role="tabpanel" aria-labelledby="tb1" tabindex="0">
                    <ol class="w80" id="ol-pasos">
					</ol>
                </div>

            </div>`

	let select = document.getElementById('porciones') as HTMLSelectElement
	const button = document.getElementById('toggle')
	const tabs = document.getElementById('tabs')
	let ingredientes = document.getElementById('ingredientes')
	let pasos = document.getElementById('pasos')
	const tabList = document.querySelector('[role="tablist"]')
	setIngredientes()
	setPasos()
	let touchStarY = 0

	let tbIngredientes = document.getElementById('tb1')
	let tbPasos = document.getElementById('tb2')

	tbIngredientes.addEventListener('click', tabIngredientes)
	tbPasos.addEventListener('click', tabPasos)

	function tabIngredientes() {
		let isExpanded = tabs.classList.contains('expanded')
		if (!isExpanded) {
			tabs.classList.add('expanded')
			tabs.classList.remove('contraer')
		}
		tbIngredientes.classList.add('black')
		tbPasos.classList.remove('black')
		ingredientes.classList.remove('display-none')
		pasos.classList.add('display-none')
	}
	function tabPasos() {
		let isExpanded = tabs.classList.contains('expanded')
		if (!isExpanded) {
			tabs.classList.add('expanded')
			tabs.classList.remove('contraer')
		}
		tbIngredientes.classList.remove('black')
		tbPasos.classList.add('black')
		ingredientes.classList.add('display-none')
		pasos.classList.remove('display-none')
	}

	const setPorciones = () => {
		porciones = parseInt(select.value)
		document.getElementById('kcal').innerHTML = (receta.datos.kcal * porciones)
			.toFixed(0)
			.toString()
		document.getElementById('grasas').innerHTML = (
			receta.datos.grasas * porciones
		)
			.toFixed(1)
			.toString()
		document.getElementById('prot').innerHTML = (receta.datos.prot * porciones)
			.toFixed(1)
			.toString()
		document.getElementById('carbs').innerHTML = (
			receta.datos.carbs * porciones
		)
			.toFixed(1)
			.toString()
	}
	select.addEventListener('change', setPorciones)

	button.addEventListener('click', swipeTabs)
	button.addEventListener('touchstart', setTouchStart)
	button.addEventListener('touchend', touchEnd)

	function swipeTabs() {
		let isExpanded = tabs.classList.contains('expanded')
		if (isExpanded) {
			tabs.classList.add('contraer')
			tabs.classList.remove('expanded')
		} else {
			tabs.classList.add('expanded')
			tabs.classList.remove('contraer')
		}
	}

	function setTouchStart(e: TouchEvent) {
		touchStarY = e.changedTouches[0].clientY
	}

	function touchEnd(e: TouchEvent) {
		let touchEnd = e.changedTouches[0].clientY
		let result = touchStarY - touchEnd
		if (Math.abs(result) <= 30) {
			null
		} else if (result > 0) {
			tabs.classList.add('expanded')
			tabs.classList.remove('contraer')
		} else {
			tabs.classList.add('contraer')
			tabs.classList.remove('expanded')
		}
	}

	tabList.addEventListener('keydown', arrowsMove)

	function arrowsMove(e: KeyboardEvent) {
		let button = e.target as HTMLButtonElement
		if (
			(e.key === 'ArrowRight' || e.key === 'ArrowLeft') &&
			button.id === 'tb1'
		) {
			console.log('arrow derecha')
			tbPasos.focus()
		} else if (
			(e.key === 'ArrowRight' || e.key === 'ArrowLeft') &&
			button.id === 'tb2'
		) {
			console.log('arrow izq')
			tbIngredientes.focus()
		}
	}
}

setReceta(receta)

const reemplazar = document.getElementById('reemplazar') as HTMLButtonElement

function reemplazarReceta() {
	location.href = `http://${location.host}/reemplazo.html`
}

reemplazar.addEventListener('click', reemplazarReceta)
