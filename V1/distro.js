document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o campo de pesquisa e todos os cards
  const searchInput = document.querySelector(".form-control");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim().toLowerCase(); // Texto digitado, em minúsculas e sem espaços extras

    // Percorre todos os cards
    cards.forEach(card => {
      const titleElement = card.querySelector(".card-title"); // Seleciona o título do card
      if (titleElement) {
        const title = titleElement.textContent.trim().toLowerCase(); // Título em minúsculas

        // Verifica se o texto buscado está contido no título
        if (title.includes(query)) {
          card.style.display = ""; // Mostra o card
        } else {
          card.style.display = "none"; // Oculta o card
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card"); // Todos os cards
  const pagination = document.querySelector(".pagination"); // Elemento de paginação
  const cardsPerPage = 6; // Limite de cards por página
  const totalPages = Math.ceil(cards.length / cardsPerPage); // Número total de páginas

  let currentPage = 1; // Página inicial

  // Função para mostrar os cards da página atual
  function showPage(page) {
    currentPage = page;

    // Esconde todos os cards
    cards.forEach((card, index) => {
      if (index >= (page - 1) * cardsPerPage && index < page * cardsPerPage) {
        card.style.display = ""; // Mostra o card
      } else {
        card.style.display = "none"; // Oculta o card
      }
    });

    // Atualiza a aparência dos botões de paginação
    Array.from(pagination.querySelectorAll(".page-item")).forEach((item, index) => {
      if (index === page) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Gera os botões de paginação
  function setupPagination() {
    for (let i = 1; i <= totalPages; i++) {
      const pageItem = document.createElement("li");
      pageItem.classList.add("page-item");

      const pageLink = document.createElement("a");
      pageLink.classList.add("page-link");
      pageLink.href = "#";
      pageLink.textContent = i;

      pageLink.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(i);
      });

      pageItem.appendChild(pageLink);
      pagination.insertBefore(pageItem, pagination.lastElementChild); // Insere antes do botão "Próximo"
    }
  }

  // Configura os botões "Anterior" e "Próximo"
  const prevButton = pagination.querySelector('[aria-label="Previous"]');
  const nextButton = pagination.querySelector('[aria-label="Next"]');

  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      showPage(currentPage + 1);
    }
  });

  setupPagination(); // Configura os botões de paginação
  showPage(1); // Mostra a primeira página
});

