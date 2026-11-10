document.addEventListener("DOMContentLoaded", () => {
  const c = window.SITE_CONTENT || SITE_CONTENT;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("followerCount", c.followerCount);
  setText("currentLocation", c.currentLocation);
  setText("coordinates", c.coordinates);
  setText("lastUpdated", c.lastUpdated);
  setText("nextDestination", c.nextDestination);
  setText("locationUpdate", c.locationUpdate);

  setText("pageLocation", c.currentLocation);
  setText("pageCoordinates", c.coordinates);
  setText("pageUpdated", c.lastUpdated);
  setText("pageNext", c.nextDestination);
  setText("pageLocationUpdate", c.locationUpdate);

  const hero = document.getElementById("heroImage");
  const about = document.getElementById("aboutImage");
  if (hero) hero.src = c.heroImage;
  if (about) about.src = c.aboutImage;

  const links = {
    instagramUrl: c.social.instagram,
    youtubeUrl: c.social.youtube,
    facebookUrl: c.social.facebook,
    amazonUrl: c.social.amazon
  };
  Object.entries(links).forEach(([id, href]) => {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });

  const storyGrid = document.getElementById("storyGrid");
  if (storyGrid) {
    storyGrid.innerHTML = c.stories.map(story => `
      <article class="story-card">
        <a href="${story.link}">
          <img src="${story.image}" alt="">
          <div class="story-body">
            <small>${story.category}</small>
            <h3>${story.title}</h3>
            <p>${story.excerpt}</p>
            <span>Read the story →</span>
          </div>
        </a>
      </article>`).join("");
  }

  const productGrid = document.getElementById("productGrid");
  if (productGrid) {
    productGrid.innerHTML = c.products.map(product => `
      <article class="product-card">
        <a href="${product.link}">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info"><h3>${product.name}</h3><strong>${product.price}</strong></div>
        </a>
      </article>`).join("");
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
});
