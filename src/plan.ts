import { getStorage, setStorage } from './store'
import { volver } from './util'
import dayjs from 'dayjs'

const locale = {
	name: 'es',
	monthsShort: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
	weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
		'_',
	),
	weekStart: 1,
	formats: {
		LT: 'H:mm',
		LTS: 'H:mm:ss',
		L: 'DD/MM/YYYY',
		LL: 'D [de] MMMM [de] YYYY',
		LLL: 'D [de] MMMM [de] YYYY H:mm',
		LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
	},
	relativeTime: {
		future: 'en %s',
		past: 'hace %s',
		s: 'unos segundos',
		m: 'un minuto',
		mm: '%d minutos',
		h: 'una hora',
		hh: '%d horas',
		d: 'un día',
		dd: '%d días',
		M: 'un mes',
		MM: '%d meses',
		y: 'un año',
		yy: '%d años',
	},
	ordinal: (n: any) => `${n}º`,
}

dayjs.locale(locale, null, true)

const planioStore = getStorage()
const comidas = planioStore.comidas

const hoy = dayjs().locale('es')
let fechaContador = dayjs().locale('es')
const h1 = document.querySelector('h1')
h1.textContent = `Hoy,  ${hoy.date()} de ${hoy.format('MMMM')}`

const fechas = document.getElementById('fechas')

function setFechas(now = hoy) {
	const tituloCalendario = document.getElementById('tabla-titulo')

	fechas.innerHTML = ''
	const semana = new Array(7)
	semana.fill(0)
	semana[now.day()] = now.date()
	const Newsemana = semana.map((dia, index) => {
		const span = document.createElement('td')
		span.classList.add('min-w')
		span.textContent = `${now.subtract(now.day() - index, 'd').date()}`
		if (now.date(dia).format('DD/MM/YYYY') === hoy.format('DD/MM/YYYY'))
			span.classList.add('brand')
		fechas.appendChild(span)
		return now.subtract(now.day() - index, 'd')
	})
	if (Newsemana[0].month() === Newsemana[6].month()) {
		const titulo = `Semana del ${Newsemana[0].date()} al ${Newsemana[6].date()} de ${Newsemana[0].format(
			'MMMM',
		)} de ${Newsemana[0].year()} `
		tituloCalendario.textContent = titulo
	} else {
		const titulo = `Semana del ${Newsemana[0].date()} de ${Newsemana[0].format(
			'MMMM',
		)} al ${Newsemana[6].date()} de ${Newsemana[6].format(
			'MMMM',
		)} de ${Newsemana[0].year()} `
		tituloCalendario.textContent = titulo
	}
}

setFechas()
function tipoComida(index: number): string {
	if (index === 0) return 'desayuno'
	else if (index === 1) return 'almuerzo'
	else if (index === 2) return 'merienda'
	else return 'cena'
}

const menos = document.getElementById('menos')
const mas = document.getElementById('mas')

menos.addEventListener('click', restarSemana)
mas.addEventListener('click', sumarSemana)

function restarSemana() {
	fechaContador = fechaContador.subtract(7, 'd')
	setFechas(fechaContador)
}
function sumarSemana() {
	fechaContador = fechaContador.add(7, 'd')
	setFechas(fechaContador)
}

function setComidas() {
	const comidasContainer = document.getElementById('recetas-container')
	comidas.map((comida, index) => {
		const card = document.createElement('li')
		card.classList.add('card-receta', 'w90', 'd-flex', 'flex-wrap')
		card.style.background = `linear-gradient(
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.75),
			rgba(0, 0, 0, 0.97)
		),
		url(${comida.img})`
		card.style.backgroundSize = 'cover'
		card.innerHTML = `<div class="d-flex justify-content-between mt-05 w100">
						<h2 class="text-light white ml-1 mt-05 capitalize">${tipoComida(index)}</h2>
						<button class="btn-icon white mr-05">
							<i class="far fa-heart" aria-label="agregar a favoritos"></i>
						</button>
					</div>
					<h3 class="white ml-1 titulo-receta w66">
						${comida.titulo}
					</h3>
					<div class="d-flex justify-content-between align-self-end w100 mb-1">
						<div class="ml-1">
							<span class="white mr-05">
								<i class="far fa-clock fa-sm" aria-label="Tiempo de preparación" ></i> ${
									comida.tiempo
								} min
							</span>
							<span class="white">
								<i class="fas fa-dollar-sign fa-sm" aria-label="Costo pesos"></i> ${
									comida.costo
								}
							</span>
						</div>
						<button class="btn-card mr-05" id="${tipoComida(index)}">
							Reemplazar <i class="fas fa-sync-alt"></i>
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
