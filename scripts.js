let bill = document.getElementById("amount-space")
let tip = document.getElementById("tip-space")
let texto = document.getElementById("text")

function calcule() {
    let billy = parseFloat(bill.value)
    let tips = parseFloat(tip.value)
    let finale = billy * tips / 100
    let final = billy + finale
    texto.textContent = final
}