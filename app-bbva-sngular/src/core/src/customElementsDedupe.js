const define = window.customElements.define.bind(window.customElements);

window.customElements.define = function defineWithoutCollision(tagName, klass, options) {
	if (!window.customElements.get(tagName)) {
		define(tagName, klass, options)
	}
}