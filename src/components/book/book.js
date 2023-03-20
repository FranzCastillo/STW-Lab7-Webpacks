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
    class book extends HTMLElement {
        constructor() {
            super();
            const shadowDOM = this.attachShadow({mode: "open"});
        }

        async connectedCallback() {
            const {shadowRoot, shadowDOM} = this;

            // Import HTML
            let htmlPath = "../components/book/book.html";
            this.shadowRoot.innerHTML = await fetch(htmlPath)
                .then((stream) => stream.text())
                .then((htmlFile) => {
                    return htmlFile;
                });
            // Import CSS
            let cssPath = "../components/book/book.css";
            const link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", cssPath);
            this.shadowRoot.appendChild(link);
            // Sets default values
            let bookValues = {
                title: "Default Title",
                author: "Default Author",
                link: "#",
                image: "../assets/portadas/placeholder.jpg",
            }
            // Gets the attributes
            if (this.hasAttribute("title")) {
                bookValues.title = this.getAttribute("title");
            }
            if (this.hasAttribute("author")) {
                bookValues.author = this.getAttribute("author");
            }
            if (this.hasAttribute("link")) {
                bookValues.link = this.getAttribute("link");
            }
            if (this.hasAttribute("cover")) {
                bookValues.image = this.getAttribute("cover");
            }
            // Sets the values of the elements
            let titleElement = shadowRoot.getElementById("title");
            let authorElement = shadowRoot.getElementById("author");
            let linkElement = shadowRoot.getElementById("link");
            let coverElement = shadowRoot.getElementById("cover");
            titleElement.innerHTML = bookValues.title;
            authorElement.innerHTML = bookValues.author;
            linkElement.setAttribute("href", bookValues.link);
            coverElement.setAttribute("src", bookValues.image);
        }
    }

    customElements.define("book-display", book);
}