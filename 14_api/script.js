async function fetchNews(keyword) {
    const newsApiUrl =
        `https://newsapi.org/v2/everything?apiKey=eef038525fa7401d8dfe7cf1a9006b10&q=${keyword}&pageSize=20&language=uk`;

    try {
        const response = await fetch(newsApiUrl);

        if (!response.ok) {
            console.log(response.status);
            return;
        }

        const data = await response.json();
        const { articles } = data;
        displayArticles(articles);
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
