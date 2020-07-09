import "../scss/main.scss";

console.log("Hi! I'm Jonasz. It's cool to see you here!");

fetch(
  "https://api.github.com/users/schier-jonasz/repos?sort=created&direction=asc"
)
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".projects-grid--js");

    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;
      const template = `<article class="project">
          <div class="project__window">
            <span class="project__circle"></span>
            <span class="project__circle"></span>
            <span class="project__circle"></span>
          </div>

          <div class="project__content">
            <img src="img/github.png" alt="" />
            <h3 class="project__title project__grid">
              <span class="project__label">project:</span>
              <span>${name}</span>
            </h3>
            <p class="project__grid">
              <span class="project__label">description:</span>
              <span>${description}</span>
            </p>
            <p class="project__grid">
              <span class="project__label">demo:</span>
              <span
                ><a target="_blank" rel="noopener noreferrer" href="${homepage}" class="project__link" title="${name} - demo"
                  >&lt;see_here&gt;</a
                ></span
              >
            </p>
            <p class="project__grid">
              <span class="project__label">github:</span>
              <span
                ><a target="_blank" rel="noopener noreferrer" href="${html_url}" class="project__link" title="${name} - code"
                  >&lt;source_code&gt;</a
                ></span
              >
            </p>
          </div>
        </article>`;

      if (description) {
        container.innerHTML += template;
      }
    }
  })
  .catch((e) => console.log(e));
