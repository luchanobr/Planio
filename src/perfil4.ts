async function nextPage() {
	await setTimeout(function () {
		location.href = `http://${location.host}/plan.html`
	}, 5000)
}

document.addEventListener('load', nextPage, true)
