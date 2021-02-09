var xhtml = new XMLHttpRequest();
var data;
xhtml.open('GET', 'guitardata.json', true);
xhtml.onreadystatechange = function () {
    if (xhtml.readyState == 4 && xhtml.status == 200) {
        var d = xhtml.responseText;
        var jsonData = JSON.parse(d);
        //console.log(jsonData.allProducts);
        data = jsonData.allProducts;
        //console.log(dataIndex.length);
    }
}
xhtml.send();
console.log(data);


var nxtBtn = document.getElementById("next");
var preBtn = document.getElementById("prev");
var guitarImage = document.getElementById("guitarImg");
var descript = document.getElementById("descript");
var shipInfo = document.getElementById("shipInfo");
var custRev = document.getElementById("custRev");

var i = -1;

nxtBtn.onclick = function () {
    i++;
    if (i == data.length) { i = 0 };
    guitarImage.src = data[i].image_path;
    descript.innerHTML = data[i].product_description;
    shipInfo.innerHTML = data[i].shipping_details;
    custRev.innerHTML = data[i].customer_reviews.replace(/;/g, "<br /> --> ");
    console.log(data[i].image_path);

}
preBtn.onclick = function () {
    i--;
    if (i < 0) { i = data.length - 1; }
    guitarImage.src = data[i].image_path;
    descript.innerHTML = data[i].product_description;
    shipInfo.innerHTML = data[i].shipping_details;
    custRev.innerHTML = data[i].customer_reviews.replace(/;/g, "<br /> --> ");
    console.log(data[i].image_path);
}

var buy = document.getElementById("buy");

buy.addEventListener('click',function(){
    localStorage.setItem('i', i);
    localStorage.setItem('data', JSON.stringify(data));
    window.location.href = "buy.html";
}
)