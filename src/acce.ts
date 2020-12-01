function volverAPlan() {
	location.href = `http://${location.host}/plan.html`
}

const returnPlan = document.getElementById('volver')
returnPlan.addEventListener('click', volverAPlan)
