let userSelect = document.getElementById("userSelect");
let userImage = document.getElementById("userImage");
let userName = document.getElementById("userName");
let userLocation = document.getElementById("userLocation");
let userWishlist = document.getElementById("userWishlist");
let userCart = document.getElementById("userCart");
let userRecentlyPurchased = document.getElementById("userRecentlyPurchased");

userSelect.addEventListener("change", () => {
    switch (userSelect.value) {
        case "1":
            console.log("User 1 Selected");
            fetch("data.json")
                .then(response => response.json())
                .then(jsonResponse => jsonResponse.users.filter((user) => user.id == "1")[0])
                .then(userResponse => {
                    console.log(userResponse);
                    userImage.src = userResponse.image;
                    userName.innerText = userResponse.name;
                    userLocation.innerText = userResponse.location;
                    fetch("data.json")
                        .then(response => response.json())
                        .then(jsonResponse => jsonResponse.phones)
                        .then(products => {
                            userWishlist.innerHTML = "";
                            for (itemId of userResponse.wishlist) {
                                product = products.filter((product) => product.productId == itemId)[0];
                                userWishlist.innerHTML += 
                                `<div class='card text-bg-light p-0 w-50 h-50'>
                                    <img src='${product.image}' class='card-img' />
                                    <div class='card-body text-center'>
                                        <h4 class='card-title'>${product.brand + " " + product.title}</h4>
                                        <h7 class='card-text'>$${product.price}</h7>
                                    </div>
                                </div>`;
                            }

                            userCart.innerHTML = "";
                            for (itemId of userResponse.cart) {
                                product = products.filter((product) => product.productId == itemId)[0];
                                userCart.innerHTML += 
                                `<div class='card text-bg-light p-0 w-50 h-50'> +
                                    <img src='${product.image}' class='card-img' /> +
                                    <div class='card-body text-center'> +
                                        <h4 class='card-title'>${product.brand + " " + product.title}</h4> +
                                        <h7 class='card-text'>$${product.price}</h7> +
                                    </div> +
                                </div>`;
                            }

                            userRecentlyPurchased.innerHTML = "";
                            for (itemId of userResponse.recentlyPurchased) {
                                product = products.filter((product) => product.productId == itemId)[0];
                                userRecentlyPurchased.innerHTML += 
                                `<div class='card text-bg-light p-0 w-50 h-50'> +
                                    <img src='${product.image}' class='card-img' /> +
                                    <div class='card-body text-center'> +
                                        <h4 class='card-title'>${product.brand + " " + product.title}</h4> +
                                        <h7 class='card-text'>$${product.price}</h7> +
                                    </div> +
                                </div>`;
                            }
                        });
                });
            break;
        case "2":
            console.log("User 2 Selected");
            fetch("data.json")
                .then(response => response.json())
                .then(jsonResponse => jsonResponse.users.filter((e) => e.id == "2")[0])
                .then(userResponse => {
                    console.log(userResponse)
                    // userImage.setAttribute("src", userResponse.image)
                    userImage.src = userResponse.image
                    userName.innerText = userResponse.name
                    userLocation.innerText = userResponse.location
                    fetch("data.json")
                        .then(response => response.json())
                        .then(jsonResponse => jsonResponse.phones)
                        .then(products => {
                            userWishlist.innerHTML = "";
                            for (itemId of userResponse.wishlist) {
                                product = products.filter((product) => product.productId == itemId)[0];
                                userWishlist.innerHTML += 
                                `<div class='card text-bg-light p-0 w-50 h-50'>
                                    <img src='${product.image}' class='card-img' />
                                    <div class='card-body text-center'>
                                        <h4 class='card-title'>${product.brand + " " + product.title}</h4>
                                        <h7 class='card-text'>$${product.price}</h7>
                                    </div>
                                </div>`;
                            }

                            userCart.innerHTML = "";
                            for (itemId of userResponse.cart) {
                                product = products.filter((product) => product.productId == itemId)[0];
                                userCart.innerHTML += 
                                `<div class='card text-bg-light p-0 w-50 h-50'> +
                                    <img src='${product.image}' class='card-img' /> +
                                    <div class='card-body text-center'> +
                                        <h4 class='card-title'>${product.brand + " " + product.title}</h4> +
                                        <h7 class='card-text'>$${product.price}</h7> +
                                    </div> +
                                </div>`;
                            }

                            userRecentlyPurchased.innerHTML = "";
                            for (itemId of userResponse.recentlyPurchased) {
                                product = products.filter((product) => product.productId == itemId)[0];
                                userRecentlyPurchased.innerHTML += 
                                `<div class='card text-bg-light p-0 w-50 h-50'> +
                                    <img src='${product.image}' class='card-img' /> +
                                    <div class='card-body text-center'> +
                                        <h4 class='card-title'>${product.brand + " " + product.title}</h4> +
                                        <h7 class='card-text'>$${product.price}</h7> +
                                    </div> +
                                </div>`;
                            }
                        });
                });
            break;
        case "3":
            console.log("User 3 Selected");
            fetch("data.json")
                .then(response => response.json())
                .then(jsonResponse => jsonResponse.users.filter((e) => e.id == "3")[0])
                .then(userResponse => {
                    console.log(userResponse)
                    // userImage.setAttribute("src", userResponse.image)
                    userImage.src = userResponse.image
                    userName.innerText = userResponse.name
                    userLocation.innerText = userResponse.location
                    fetch("data.json")
                        .then(response => response.json())
                        .then(jsonResponse => jsonResponse.phones)
                        .then(products => {
                            userWishlist.innerHTML = "";
                            for (itemId of userResponse.wishlist) {
                                product = products.filter((product) => product.productId == itemId)[0];
                                userWishlist.innerHTML += 
                                `<div class='card text-bg-light p-0 w-50 h-50'>
                                    <img src='${product.image}' class='card-img' />
                                    <div class='card-body text-center'>
                                        <h4 class='card-title'>${product.brand + " " + product.title}</h4>
                                        <h7 class='card-text'>$${product.price}</h7>
                                    </div>
                                </div>`;
                            }

                            userCart.innerHTML = "";
                            for (itemId of userResponse.cart) {
                                product = products.filter((product) => product.productId == itemId)[0];
                                userCart.innerHTML += 
                                `<div class='card text-bg-light p-0 w-50 h-50'> +
                                    <img src='${product.image}' class='card-img' /> +
                                    <div class='card-body text-center'> +
                                        <h4 class='card-title'>${product.brand + " " + product.title}</h4> +
                                        <h7 class='card-text'>$${product.price}</h7> +
                                    </div> +
                                </div>`;
                            }

                            userRecentlyPurchased.innerHTML = "";
                            for (itemId of userResponse.recentlyPurchased) {
                                product = products.filter((product) => product.productId == itemId)[0];
                                userRecentlyPurchased.innerHTML += 
                                `<div class='card text-bg-light p-0 w-50 h-50'> +
                                    <img src='${product.image}' class='card-img' /> +
                                    <div class='card-body text-center'> +
                                        <h4 class='card-title'>${product.brand + " " + product.title}</h4> +
                                        <h7 class='card-text'>$${product.price}</h7> +
                                    </div> +
                                </div>`;
                            }
                        });
                });
            break;
        default:
            console.error("Invalid User Selected");
            break;
    }
})