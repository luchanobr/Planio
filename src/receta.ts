import { Receta, recetas } from './db'
import { getStorage, PlanioStore, setStorage } from './store'
import { volver } from './util'

const receta: Receta = getStorage().receta || recetas[0]

function setReceta(receta: Receta) {
	const main = document.getElementById('receta')
	let porciones = 1

	function setIngredientes(porciones = 1) {
		const ul = document.getElementById('ul-ingredientes')
		ul.innerHTML = ''
		receta.ingredientes.map((ingrediente) => {
			const li = document.createElement('li')
			li.classList.add('d-flex', 'justify-content-between', 'mx-1', 'my-1')
			li.innerHTML = `<span>${ingrediente.item}</span>
			<span> ${
				parseFloat(ingrediente.cant) * porciones + ' '
			} <span aria-hidden="true">${
				ingrediente.abbr
			}</span><span class="sr-only">${ingrediente.medida}</span></span>`
			ul.appendChild(li)
		})
	}
	function setPasos() {
		receta.pasos.map((paso, index) => {
			const ol = document.getElementById('ol-pasos')
			const li = document.createElement('li')
			li.innerHTML = `<p class="text-light">
								<span class="h5">Paso ${index + 1}</span>
								<br />
								${paso}
                            </p>`
			ol.appendChild(li)
		})
	}

	main.innerHTML = `<div class="receta-video"  id="video" style=" background: linear-gradient(
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.3)
		),
		url(${receta.img}); background-size: cover">
				<div class="w100 d-flex justify-content-between flex-wrap align-self-start">
				<button class="btn-icon white" id="volver" aria-label="volver" >
					<i class="fas fa-arrow-left fa-lg"></i>
				</button>
				<button class="btn-icon white" aria-label="agregar a favoritos" >
						<i class="far fa-heart fa-lg" aria-hidden="true"></i>
				</button>


				</div>
				<div class="w100 d-flex justify-content-center" >
					<h1 class="white h1 w80">${receta.titulo}</h1>
				</div>
				<div class="d-flex justify-content-center">
					<p class="mr-05 white p-receta">
						<i class="far fa-clock"></i> ${receta.tiempo} min
					</p>
					<p class="ml-05 white p-receta">
						<i class="fas fa-dollar-sign" aria-label="pesos"></i> ${receta.costo}
					</p>
				</div>
			</div>
			<div id="tabs" class="tabs" aria-expanded="false">
				<div class="expand-container">
					<button class="expand" id="toggle" aria-label="expandir pestañas"></button>
				</div>
				<div class="display-none" id="tabs-container">
				<div class="tab-container" role="tablist" aria-label="Pestañas informacion de la receta"  >
					<button class="tab-button text-underline" role="tab" id="tb1" aria-selected="true" tabindex="0" >Ingredientes</button>
					<button class="tab-button" role="tab" id="tb2" aria-selected="false" tabindex="-1" >Receta</button>
				</div>

				<div
					id="ingredientes"
					role="tabpanel"
					class="tab-content w100"
					aria-labelledby="tb1"
					tabindex="0"

				>

				<div class=" w100 d-flex justify-content-center mt-1">
					 <div class="d-flex w80 justify-content-center">

						<select type="number" id="porciones" name="porciones" class="select" aria-label="Cantidad de porciones" value="1" aria-label="porciones">
						  <option value="1">1 porción</option>
						  <option value="2">2 porciones</option>
						  <option value="3">3 porciones</option>
						  <option value="4">4 porciones</option>
						</select>
					 </div>

				</div>
					<div class="d-flex justify-content-spaceEvenly mt-1 w100">
						<div
							class="d-flex flex-column justify-content-center text-center small"
						>
							<span>Calorías</span><span id="kcal">${
								receta.datos.kcal * porciones
							}</span><span aria-hidden="true">kcal</span> <span class="sr-only">kilocalorias</span>
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
							<span aria-hidden="true">Carbs.</span><span class="sr-only">Carbohidratos</span> <span id="carbs">${
								receta.datos.carbs * porciones
							}</span
							><span>Gramos </span>
						</div>
					</div>
                    <ul class="w80 text-light" id="ul-ingredientes" >

					</ul>
				</div>
				<div id="pasos" class="tab-content w100 display-none" role="tabpanel" aria-labelledby="tb2" tabindex="0">
                    <ol class="w80" id="ol-pasos">
					</ol>
                </div>
				</div>
			</div>
			<button class="btn mt-1 w80 btn-float" id="reemplazar">
					Elegir comida
			</button>
				`

	const select = document.getElementById('porciones') as HTMLInputElement
	const button = document.getElementById('toggle')
	const tabs = document.getElementById('tabs')
	const ingredientes = document.getElementById('ingredientes')
	const pasos = document.getElementById('pasos')
	const tabList = document.querySelector('[role="tablist"]')
	const video = document.getElementById('video')
	const tabsContainer = document.getElementById('tabs-container')

	setPasos()
	setIngredientes()

	let touchStarY = 0
	const tbIngredientes = document.getElementById('tb1')
	const tbPasos = document.getElementById('tb2')

	tbIngredientes.addEventListener('click', tabIngredientes)
	tbPasos.addEventListener('click', tabPasos)

	function tabIngredientes() {
		tbIngredientes.classList.add('text-underline')
		tbPasos.classList.remove('text-underline')
		tbIngredientes.setAttribute('tabindex', '0')
		tbIngredientes.setAttribute('aria-selected', 'true')
		tbPasos.setAttribute('aria-selected', 'false')
		tbPasos.setAttribute('tabindex', '-1')
		ingredientes.classList.remove('display-none')
		pasos.classList.add('display-none')
	}

	function expandir() {
		const isExpanded = tabs.classList.contains('expanded')
		if (!isExpanded) {
			tabs.classList.add('expanded')
			tabs.classList.remove('contraer')
			tbIngredientes.setAttribute('aria-expanded', 'true')
			tbPasos.setAttribute('aria-expanded', 'true')
			video.classList.toggle('align-content-start')
			button.setAttribute('aria-label', 'contraer pestañas')
		}
	}

	function tabPasos() {
		tbIngredientes.classList.remove('text-underline')
		tbPasos.classList.add('text-underline')
		tbIngredientes.setAttribute('tabindex', '-1')
		tbPasos.setAttribute('tabindex', '0')
		tbIngredientes.setAttribute('aria-selected', 'false')
		tbPasos.setAttribute('aria-selected', 'true')
		ingredientes.classList.add('display-none')
		pasos.classList.remove('display-none')
	}

	const setPorciones = () => {
		porciones = parseInt(select.value)
		setIngredientes(porciones)
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
		const isExpanded = tabs.classList.contains('expanded')
		if (isExpanded) {
			tabs.classList.add('contraer')
			tabs.classList.remove('expanded')
			tabsContainer.classList.add('display-none')
			video.classList.toggle('align-content-start')
			button.setAttribute('aria-label', 'expander pestañas')
		} else {
			tabs.classList.add('expanded')
			tabs.classList.remove('contraer')
			tabsContainer.classList.remove('display-none')
			video.classList.toggle('align-content-start')
			button.setAttribute('aria-label', 'contraer pestañas')
		}
	}

	function setTouchStart(e: TouchEvent) {
		touchStarY = e.changedTouches[0].clientY
	}

	function touchEnd(e: TouchEvent) {
		const touchEnd = e.changedTouches[0].clientY
		const result = touchStarY - touchEnd
		if (Math.abs(result) <= 30) {
			null
		} else if (result > 0) {
			tabs.classList.add('expanded')
			tabs.classList.remove('contraer')
			tbIngredientes.setAttribute('aria-expanded', 'true')
			tbPasos.setAttribute('aria-expanded', 'true')
			video.classList.toggle('align-content-start')
		} else {
			tabs.classList.add('contraer')
			tabs.classList.remove('expanded')
			tbIngredientes.setAttribute('aria-expanded', 'false')
			tbPasos.setAttribute('aria-expanded', 'false')
			video.classList.toggle('align-content-start')
		}
	}

	tabList.addEventListener('keydown', arrowsMove)

	function arrowsMove(e: KeyboardEvent) {
		const button = e.target as HTMLButtonElement
		if (
			(e.key === 'ArrowRight' || e.key === 'ArrowLeft') &&
			button.id === 'tb1'
		) {
			tbPasos.focus()
		} else if (
			(e.key === 'ArrowRight' || e.key === 'ArrowLeft') &&
			button.id === 'tb2'
		) {
			tbIngredientes.focus()
		}
	}
}

setReceta(receta)

const reemplazar = document.getElementById('reemplazar') as HTMLButtonElement

function reemplazarReceta() {
	const planioStore = getStorage()
	const data: PlanioStore = { ...planioStore }
	if (data.comida === 'desayuno') data.comidas[0] = receta
	if (data.comida === 'almuerzo') data.comidas[1] = receta
	if (data.comida === 'merienda') data.comidas[2] = receta
	if (data.comida === 'cena') data.comidas[3] = receta
	setStorage(data)
	location.href = `http://${location.host}/reemplazo.html`
}

reemplazar.addEventListener('click', reemplazarReceta)
const buttonVolver = document.getElementById('volver')

buttonVolver.addEventListener('click', volver)
