async function fetchNews(keyword, page=1) {
    const pageSize = 20;

    const newsApiUrl =
        `https://newsapi.org/v2/everything?apiKey=eef038525fa7401d8dfe7cf1a9006b10&q=${keyword}&pageSize=${pageSize}&language=uk&page=${page}`;

    try {
        const response = await fetch(newsApiUrl);

        if (!response.ok) {
            console.log(response.status);
            return;
        }
        
        const data = await response.json();
        const { articles, totalResults } = data;
        displayArticles(articles);
        setPagination(totalResults, pageSize, page, keyword);
    } catch (error) {
        console.error(error);
    }
}

function searchHandle(event) {
    event.preventDefault();
    const form = event.target;
    const search = form["search"].value.trim();
    const keyword = search.length == 0 ? "it" : search;
    fetchNews(keyword);
    form.reset();
}

function displayArticles(articles) {
    const row = document.getElementById("row");
    row.innerHTML = "";

    for (const article of articles) {
        const child = getArticleCard(article);
        row.appendChild(child);
    }

    window.scrollTo(0, 0);
}

function setPagination(total, pageSize, page, keyword) {
    const pagination = document.getElementById("pagination");
    const pages = Math.ceil(total / pageSize);

    pagination.innerHTML = `<li class="page-item ${page === 1 ? "disabled" : ""}">
                    <button onclick="fetchNews('${keyword}', ${page - 1})" class="page-link">&laquo;</button>
                </li>`;

    for(let i = 1; i <= pages; i++) {
        pagination.innerHTML += `<li class="page-item ${page === i ? "active" : ""}">
                    <button onclick="fetchNews('${keyword}', ${i})" class="page-link">${i}</button>
                </li>`;
    }

    pagination.innerHTML += `<li class="page-item ${page === pages ? "disabled" : ""}">
                    <button onclick="fetchNews('${keyword}', ${page + 1})" class="page-link">&raquo;</button>
                </li>`;
}

function getArticleCard(article) {
    const defaultImage = "https://www.bblf.bg/img/default-news-image.png";

    const div = document.createElement("div");
    div.classList.add("col-3");
    div.innerHTML = `
    <a href="${article.url}">
    <div class="card h-100 card-scale">
    
    <img class="card-img-top" src="${
        article.urlToImage ? article.urlToImage : defaultImage
    }" alt="${article.title}" />
    <div class="card-body">
    <h5 class="card-title">
    ${article.title}
                </h5>
                <h6>${article.publishedAt}</h6>
                <p class="card-text">
                    ${
                        !article.description
                            ? "Опис десь загубився"
                            : article.description
                    }
                </p>
            </div>
        </div>
        </a>`;
    return div;
}

document.addEventListener("DOMContentLoaded", () => fetchNews("it"));