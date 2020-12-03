async function nextPage(e: Event) {
	e.preventDefault()
	location.href = `http://${location.host}/plan.html`
}

const ir = document.getElementById('volver')

ir.addEventListener('click', nextPage, true)
