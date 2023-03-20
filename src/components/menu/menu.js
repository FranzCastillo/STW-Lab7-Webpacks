renderComponent();

function getHTML(path) {
    return fetch(path)
        .then((stream) => stream.text())
        .then((htmlFile) => {
            return htmlFile;
        });
}

function renderComponent() {
    // Extends HTMLElement and master-card class on card.js
    class manuBar extends HTMLElement {
        constructor() {
            super();
            const shadowDOM = this.attachShadow({mode: "open"});
        }

        async connectedCallback() {
            const {shadowRoot, shadowDOM} = this;

            // Import HTML
            let htmlPath = "../components/menu/menu.html";
            this.shadowRoot.innerHTML = await fetch(htmlPath)
                .then((stream) => stream.text())
                .then((htmlFile) => {
                    return htmlFile;
                });
            // Import CSS
            let cssPath = "../components/menu/menu.css";
            const link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", cssPath);
            this.shadowRoot.appendChild(link);
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

        disconnectedCallback() {
            console.log("my-card component element removed from page.");
        }

        adoptedCallback() {
            console.log("my-card component element moved to new page.");
        }

        attributeChangedCallback(name, oldValue, newValue) {
            console.log("my-card component element attributes changed.");
        }
    }

    customElements.define("menu-bar", manuBar);
}