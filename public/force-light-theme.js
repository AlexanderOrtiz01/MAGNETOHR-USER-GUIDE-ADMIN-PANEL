// Forzar tema light al cargar la página
(function() {
	document.documentElement.setAttribute('data-theme', 'light');
	
	// Prevenir cambios de tema
	const observer = new MutationObserver(() => {
		if (document.documentElement.getAttribute('data-theme') !== 'light') {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	});
	observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
})();
