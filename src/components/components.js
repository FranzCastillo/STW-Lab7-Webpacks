import {Book} from "./book/book.js";
import {Menu} from "./menu/menu.js";
import {Story} from "./story/story.js";

export function define_components() {
    customElements.define("book-display", Book);
    customElements.define("menu-bar", Menu);
    customElements.define("story-box", Story);
}