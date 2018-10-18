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
