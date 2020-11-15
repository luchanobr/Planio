import { Receta } from './db'

export interface PlanioStore {
	comidas: Receta[]
	comida: string
	receta: Receta
}

const setStorage = (planioStore: PlanioStore) => {
	let data = JSON.stringify(planioStore)
	localStorage.setItem('planio', data)
}

const getStorage = (): PlanioStore => {
	let data = localStorage.getItem('planio')
	let planioStore = JSON.parse(data)
	return planioStore
}

const removeStore = () => {
	localStorage.removeItem('planio')
}

export { setStorage, getStorage, removeStore }
