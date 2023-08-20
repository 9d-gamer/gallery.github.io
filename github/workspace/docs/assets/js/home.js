function HandlePage() {
  HandleSliders();
  HandleSpotLight();
  HandleFilters();
  HandleFAQ();
  handleDarkMode();
  setTimeout(() => {
    $('.loading-container').hide();
    $('.HomePage').show();
  }, 200);
}

function HandleSliders() {
  const sliders = Data.Home_Page.Sliders;
  const sliderButtons = [];
  const sliderItems = [];

  sliders.forEach((e, i) => {
    const button = `<button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : 'aria-label="Slide ' + (i + 1) + '"'
      }></button>`;
    sliderButtons.push(button);

    const slider = `<div class="carousel-item ${i === 0 ? 'active' : ''}">
                      <img src="${e.Image}" class="d-block w-100" alt="${e.Image_alt}" />
                      <div class="carousel-caption d-none d-md-block">
                          <h5>${e.Title}</h5>
                          <p>${e.Description}</p>
                      </div>
                    </div>`;
    sliderItems.push(slider);
  });

  const html = `<div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">${sliderButtons.join('')}</div>
                  <div class="carousel-inner">${sliderItems.join('')}</div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                  </button>
                </div>`;

  const sliderContainer = document.getElementById('Home-sliders');
  sliderContainer.innerHTML = html;
}

function HandleSpotLight(){
  const Paintings = Data.Paintings;
  const spotlighs = [];
  for (i=0; i < Paintings.length; i++){
    const e = Paintings[i];
    if (e.spotlight) {
      const card = `<div class="col">
      <div class="card addHover-light p-3 mb-5 bg-light rounded border border-dark2">
        <img
          src="${e.image}"
          class="card-img-top image-fluid"
          alt="${e.Image_alt}"
        />
        <hr class="divider divider-dark" /> 
        <div class="card-body">
          <h5 class="card-title text-center text-dark">${e.Title}</h5>
          <p class="card-text text-center text-dark">${e.description}</p>
        </div>
        <hr class="divider divider-dark" />
        <div class="card-footer text-center text-dark">${e.price}</div>
      </div>
    </div>`
    spotlighs.push(card);
    }
  }
  const html = `
  <div class="container">
    <p class="text-center fs-1 text-dark">Weekly Spotlight</p>
    <a href="/painting.html" class="remove-anchor-decoration">
      <p class="text-end fs-5 text-primary">See More Arts>>></p>
    </a>
    <div class="row row-cols-1 row-cols-md-4 m-4" id="cards">
    ${spotlighs.join('')}
    </div>
  </div>`
  const spotlightContainer = document.getElementById('Home-Spotlight');
  spotlightContainer.innerHTML = html;
}

function HandleFilters(){
  const filters = Data.filters;
  const verity  = filters.verity;
  const types   = filters.types;
  const color  = filters.color;
  const data = { verity:[], types:[], color:[] };
  for (i=0; i < verity.length; i++) {
    const e = verity[i];
    const card = `<a
                    href="/painting.html?param1=${e.id}&param2=all&param3=all&label1=${e.aria_label}&label2=All&label3=All"
                    class="remove-anchor-decoration text-dark"
                  >
                    <div class="col">
                      <div class="card addHover-light p-3 mb-5 bg-light rounded border border-dark2">
                        <img
                          src="${e.image}"
                          class="card-img-top image-fluid"
                          alt="${e.image_alt}"
                        />
                        <div class="card-body">
                          <h5 class="card-title text-center text-dark">${e.label}</h5>
                        </div>
                      </div>
                    </div>
                  </a>`
    data.verity.push(card);
  }
  for (i=0; i < types.length; i++) {
    const e = types[i];
    const card = `<a
                    href="/painting.html?param1=all&param2=${e.id}&param3=all&label1=All&label2=${e.aria_label}&label3=All"
                    class="remove-anchor-decoration text-dark"
                  >
                    <div class="col">
                      <div class="card addHover-light p-3 mb-5 bg-light rounded border border-dark2">
                        <img
                          src="${e.image}"
                          class="card-img-top image-fluid"
                          alt="${e.image_alt}"
                        />
                        <div class="card-body">
                          <h5 class="card-title text-center text-dark">${e.label}</h5>
                        </div>
                      </div>
                    </div>
                  </a>`
    data.types.push(card);
  }
  for (i=0; i < color.length; i++) {
    const e = color[i];
    const card = `<a
                    href="/painting.html?param1=all&param2=all&param3=${e.id}&label1=All&label2=All&label3=${e.aria_label}"
                    class="remove-anchor-decoration text-dark"
                  >
                    <div class="col">
                      <div class="card addHover-light p-3 mb-5 bg-light rounded border border-dark2">
                        <img
                          src="${e.image}"
                          class="card-img-top image-fluid"
                          alt="${e.image_alt}"
                        />
                        <div class="card-body">
                          <h5 class="card-title text-center text-dark">${e.label}</h5>
                        </div>
                      </div>
                    </div>
                  </a>`
    data.color.push(card);
  }
  const html = `
  <div class="container">
      <p class="text-center fs-1 card shadow-light p-3 text-dark bg-light">
        We have these verities in paintings
      </p>
      <a href="/painting.html" class="remove-anchor-decoration">
        <p class="text-end fs-5 text-primary">See More Paintings>>></p>
      </a>
      <div class="row row-cols-1 row-cols-md-3 m-4" id="cards">
      ${data.verity.join('')}
      </div>
    </div>
    <hr class="divider divider-dark"/>
    <div class="container">
      <p class="text-center fs-1 card shadow-light p-3 text-dark bg-light">
        We have these types in paintings
      </p>
      <a href="/painting.html" class="remove-anchor-decoration">
        <p class="text-end fs-5 text-primary">See More Paintings>>></p>
      </a>
      <div class="row row-cols-1 row-cols-md-3 m-4" id="cards">
      ${data.types.join('')}
      </div>
    </div>
    <hr class="divider divider-dark"/>
    <div class="container">
      <p class="text-center fs-1 card shadow-light p-3 text-dark bg-light">
        We have these colors in paintings
      </p>
      <a href="/painting.html" class="remove-anchor-decoration">
        <p class="text-end fs-5 text-primary">See More Paintings>>></p>
      </a>
      <div class="row row-cols-1 row-cols-md-3 m-4" id="cards">
      ${data.color.join('')}
      </div>
    </div>`
  const filtersContainer = document.getElementById('Home-Filters');
  filtersContainer.innerHTML = html;
}

function HandleFAQ(){
  const FAQ = Data.Home_Page.FAQ;
  const faq = []
  for (i=0; i < FAQ.length; i++) {
    const e = FAQ[i]
    const data = `
    <div class="accordion-item bg-light">
      <h2 class="accordion-header bg-light" id="flush-headingOne">
        <button
          class="accordion-button collapsed bg-light text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapse${i}"
          aria-expanded="false"
          aria-controls="flush-collapse${i}"
        >
          ${e.Question}
        </button>
      </h2>
      <div
        id="flush-collapse${i}"
        class="accordion-collapse collapse"
        aria-labelledby="flush-heading${i}"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body shadow-light bg-light text-dark">
        ${e.Answer}
        </div>
      </div>
    </div>`
    faq.push(data);
  }
  const html = `
  <div class="container card p-3 bg-light">
      <div
        class="row row-cols-w row-cols-md-2 m-4 justify-content-center"
        id="cards"
      >
        <div class="col">
          <div class="m-5"></div>
          <p class="fs-2 text-center m-5 text-dark">Frequently Asked Questions</p>
        </div>
        <div class="col">
          <div class="accordion accordion-flush" id="accordionFlushExample">
          ${faq.join('')}
          </div>
        </div>
      </div>
    </div>`
  const faqContainer = document.getElementById('Home-Questions');
  faqContainer.innerHTML = html;
}