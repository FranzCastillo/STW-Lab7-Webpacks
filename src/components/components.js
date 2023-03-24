import {Book} from "./book/book.js";
import {Menu_bar} from "./menu/menu.js";
import {Story} from "./story/story.js";

customElements.define("book-display", Book);
customElements.define("menu-bar", Menu_bar);
customElements.define("story-box", Story);