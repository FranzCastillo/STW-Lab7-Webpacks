import {get_css_component, get_html} from "../component_creator.js";

export class Book extends HTMLElement {
    constructor() {
        super();
        const shadowDOM = this.attachShadow({mode: "open"});
    }

    async connectedCallback() {
        const {shadowRoot, shadowDOM} = this;

        // Import HTML
        let htmlPath = "../components/book/book.html";
        this.shadowRoot.innerHTML = await get_html(htmlPath);
        // Import CSS
        let cssPath = "../components/book/book.css";
        this.shadowRoot.appendChild(get_css_component(cssPath));
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