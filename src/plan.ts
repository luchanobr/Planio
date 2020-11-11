const reemplazarDesayuno = document.getElementById(
	'desayuno',
) as HTMLButtonElement
const reemplazarAlmuerzo = document.getElementById(
	'almuerzo',
) as HTMLButtonElement
const reemplazarMerienda = document.getElementById(
	'merienda',
) as HTMLButtonElement

reemplazarAlmuerzo.addEventListener('click', goToRecetas, true)
reemplazarDesayuno.addEventListener('click', goToRecetas, true)
reemplazarMerienda.addEventListener('click', goToRecetas, true)

function goToRecetas() {
	location.href = `http://${location.host}/recetas.html`
}
