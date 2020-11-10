async function nextPage() {
	await setTimeout(function () {
		location.href = `http://${location.host}/perfil1.html`
	}, 5000)
}

document.addEventListener('load', nextPage, true)
