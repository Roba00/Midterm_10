fetch("data.json")
    .then(response => response.json())
    .then(phones => loadPhones(phones));

function loadPhones(phone_list) {
    
}