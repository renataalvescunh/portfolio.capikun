document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item-book");

    // Clique em uma capa: ativa ela
    items.forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation(); // Impede que o clique "suba" para o body
            items.forEach(i => i.classList.remove("active-book"));
            item.classList.add("active-book");
        });
    });

    // Clique fora: remove todas as classes ativas
    document.addEventListener("click", () => {
        items.forEach(i => i.classList.remove("active-book"));
    });
});
  