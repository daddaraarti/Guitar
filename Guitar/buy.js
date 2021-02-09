var i = localStorage.getItem("i");
var d = localStorage.getItem("data");
var data = JSON.parse(d);

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
////------------------------------------------------------------------------------------------------------------------///



///--------------------------------------------------------------------------------------------------------------------////

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var address = document.getElementById('address');
var address2 = document.getElementById('address2');
var country = document.getElementById('country');
var state = document.getElementById('state');
var zipcode = document.getElementById('zipcode');

var ccName = document.getElementById('ccName');
var ccNum = document.getElementById('ccNum');
var ccExp = document.getElementById('ccExp');
var checkOut = document.getElementById('checkOut');
var checkOutBox = document.getElementById('checkOutBox');

console.log();

var form = document.getElementById('form');

var summary = document.getElementById('summary');
var vName = document.getElementById('vName');
var options = document.getElementsByTagName('option');
var vAddress = document.getElementById("vAddress");
var vCC = document.getElementById("vCC");
var vEmail = document.getElementById('vEmail');

checkOut.addEventListener('click', () => {
    if(form.checkValidity() == true ){
    summary.style.display = 'block';
    checkOutBox.style.display = 'none';
    vName.appendChild(document.createTextNode(`${fname.value} ${lname.value}.`));
    vEmail.appendChild(document.createTextNode(`${email.value}.`));
    vAddress.appendChild(document.createTextNode(`${address.value} ${address2.value}, ${state.options[state.selectedIndex].value}, ${country.options[country.selectedIndex].value}, ${zipcode.value}.`));
    vCC.appendChild(document.createTextNode(`Name on Card: ${ccName.value} || Card number ${ccNum.value} || Card Exp:${ccExp.value}.`));
    }    
})

var edit = document.getElementById('edit');

edit.addEventListener('click', ()=>{
    summary.style.display='none';
    checkOutBox.style.display = 'block';
    var x = summary.querySelectorAll('span');
    for(i=0;i<x.length;i++){
        x[i].innerHTML ='';
    }
})

var proceed = document.getElementById('proceed');

proceed.addEventListener('click', function(){

    localStorage.setItem('vName', vName.innerHTML);
    localStorage.setItem('vAddress', vAddress.innerHTML);
    localStorage.setItem('vEmail', vEmail.innerHTML);
    //localStorage.setItem('vCC', vCC.innerHtml);
    localStorage.setItem('ccName', ccName.value);
    localStorage.setItem('ccNum', ccNum.value);
    localStorage.setItem('ccExp', ccExp.value);

    if(form.checkValidity() == true){
        window.location.href = 'proceed.html';
    }
})