async function nextPage() {
	location.href = `http://${location.host}/plan.html`
}

const ir = document.getElementById('ir')

ir.addEventListener('click', nextPage, true)
