import {get_html, get_css_component} from "../component_creator.js";

export class Story extends HTMLElement {
    constructor() {
        super();
        const shadowDOM = this.attachShadow({mode: "open"});
    }

    async connectedCallback() {
        const {shadowRoot, shadowDOM} = this;

        // Import HTML
        let htmlPath = "../components/story/story.html";
        this.shadowRoot.innerHTML = await get_html(htmlPath);
        // Import CSS
        let cssPath = "../components/story/story.css";
        this.shadowRoot.appendChild(get_css_component(cssPath));
        // Set story values
        const title = this.getAttribute("title");
        const titleElement = shadowRoot.getElementById("title");
        titleElement.innerHTML = title;

        const content = this.getAttribute("content");
        const contentElement = shadowRoot.getElementById("content");
        contentElement.innerHTML = content;

        const question = this.getAttribute("question");
        const questionElement = shadowRoot.getElementById("question");
        questionElement.innerHTML = question;

        const option1_img = this.getAttribute("option1_img");
        const option1_imgElement = shadowRoot.getElementById("option1_img");
        option1_imgElement.src = option1_img;

        const option1_caption = this.getAttribute("option1_caption");
        const option1_captionElement = shadowRoot.getElementById("option1_caption");
        option1_captionElement.innerHTML = option1_caption;

        const option1_link = this.getAttribute("option1_link");
        const option1_linkElement = shadowRoot.getElementById("option1_link");
        option1_linkElement.href = option1_link;

        const option2_img = this.getAttribute("option2_img");
        const option2_imgElement = shadowRoot.getElementById("option2_img");
        option2_imgElement.src = option2_img;

        const option2_caption = this.getAttribute("option2_caption");
        const option2_captionElement = shadowRoot.getElementById("option2_caption");
        option2_captionElement.innerHTML = option2_caption;

        const option2_link = this.getAttribute("option2_link");
        const option2_linkElement = shadowRoot.getElementById("option2_link");
        option2_linkElement.href = option2_link;
    }
}