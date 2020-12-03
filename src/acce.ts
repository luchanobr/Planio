function volverAPlan(e: Event) {
	e.preventDefault()
	location.href = `http://${location.host}/perfil.html`
}

const returnPlan = document.getElementById('volver')
returnPlan.addEventListener('click', volverAPlan)
