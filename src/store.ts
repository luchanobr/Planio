import { Receta } from './db'

export interface PlanioStore {
	comidas: Receta[]
	comida: string
	receta: Receta
}

const setStorage = (planioStore: PlanioStore) => {
	const data = JSON.stringify(planioStore)
	localStorage.setItem('planio', data)
}

const getStorage = (): PlanioStore => {
	const data = localStorage.getItem('planio')
	const planioStore = JSON.parse(data)
	return planioStore
}

const removeStore = () => {
	localStorage.removeItem('planio')
}

export { setStorage, getStorage, removeStore }
