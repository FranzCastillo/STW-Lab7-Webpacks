import "./menu.scss";
import template from "./template";

export default function render_menu(activo) {
    class Menu extends HTMLElement {
        constructor() {
            super();
            const shadowDOM = this.attachShadow({mode: "open"});
        }

        async connectedCallback() {
            const {shadowRoot, shadowDOM} = this;
            // Import HTML
            this.shadowRoot.innerHTML = template;

            let activePageElement = shadowRoot.getElementById(activo);
            activePageElement.setAttribute("class", "active");
        }
    }

    customElements.define("menu-bar", Menu);
}