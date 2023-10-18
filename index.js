fetch("./data.json")
    .then(response => response.json())
    .then(responseBody => loadHome(responseBody.home));

function loadHome(data) {
    console.log(data);

    let phonesImage = document.getElementById("phones-image");
    let phonesName = document.getElementById("phones-name");
    let phonesDescription = document.getElementById("phones-description");
    let phonesStartingPrice = document.getElementById("phones-startingPrice");
    phonesImage.src = data[0].image;
    phonesName.innerText = data[0].name;
    phonesDescription.innerText = data[0].description;
    phonesStartingPrice.innerText = `Starting at: ${data[0].startingPrice}`;

    let laptopsImage = document.getElementById("laptops-image");
    let laptopsName = document.getElementById("laptops-name");
    let laptopsDescription = document.getElementById("laptops-description");
    let laptopsStartingPrice = document.getElementById("laptops-startingPrice");
    laptopsImage.src = data[1].image;
    laptopsName.innerText = data[1].name;
    laptopsDescription.innerText = data[1].description;
    laptopsStartingPrice.innerText = `Starting at: ${data[1].startingPrice}`;

    let watchesImage = document.getElementById("watches-image");
    let watchesName = document.getElementById("watches-name");
    let watchesDescription = document.getElementById("watches-description");
    let watchesStartingPrice = document.getElementById("watches-startingPrice");
    watchesImage.src = data[2].image;
    watchesName.innerText = data[2].name;
    watchesDescription.innerText = data[2].description;
    watchesStartingPrice.innerText = `Starting at: ${data[2].startingPrice}`;

    let vrsImage = document.getElementById("vrs-image");
    let vrsName = document.getElementById("vrs-name");
    let vrsDescription = document.getElementById("vrs-description");
    let vrsStartingPrice = document.getElementById("vrs-startingPrice");
    vrsImage.src = data[3].image;
    vrsName.innerText = data[3].name;
    vrsDescription.innerText = data[3].description;
    vrsStartingPrice.innerText = `Starting at: ${data[3].startingPrice}`;
}