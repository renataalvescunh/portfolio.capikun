function loadInclude(selector, url) {
    fetch(url)
        .then(res => res.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(err => console.error(`Erro ao carregar ${url}:`, err));
}

document.addEventListener("DOMContentLoaded", () => {
    loadInclude("#header", "includes/header.html");
    loadInclude("#footer", "includes/footer.html");
});
