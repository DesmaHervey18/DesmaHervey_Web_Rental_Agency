function carTemplate() {
    var source = document.getElementById("here").innerHTML;
    var template = Handlebars.compile(source);
    var content = "";
    for (var i = 0; i < PAGE_DATA.car.length; i++) {
        content += template({
            title: PAGE_DATA.car[i].name,
            imageURL: PAGE_DATA.car[i].imageURL,
            price: PAGE_DATA.car[i].price,
            stock: PAGE_DATA.car[i].stock,
            description: PAGE_DATA.car[i].description
        });
    }
    document
        .querySelector("#template")
        .insertAdjacentHTML("beforeend", content);
}

carTemplate();

function refreshpage() {
    location.reload();
}

function Thankyou() {
    var payment = document.forms["payment"];
    // console.log(document.forms["payment"].innerHTML);
    var firstInput = payment["first-name"];
    var firstName = firstInput.value;
    var lastInput = payment["last-name"];
    var lastName = lastInput.value;
    console.log(lastName);
    var formContainer = document.querySelector(".form-container");
    formContainer.innerHTML = `<h1 class="text-center">Thank You ${firstName} ${lastName} I Hope You Enjoy!!!</h1>\n<button onclick="refreshpage()" class="button btn-dark">Refresh</button>`;
}

document
    .querySelector("#submit-form")
    .addEventListener("click", function(event) {
        event.preventDefault();
        Thankyou();
    });
