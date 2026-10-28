 // Chave da API do The Movie DB (substitua pela sua chave)
const API_KEY = "SUA_CHAVE_AQUI";

// URL base da API e base das imagens (posters)
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// Referências aos elementos do HTML
const movieList = document.getElementById("movie-list");
const message = document.getElementById("message");
const searchInput = document.getElementById("search");
const btnSearch = document.getElementById("btnSearch");

// 1. Busca os filmes na API
// Sem query: usa o endpoint de filmes populares
// Com query: usa o endpoint de pesquisa por nome
async function fetchMovies(query = "") {
    // Monta a URL da requisição
    let url;
    if (query === "") {
        url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`;
    } else {
        url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`;
    }

    // Faz a requisição com fetch
    const response = await fetch(url);

    // Se a resposta não for OK, gera um erro
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }

    // Converte a resposta para JSON
    const data = await response.json();

    // Retorna o array de filmes
    return data.results;
}

// 2. Cria o card de um filme
function createMovieCard(movie) {
    // Elemento principal do card
    const card = document.createElement("div");
    card.classList.add("movie-card");

    // Poster do filme (usando a base de imagens da API)
    if (movie.poster_path) {
        const poster = document.createElement("img");
        poster.classList.add("movie-poster");
        poster.src = IMG_URL + movie.poster_path;
        poster.alt = movie.title;
        card.appendChild(poster);
    }

    // Título
    const title = document.createElement("h2");
    title.classList.add("movie-title");
    title.textContent = movie.title;
    card.appendChild(title);

    // Ano de lançamento (pega os 4 primeiros caracteres da data)
    const year = document.createElement("p");
    year.classList.add("movie-year");
    year.textContent = "Ano: " + (movie.release_date ? movie.release_date.substring(0, 4) : "N/A");
    card.appendChild(year);

    // Nota média
    const rating = document.createElement("p");
    rating.classList.add("movie-rating");
    rating.textContent = "Nota: " + movie.vote_average.toFixed(1);
    card.appendChild(rating);

    // Breve sinopse (limitada a 150 caracteres)
    const overview = document.createElement("p");
    overview.classList.add("movie-overview");
    if (movie.overview.length > 150) {
        overview.textContent = movie.overview.substring(0, 150) + "...";
    } else {
        overview.textContent = movie.overview;
    }
    card.appendChild(overview);

    return card;
}

// 3. Renderiza a lista de filmes na página
function renderMovies(movies) {
    // Limpa o container
    movieList.innerHTML = "";

    // Caso não haja resultados, mostra uma mensagem
    if (movies.length === 0) {
        showMessage("Nenhum filme encontrado.");
        return;
    }

    // Limpa a mensagem e renderiza todos os cards
    showMessage("");
    movies.forEach((movie) => {
        movieList.appendChild(createMovieCard(movie));
    });
}

// 4. Mostra mensagens de carregamento, erro ou vazio
function showMessage(text) {
    message.textContent = text;
}

// Função de pesquisa: busca pelo nome digitado e atualiza a lista
async function searchMovies() {
    const query = searchInput.value.trim();
    showMessage("Carregando...");
    movieList.innerHTML = "";

    try {
        const movies = await fetchMovies(query);
        renderMovies(movies);
    } catch (error) {
        showMessage("Erro ao buscar filmes. Tente novamente.");
        console.error(error);
    }
}

// 5. Busca a lista inicial (populares) e renderiza ao carregar a página
async function init() {
    showMessage("Carregando...");

    try {
        const movies = await fetchMovies();
        renderMovies(movies);
    } catch (error) {
        showMessage("Erro ao carregar filmes. Tente novamente.");
        console.error(error);
    }
}

// Pesquisa ao clicar no botão "Buscar"
btnSearch.addEventListener("click", searchMovies);

// Pesquisa ao apertar Enter no campo de texto
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchMovies();
    }
});

// Inicia a página
init();
