import {get_html, get_css_component} from "../component_creator.js";

export class Menu extends HTMLElement {
    constructor() {
        super();
        const shadowDOM = this.attachShadow({mode: "open"});
    }

    async connectedCallback() {
        const {shadowRoot, shadowDOM} = this;

        // Import HTML
        let htmlPath = "../src/components/menu/menu.html";
        this.shadowRoot.innerHTML = await get_html(htmlPath);
        // Import CSS
        let cssPath = "../src/components/menu/menu.css";
        this.shadowRoot.appendChild(get_css_component(cssPath));
        // Check if attributes are set
        if (this.hasAttribute("active")) {
            let activePage = this.getAttribute("active");
            let activePageElement = shadowRoot.getElementById(activePage);
            activePageElement.setAttribute("class", "active");
        }
        // Sets the links through the attributes
        if (this.hasAttribute("inicio")) {
            let inicio = this.getAttribute("inicio");
            let inicioElement = shadowRoot.getElementById("inicio");
            inicioElement.setAttribute("href", inicio);
        }
        if (this.hasAttribute("libros-populares")) {
            let librosPopulares = this.getAttribute("libros-populares");
            let librosPopularesElement = shadowRoot.getElementById("libros-populares");
            librosPopularesElement.setAttribute("href", librosPopulares);
        }
        if (this.hasAttribute("nuevos-lanzamientos")) {
            let nuevosLanzamientos = this.getAttribute("nuevos-lanzamientos");
            let nuevosLanzamientosElement = shadowRoot.getElementById("nuevos-lanzamientos");
            nuevosLanzamientosElement.setAttribute("href", nuevosLanzamientos);
        }
    }
}