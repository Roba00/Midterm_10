let userSelect = document.getElementById("userSelect");
let userImage = document.getElementById("userImage");
let userName = document.getElementById("userName");
let userLocation = document.getElementById("userLocation");

userSelect.addEventListener("change", () => {
    switch (userSelect.value) {
        case "1":
            console.log("User 1 Selected");
            fetch("data.json")
                .then(response => response.json())
                .then(jsonResponse => jsonResponse.users.filter((e) => e.id == "1")[0])
                .then(userResponse => {
                    console.log(userResponse)
                    // userImage.setAttribute("src", userResponse.image)
                    userImage.src = userResponse.image
                    userName.innerText = userResponse.name
                    userLocation.innerText = userResponse.location
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
                });
            break;
        default:
            console.error("Invalid User Selected");
            break;
    }
})