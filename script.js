function addNum(){
    let addNum = document.getElementById("plus1").value;
    let addNumInt = parseInt(addNum);
    let addPrice = document.getElementById("price1").innerText;
    let addPriceFloat = parseFloat(addPrice);
    addNumInt = addNumInt + 1;
    document.getElementById("plus1").value = addNumInt;
    let defaultPrice = 1219;
    addPriceFloat = addPriceFloat + defaultPrice;
    document.getElementById("price1").innerText = addPriceFloat;
    let subTotal = document.getElementById("subTotal").innerText;
    let addSubTotal = parseFloat(subTotal);
    document.getElementById("subTotal").innerText = defaultPrice + addSubTotal;
    let tax = document.getElementById("tax").innerText;
    let taxTotal = parseFloat(tax);
    document.getElementById("total").innerText = addSubTotal + taxTotal;

    
}
function addNum1(){
    let addNum = document.getElementById("plus1").value;
    let addNumInt = parseInt(addNum);
    let addPrice = document.getElementById("price1").innerText;
    let addPriceFloat = parseFloat(addPrice);
    addNumInt = addNumInt - 1;
    document.getElementById("plus1").value = addNumInt;
    let defaultPrice = 1219;
    addPriceFloat = addPriceFloat - defaultPrice;
    document.getElementById("price1").innerText = addPriceFloat;
    let subTotal = document.getElementById("subTotal").innerText;
    let addSubTotal = parseFloat(subTotal);
    document.getElementById("subTotal").innerText = addSubTotal - defaultPrice;
    let tax = document.getElementById("tax").innerText;
    let taxTotal = parseFloat(tax);
    document.getElementById("total").innerText = addSubTotal - taxTotal;
}
function cross(){
    document.getElementById("plus1").value = 0;
    document.getElementById("price1").innerText = 0;
    let addPrice = document.getElementById("price1").innerText;
    let addPriceFloat = parseFloat(addPrice);
    let addPrice1 = document.getElementById("price2").innerText;
    let addPriceFloat1 = parseFloat(addPrice1);
    document.getElementById("subTotal").innerText = addPriceFloat + addPriceFloat1;
    let subTotalNum = document.getElementById("subTotal").innerText;
    let  subTotalFloat = parseFloat(subTotalNum);
    let tax = document.getElementById("tax").innerText;
    let taxTotal = parseFloat(tax);
    let totalNum =  subTotalFloat + taxTotal;
    document.getElementById("total").innerText = totalNum;
    console.log(totalNum);
}



function addNum4(){
    let addNum = document.getElementById("plus2").value;
    let addNumInt = parseInt(addNum);
    let addPrice = document.getElementById("price2").innerText;
    let addPriceFloat = parseFloat(addPrice);
    addNumInt = addNumInt + 1;
    document.getElementById("plus2").value = addNumInt;
    let defaultPrice = 59;
    addPriceFloat = addPriceFloat + defaultPrice;
    document.getElementById("price2").innerText = addPriceFloat;

    let subTotal = document.getElementById("subTotal").innerText;
    let  subTotalFloat = parseFloat(subTotal);
    let subTotalNum = subTotalFloat + defaultPrice;
    document.getElementById("subTotal").innerText = subTotalNum;
    let tax = document.getElementById("tax").innerText;
    let taxTotal = parseFloat(tax);
    document.getElementById("total").innerText = subTotalFloat + taxTotal;
    
    
}
function addNum3(){
    let addNum = document.getElementById("plus2").value;
    let addNumInt = parseInt(addNum);
    let addPrice = document.getElementById("price2").innerText;
    let addPriceFloat = parseFloat(addPrice);
    addNumInt = addNumInt - 1;
    document.getElementById("plus2").value = addNumInt;
    let defaultPrice = 59;
    addPriceFloat = addPriceFloat - defaultPrice;
    document.getElementById("price2").innerText = addPriceFloat;

    let subTotal = document.getElementById("subTotal").innerText;
    let  subTotalFloat = parseFloat(subTotal);
    document.getElementById("subTotal").innerText = subTotalFloat - defaultPrice;

    let tax = document.getElementById("tax").innerText;
    let taxTotal = parseFloat(tax);
    document.getElementById("total").innerText = subTotalFloat - taxTotal;
}
function cross1(){
    document.getElementById("plus2").value = 0;
    document.getElementById("price2").innerText = 0;
    let addPrice = document.getElementById("price1").innerText;
    let addPriceFloat = parseFloat(addPrice);
    let addPrice1 = document.getElementById("price2").innerText;
    let addPriceFloat1 = parseFloat(addPrice1);
    document.getElementById("subTotal").innerText = addPriceFloat + addPriceFloat1;
    let subTotalNum = document.getElementById("subTotal").innerText;
    let  subTotalFloat = parseFloat(subTotalNum);

    let tax = document.getElementById("tax").innerText;
    let taxTotal = parseFloat(tax);
    let totalNum =  subTotalFloat + taxTotal;
    document.getElementById("total").innerText = totalNum;
    console.log(totalNum);
}
    let addPrice = document.getElementById("price1").innerText;
    let addPriceFloat = parseFloat(addPrice);
    let addPrice1 = document.getElementById("price2").innerText;
    let addPriceFloat1 = parseFloat(addPrice1);
    let subTotal = addPriceFloat + addPriceFloat1;
    document.getElementById("subTotal").innerText = subTotal;
    


let tax = document.getElementById("tax").innerText;
let taxFloat = parseFloat(tax);
let subTotalFloat = parseFloat(subTotal);
let finalTotal = taxFloat + subTotalFloat;
document.getElementById("total").innerText = finalTotal;
console.log(subTotal);
console.log(finalTotal);