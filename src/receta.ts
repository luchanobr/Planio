// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
			li.innerHTML = `<div class="text-light">
								<h2 class="h5">Paso ${index + 1}</h2>
								<p>${paso} </p>

                            </div>`
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
				<a class="btn-icon white d-flex justify-content-center align-items-center" id="volver" aria-label="volver a la pagina anterior" href="/" rel="prev" >
					<i class="fas fa-arrow-left fa-lg" aria-hidden="true"></i>
				</a>
				<button class="btn-icon white" aria-label="agregar a favoritos" >
						<i class="far fa-heart fa-lg" aria-hidden="true"></i>
				</button>


				</div>
				<div class="w100 d-flex justify-content-center" >
					<h1 class="white h1 w80">${receta.titulo}</h1>
				</div>
				<div class="d-flex justify-content-center">
					<p class="mr-05 white p-receta" >
						<span class="sr-only">Tiempo de preparación </span>
						<i class="far fa-clock" aria-hidden="true" ></i> ${receta.tiempo} min
					</p>
					<p class="ml-05 white p-receta">
					<span class="sr-only">Costo</span>
						<i class="fas fa-dollar-sign" aria-hidden="true"></i> ${receta.costo}
						<span class="sr-only">pesos</span>
					</p>
				</div>
			</div>
			<div id="tabs" class="tabs" >
				<div class="expand-container">

				</div>
				<div class="" id="tabs-container">
				<div class="tab-container" role="tablist" aria-label="Pestañas informacion de la receta"  >
					<button class="tab-button text-underline" role="tab" id="tb1" aria-selected="true" tabindex="0" > Ingredientes</button>
					<button class="tab-button" role="tab" id="tb2" aria-selected="false" tabindex="-1" > Receta </button>
				</div>

				<div
					id="ingredientes"
					role="tabpanel"
					class="tab-content w100"
					aria-labelledby="tb1"
					tabindex="0"
					aria-live="polite"

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
							<h2 class="h2-tab">Calorías</h2><span id="kcal">${
								receta.datos.kcal * porciones
							}</span><span aria-hidden="true">kcal</span> <span class="sr-only">kilocalorias</span>
						</div>
						<div class="separador-datos"></div>
						<div
							class="d-flex flex-column justify-content-center text-center small"
						>
							<h2 class="h2-tab">Proteinas</h2><span id="prot">${
								receta.datos.prot * porciones
							}</span><span>Gramos </span>
						</div>
						<div class="separador-datos"></div>
						<div
							class="d-flex flex-column justify-content-center text-center small"
						>
							<h2 class="h2-tab">Grasas</h2><span id="grasas">${
								receta.datos.grasas * porciones
							}</span><span>Gramos </span>
						</div>
						<div class="separador-datos"></div>
						<div
							class="d-flex flex-column justify-content-center text-center small"
						>
							<h2 class="h2-tab" aria-hidden="true">Carbs.</h2><h2 class="sr-only">Carbohidratos</h2> <span id="carbs">${
								receta.datos.carbs * porciones
							}</span
							><span>Gramos </span>
						</div>
					</div>
                    <ul class="w80 text-light" id="ul-ingredientes" aria-labelledby="tb1">

					</ul>
					<button class="btn-outline" id="compras" type="button" aria-live="polite">Agregar a lista de compras</button>
				</div>
				<div id="pasos" class="tab-content w100 display-none" role="tabpanel" aria-labelledby="tb2" tabindex="0">
                    <ol class="w80" id="ol-pasos">
					</ol>
                </div>
				</div>
			</div>
			<button class="btn mt-1 w80 btn-float" id="reemplazar" type="button">
					Elegir comida
			</button>
				`

	const select = document.getElementById('porciones') as HTMLInputElement

	const tabs = document.getElementById('tabs')
	const ingredientes = document.getElementById('ingredientes')
	const pasos = document.getElementById('pasos')
	const tabList = document.querySelector('[role="tablist"]')
	const video = document.getElementById('video')
	const tabsContainer = document.getElementById('tabs-container')
	const buttonCompras = document.getElementById('compras')
	let enListaCompras = false

	setPasos()
	setIngredientes()

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

	// eslint-disable-next-line @typescript-eslint/no-unused-vars

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

	function swipeTabs() {
		const isExpanded = tabs.classList.contains('expanded')
		if (isExpanded) {
			tabs.classList.add('contraer')
			tabs.classList.remove('expanded')
			tabsContainer.classList.add('display-none')
			video.classList.toggle('align-content-start')
		} else {
			tabs.classList.add('expanded')
			tabs.classList.remove('contraer')
			tabsContainer.classList.remove('display-none')
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

	function handlerCompras() {
		buttonCompras.textContent = enListaCompras
			? 'Agregar a lista de compras'
			: 'Quitar de lista de compras'
		enListaCompras = !enListaCompras
	}

	buttonCompras.addEventListener('click', handlerCompras)
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

buttonVolver.addEventListener('click', volver.bind(this))
