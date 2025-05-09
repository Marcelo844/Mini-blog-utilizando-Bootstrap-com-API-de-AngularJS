const posts = [
    { id: 1, title: "Primeiro Post", summary: "Resumo do primeiro post" },
    { id: 2, title: "Segundo Post", summary: "Resumo do segundo post." },
  ];
  
  const container = document.getElementById("posts-container");
  
  posts.forEach(post => {
    const postEl = document.createElement("article");
    postEl.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.summary}</p>
      <a href="post.html?id=${post.id}">Leia mais</a>
    `;
    container.appendChild(postEl);
  });
  