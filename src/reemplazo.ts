function goToPlanSemanalUpdate(e: Event) {
	e.preventDefault()
	location.href = `http://${location.host}/plan.html`
}

const volver = document.getElementById('volver')
volver.addEventListener('click', goToPlanSemanalUpdate)
