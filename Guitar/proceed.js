var i = localStorage.getItem("i");
var data = localStorage.getItem("data");
var a = localStorage.getItem('vName');
var b = localStorage.getItem('vAddress');
var c = localStorage.getItem('vEmail');
var ccName = localStorage.getItem('ccName');
var ccNum = localStorage.getItem('ccNum');
var ccExp = localStorage.getItem('ccExp');

data = JSON.parse(data);

var nxtBtn = document.getElementById("next");
var preBtn = document.getElementById("prev");
var guitarImage = document.getElementById("guitarImg");
var descript = document.getElementById("descript");
var shipInfo = document.getElementById("shipInfo");
var custRev = document.getElementById("custRev");
var stock = document.getElementById("stock");

guitarImage.src = data[i].image_path;
descript.innerHTML = data[i].product_description;
shipInfo.innerHTML = data[i].shipping_details;
custRev.innerHTML = data[i].price;
stock.innerHTML = data[i].no_of_items;

var summary = document.getElementById('summary');
summary.style.display='block';
var vName = document.getElementById('vName');
var summary = document.getElementById('summary');
var vName = document.getElementById('vName');
var options = document.getElementsByTagName('option');
var vAddress = document.getElementById("vAddress");
var vCC = document.getElementById("vCC");
var vEmail = document.getElementById('vEmail');

vName.innerHTML = a;
vAddress.innerHTML = b;
vEmail.innerHTML = c;
vCC.appendChild(document.createTextNode(`Name on Card: ${ccName} || Card number: ${ccNum} || Card Exp: ${ccExp}`));

document.getElementById('goToHome').addEventListener('click',function(){
    window.location.href = 'guitar.html';
})