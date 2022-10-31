var txtInput = document.querySelector("#txt-input");
var head1Btn = document.querySelector("#head1-btn")
var head2Btn = document.querySelector("#head2-btn")
var head3Btn = document.querySelector("#head3-btn")
var outputTxt = document.querySelector("#output-txt")



var head1 = "h1"
var head2 = "h2"
var head3 = "h3"

function changeTextToH1() {
    outputTxt.innerHTML = `<${head1}>${txtInput.value}<${head1}>`
}
head1Btn.addEventListener("click", changeTextToH1)

function changeTextToH2() {
    outputTxt.innerHTML = `<${head2}>${txtInput.value}</${head2}>`
}
head2Btn.addEventListener("click", changeTextToH2)

function changeTextToH3() {
    outputTxt.innerHTML = `<${head3}>${txtInput.value}</${head3}>`
}
head3Btn.addEventListener("click", changeTextToH3)



//innertext
//<p></P> - <${head1}> ${txtinput.value}