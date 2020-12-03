export const volver = (e: Event) => {
	console.log(e)
	e.preventDefault()
	history.back()
}
