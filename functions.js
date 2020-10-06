var length1 = 15;
var width1 = 10;
var area;

area=getArea(length1,width1);

console.log(area);

function getArea(length,width){
    
    return length*width;
}

var bankBalance = 500;

function makeTransaction(priceSale) {
    if (priceSale <= bankBalance){
        bankBalance-= priceSale;
        console.log("Puchase Successful");
    } else{
        console.log("Insufficient Fund");
    }
}

makeTransaction(79.00);
makeTransaction(2.32);
makeTransaction(10.45);