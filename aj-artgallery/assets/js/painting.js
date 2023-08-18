let verity = 'all'
let types = 'all'
let color = 'all'
let creator = 'all'
let previousScrollPosition = 0;

function HandlePage(){
    $('.goback').hide();
    const url = window.location.search
    const parameter1 = getParameterByName("param1", url)
    const parameter2 = getParameterByName("param2", url)
    const parameter3 = getParameterByName("param3", url)
    const parameter7 = getParameterByName("param4", url)
    const parameter4 = getParameterByName("label1", url)
    const parameter5 = getParameterByName("label2", url)
    const parameter6 = getParameterByName("label3", url)
    const parameter8 = getParameterByName("label4", url)
    verity = parameter1? parameter1 : 'all'
    types = parameter2? parameter2 : 'all'
    color = parameter3? parameter3 : 'all'
    creator = parameter7? parameter7 : 'all'
    const verity_label = parameter4? parameter4 : 'All'
    const types_label = parameter5? parameter5 : 'All'
    const color_label = parameter6? parameter6 : 'All'
    const creator_label = parameter8? parameter8 : 'All'
    HandleFilters(verity_label, types_label, color_label,creator_label);
    HandleFiltersButtons()
    HandlePaintings(verity,types,color,creator)
    handleDarkMode();
    setTimeout(() => {
        $('.loading-container').hide();
        $('.PaintingPage').show();
    }, 200);
}

function HandleFilters(a,b,c,d){
    const filters = Data.filters
    const verity = filters.verity
    const types  = filters.types
    const color  = filters.color
    const artist = filters.artists
    const data = { verity:[], types:[], color:[], artist:[] };

    for (let i = 0; i < verity.length; i++){
        const e = verity[i]
        const list = `
        <li>
            <a class="dropdown-item filter-button1 text-dark" data-filter="${e.id}" aria-label="${e.aria_label}">${e.aria_label}</a>
        </li>
        `
        data.verity.push(list);
    }
    data.verity.push(`
    <li>
        <a class="dropdown-item filter-button1 text-dark" data-filter="all" aria-label="All">All</a>
    </li>
    `);
    for (let i = 0; i < types.length; i++){
        const e = types[i]
        const list = `
        <li>
            <a class="dropdown-item filter-button2 text-dark" data-filter="${e.id}" aria-label="${e.aria_label}">${e.aria_label}</a>
        </li>
        `
        data.types.push(list);
    }
    data.types.push(`
    <li>
        <a class="dropdown-item filter-button2 text-dark" data-filter="all" aria-label="All">All</a>
    </li>
    `);
    for (let i = 0; i < color.length; i++){
        const e = color[i]
        const list = `
        <li>
            <a class="dropdown-item filter-button3 text-dark" data-filter="${e.id}" aria-label="${e.aria_label}">${e.aria_label}</a>
        </li>
        `
        data.color.push(list);
    }
    data.color.push(`
    <li>
        <a class="dropdown-item filter-button3 text-dark" data-filter="all" aria-label="All">All</a>
    </li>
    `);
    for (let i = 0; i < artist.length; i++){
        const e = artist[i]
        const list = `
        <li>
            <a class="dropdown-item filter-button4 text-dark" data-filter="${e.id}" aria-label="${e.aria_label}">${e.aria_label}</a>
        </li>
        `
        data.artist.push(list);
    }
    data.artist.push(`
    <li>
        <a class="dropdown-item filter-button4 text-dark" data-filter="all" aria-label="All">All</a>
    </li>
    `);

    const html =`
    <div class="container card shadow-light p-3 bg-light">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <p class="text-center fs-5 text-dark">Select Verities</p>
          </div>
          <div class="col">
            <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                ${a}
            </button>
              <ul class="dropdown-menu bg-light shadow-light mt-4" aria-labelledby="dropdownMenuButton1" id="dropdown-menu-1">
              ${data.verity.join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <p class="text-center fs-5 text-dark">Select Types</p>
          </div>
          <div class="col">
            <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton2"
                data-bs-toggle="dropdown" aria-expanded="false">
                ${b}
            </button>
              <ul class="dropdown-menu bg-light shadow-light mt-4" aria-labelledby="dropdownMenuButton2" id="dropdown-menu-2">
              ${data.types.join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <p class="text-center fs-5 text-dark">Select Colors</p>
          </div>
          <div class="col">
            <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton3"
                data-bs-toggle="dropdown" aria-expanded="false">
                ${c}
            </button>
              <ul class="dropdown-menu bg-light shadow-light mt-4" aria-labelledby="dropdownMenuButton3" id="dropdown-menu-3">
              ${data.color.join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <p class="text-center fs-5 text-dark">Select Artist</p>
          </div>
          <div class="col">
            <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton4"
                data-bs-toggle="dropdown" aria-expanded="false">
                ${d}
            </button>
              <ul class="dropdown-menu bg-light shadow-light mt-4" aria-labelledby="dropdownMenuButton4" id="dropdown-menu-3">
              ${data.artist.join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
    const filtersContainer = document.getElementById('Painting-Filters');
    filtersContainer.innerHTML = html;
}

function HandleFiltersButtons(){
    $(".filter-button1").click(function(){
        verity = $(this).attr('data-filter');
        document.getElementById("dropdownMenuButton1").innerHTML = $(this).attr('aria-label');
        HandlePaintings(verity,types,color,creator)
        handleDarkMode();
    })
    $(".filter-button2").click(function(){
        types = $(this).attr('data-filter');
        document.getElementById("dropdownMenuButton2").innerHTML = $(this).attr('aria-label');
        HandlePaintings(verity,types,color,creator)
        handleDarkMode();
    })
    $(".filter-button3").click(function(){
        color = $(this).attr('data-filter');
        document.getElementById("dropdownMenuButton3").innerHTML = $(this).attr('aria-label');
        HandlePaintings(verity,types,color,creator)
        handleDarkMode();
    })
    $(".filter-button4").click(function(){
        creator = $(this).attr('data-filter');
        document.getElementById("dropdownMenuButton4").innerHTML = $(this).attr('aria-label');
        HandlePaintings(verity,types,color,creator)
        handleDarkMode();
    })
}

function GetArtistDetails(artist){
    const artists = Data.filters.artists;
    for (let i = 0; i < artists.length; i++){
        const e = artists[i]
        if (e.id == artist) {
            return e
        }
    }
}

function HandlePaintings(a,b,c,d){
    $('.loading-container2').show();
    $('#Paintings-Container').hide();
    const Paintings = Data.Paintings;
    const data = []
    for (let i = 0; i < Paintings.length; i++){
        const e = Paintings[i]
        if ((e.filter.verity == a || a == 'all') && (e.filter.Type == b || b == 'all') && (e.filter.Color == c || c == 'all') && (e.filter.artist == d || d == 'all')){
            const artest = GetArtistDetails(e.filter.artist)
            console.log(e.artist)
            const item = `
            <div class="col">
                <div class="card addHover-light p-3 mb-5 bg-light rounded border border-dark2">
                    <img src="${e.image}" class="card-img-top image-fluid"
                    alt="${e.Image_alt}" />
                    <hr class="divider divider-dark" />
                    <div class="card-body">
                        <h5 class="card-title text-center text-dark">${e.Title}</h5>
                        <p class="card-text text-center text-dark">${e.description}</p>
                    </div>
                    <hr class="divider divider-dark" />
                    <div class="row text-dark">
                        <div class="col">
                            <p class="fw-bold">Verity:</p>
                            <p class="fw-bold">Type:</p>
                            <p class="fw-bold">Color:</p>
                        </div>
                        <div class="col">
                            <p class="fw-normal">${e.filter.verity_label}</p>
                            <p class="fw-normal">${e.filter.Type_label}</p>
                            <p class="fw-normal">${e.filter.Color_label}</p>
                        </div>
                    </div>
                    <hr class="divider divider-dark" />
                    <button type="button" class="btn btn-light float-md-center text-dark"
                        onclick="onRead('${e.image}','${e.Image_alt}','${e.Title}','${e.description}','${e.filter.verity_label}','${e.filter.Type_label}','${e.filter.Color_label}','${e.price}',\`${e.detail}\`)">
                        Read More
                    </button>
                    <button type="button" class="btn btn-light float-md-center text-dark"
                        onclick="onReadArtist('${artest.id}','${artest.aria_label}','${artest.Image}','${artest.image_alt}','${artest.Description}')">
                        About Artist
                    </button>
                    <button type="button" class="mt-3 btn btn-light float-md-center text-dark"
                        onclick="OnDownload('${e.image}', '${e.Title} // ${e.description}.jpg')">
                        Downlaod Image
                    </button>
                    <hr class="divider divider-dark" />
                    <div class="card-footer text-center text-dark">${e.price}</div>
                </div>
            </div>
            `
            data.push(item)
        }
    }
    if (data.length >= 1) {
        const html = `
        <div class="container">
            <p class="text-center fs-1 text-dark">Paintings</p>
            <div class="row row-cols-1 row-cols-md-3 m-4" id="cards">
                ${data.join('')}
            </div>
        </div>
        `
        const paintingContainer = document.getElementById('Paintings-Container');
        paintingContainer.innerHTML = html;
    } else {
        if (DarkMode) {
            const html = `
            <div class="container">
                <p class="text-center fs-1 text-light">Paintings</p>
                <br><br>
                <p class="text-center fs-1 text-light">Nothing Found Based On Filters</p>
                <br><br>
            </div>
            `
            const paintingContainer = document.getElementById('Paintings-Container');
            paintingContainer.innerHTML = html;
        } else {
            const html = `
            <div class="container">
                <p class="text-center fs-1 text-dark">Paintings</p>
                <br><br>
                <p class="text-center fs-1 text-dark">Nothing Found Based On Filters</p>
                <br><br>
            </div>
            `
            const paintingContainer = document.getElementById('Paintings-Container');
            paintingContainer.innerHTML = html;
        }
        
    }
    
    $('.loading-container2').hide();
    $('#Paintings-Container').show();
}

function onReadArtist(id,name,image,image_alt,description){
    if (DarkMode) {
        const html = `
        <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-light" onclick="GOBack()">&lt;&lt;&lt; Go Back</button>
                
            </div>
            <div class="col">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="/painting.html?param1=all&param2=all&param3=all&param4=${id}&label1=All&label2=All&label3=All&label4=${name}"><button class="btn btn-light">See all painting from this artist</button><a>
                    
                </div>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 m-4">
            <div class="col">
                <img src="${image}" class="img-fluid rounded mx-auto mt-5 pt-5 pb-5 mt-5 d-block shadow-dark" alt="${image_alt}" />
            </div>
            <div class="col text-light">
                <p class="fs-1 text-center ">${name}</p>
                <br><br>
                <p class="fs-2">Detail:</p>
                <p class="fs-4">${description}</p>
            </div>
        </div>
    </div>
        `
        const paintingContainer = document.getElementById('Painting-Details');
        paintingContainer.innerHTML = html;
    } else {
        const html = `
    <div class="container">
    <button class="btn btn-light" onclick="GOBack()">&lt;&lt;&lt; Go Back</button>
    <div class="row row-cols-1 row-cols-md-2 m-4">
        <div class="col">
            <img src="${image}" class="img-fluid rounded mx-auto mt-5 pt-5 pb-5 mt-5 d-block shadow-light" alt="${image_alt}" />
        </div>
        <div class="col">
            <p class="fs-1 text-center">${name}</p>
            <br><br>
            <p class="fs-2">Detail:</p>
            <p class="fs-4">${description}</p>
        </div>
    </div>
</div>
    `
    const paintingContainer = document.getElementById('Painting-Details');
    paintingContainer.innerHTML = html;
    }
    previousScrollPosition = window.scrollY;
    $('#Paintings-Container').hide();
    $('#Painting-Details').show();
    $('.goback').show();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Use 'auto' for instant scroll
    });
}

function onRead(Image, Image_alt, Title, description, Verity, Types, Colors, Price, Detail){
    if (DarkMode) {
        const html = `
        <div class="container">
        <button class="btn btn-light" onclick="GOBack()">&lt;&lt;&lt; Go Back</button>
        <div class="row row-cols-1 row-cols-md-2 m-4">
            <div class="col">
                <img src="${Image}" class="img-fluid rounded mx-auto mt-5 pt-5 pb-5 mt-5 d-block shadow-dark" alt="${Image_alt}" />
            </div>
            <div class="col text-light">
                <p class="fs-1 text-center ">${Title}</p>
                <p class="fs-3 text-center">${description}</p>
                <br><br>
                <div class="row">
                    <div class="col">
                        <p class="fw-bold">Verity:</p>
                        <p class="fw-bold">Type:</p>
                        <p class="fw-bold">Color:</p>
                        <p class="fw-bold">Price:</p>
                    </div>
                    <div class="col">
                        <p class="fw-normal">${Verity}</p>
                        <p class="fw-normal">${Types}</p>
                        <p class="fw-normal">${Colors}</p>
                        <p class="fw-normal">${Price}</p>
                    </div>
                </div>
                <br><br>
                <p class="fs-2">Detail:</p>
                <p class="fs-5">${Detail}</p>
            </div>
        </div>
    </div>
        `
        const paintingContainer = document.getElementById('Painting-Details');
        paintingContainer.innerHTML = html;
    } else {
        const html = `
    <div class="container">
    <button class="btn btn-light" onclick="GOBack()">&lt;&lt;&lt; Go Back</button>
    <div class="row row-cols-1 row-cols-md-2 m-4">
        <div class="col">
            <img src="${Image}" class="img-fluid rounded mx-auto mt-5 pt-5 pb-5 mt-5 d-block shadow-light" alt="${Image_alt}" />
        </div>
        <div class="col">
            <p class="fs-1 text-center">${Title}</p>
            <p class="fs-3 text-center">${description}</p>
            <br><br>
            <div class="row">
                <div class="col">
                    <p class="fw-bold">Verity:</p>
                    <p class="fw-bold">Type:</p>
                    <p class="fw-bold">Color:</p>
                    <p class="fw-bold">Price:</p>
                </div>
                <div class="col">
                    <p class="fw-normal">${Verity}</p>
                    <p class="fw-normal">${Types}</p>
                    <p class="fw-normal">${Colors}</p>
                    <p class="fw-normal">${Price}</p>
                </div>
            </div>
            <br><br>
            <p class="fs-2">Detail:</p>
            <p class="fs-4">${Detail}</p>
        </div>
    </div>
</div>
    `
    const paintingContainer = document.getElementById('Painting-Details');
    paintingContainer.innerHTML = html;
    }
    previousScrollPosition = window.scrollY;
    $('#Paintings-Container').hide();
    $('#Painting-Details').show();
    $('.goback').show();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Use 'auto' for instant scroll
    });
}

function GOBack(){
    $('#Painting-Details').hide();
    $('.goback').hide();
    $('#Paintings-Container').show();
    window.scrollTo({
        top: previousScrollPosition,
        behavior: 'smooth'
    });
}

function OnDownload(path, name) {
    var link = document.createElement("a");
    link.href = path;
    link.setAttribute("download", name);
    link.click();
}