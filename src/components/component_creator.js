export function get_html(path) {
    return fetch(path)
        .then((stream) => stream.text())
        .then((htmlFile) => {
            return htmlFile;
        });
}

export function get_css_component(path) {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", path);
    return link;
}