const hour = document.getElementById("hr")
const work = document.getElementById("whr")
const tax = document.getElementById("tax")
const rent = document.getElementById("rent")
const bills = document.getElementById("bills")
const food = document.getElementById("food")
const save = document.getElementById("save")

function calculateWeek() {
    let hr = hour.value;
    let wk = work.value;
    let tx = tax.value;
    let rt = Number(rent.value)
    let bl = Number(bills.value)
    let fd = Number(food.value)
    let en = ((hr*wk)-((hr*wk*tx)/100));
    let sp = rt + bl+ fd;
    let sv = save.value;
    let sum = (en-sp);
    let svs = ((sum*sv)/100).toFixed(2);
    let svm = (sum-svs).toFixed(2);
    document.getElementById("earned").innerHTML = (en);
    document.getElementById("spent").innerHTML = (sp);
    document.getElementById("sum").innerHTML = (sum);
    document.getElementById("amountsave").innerHTML = (svs);
    document.getElementById("leftover").innerHTML = (svm);
    window.localStorage.setItem("savings",svs);
    window.localStorage.setItem("spending",svm);
}