# Atividade Prática - Fetch API com TMDB

**Nome:** Paula Moschioni
**Matrícula:** XXXXXXX

## Endpoint escolhido

- Filmes populares: `GET /movie/popular`
- Pesquisa por nome: `GET /search/movie`

## Prints

### Lista de filmes carregada

![Lista de filmes](print-lista.png)

### Resultado após usar a pesquisa

![Resultado da pesquisa](print-pesquisa.png)

## Fluxo

Ao carregar a página, a função `fetchMovies` faz uma requisição com Fetch API ao endpoint de filmes populares do TMDB e converte a resposta para JSON (**requisição**). O array `results` é extraído do JSON (**tratamento**). Para cada filme, `createMovieCard` monta um card e `renderMovies` insere os cards no DOM (**renderização**). Na pesquisa, o mesmo fluxo é feito com o nome digitado.
