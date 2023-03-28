import './book.scss';
import template from './template';
export default function render_book(){
    class Book extends HTMLElement {
        constructor() {
            super();
            const shadowDOM = this.attachShadow({mode: "open"});
        }

        async connectedCallback() {
            const {shadowRoot, shadowDOM} = this;

            // Import HTML
            this.shadowRoot.innerHTML = template;

            const link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "book.bundle.css");
            this.shadowRoot.appendChild(link);
            // Sets default values
            let bookValues = {
                title: "Default Title",
                author: "Default Author",
                link: "#",
                image: "https://cdn.discordapp.com/attachments/933103361283215504/1090142805000736768/placeholder.jpg",
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
    customElements.define("book-display", Book);
}