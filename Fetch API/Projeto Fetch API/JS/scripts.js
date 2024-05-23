const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");

const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");

const postContainer = document.querySelector("#post-container");

const commentsContainer = document.querySelector("#comments-container");

// Get id from URL

const urlSearchParams = new URLSearchParams(window.location.search);

console.log(urlSearchParams);

const postId = urlSearchParams.get("id");


// GET all posts

async function getAllPosts() {


    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);

    loadingElement.classList.add("hide");

    data.map((post) =>{

        const div = document.createElement("div");

        const title = document.createElement("h2");

        const body = document.createElement("p");

        const link = document.createElement("a");

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "ler";
        link.setAttribute=("href",`/post.html?id=${post.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postContainer.appendChild(div);

    });
}

if(!postId) {
    getAllPosts();
} else {
    console.log(postId)
}