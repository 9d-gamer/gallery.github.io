function HandlePage() {
  HandleSliders();
  HandleSpotLight();
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
  console.log(Data)
  for (i=0; i < Paintings.length; i++){
    const e = Paintings[i];
    if (e.spotlight) {
      const card = `<div class="col">
      <div class="card addHover-light p-3 mb-5 bg-light rounded border border-dark">
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
  console.log(html)
  const spotlightContainer = document.getElementById('Home-Spotlight');
  spotlightContainer.innerHTML = html;
}