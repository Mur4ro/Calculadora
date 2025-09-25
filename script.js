let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let result = document.getElementById('resultado')

document.getElementById('soma').onclick = function somar(){
    let numero1 = Number(n1.value.trim())
    let numero2 = Number(n2.value.trim())
    let resultado = numero1 + numero2
    result.innerHTML = ('Resultado', resultado)
}
document.getElementById('menos').onclick = function somar(){
    let numero1 = Number(n1.value.trim())
    let numero2 = Number(n2.value.trim())
    let resultado = numero1 - numero2
    result.innerHTML = ('Resultado', resultado)
}
document.getElementById('x').onclick = function somar(){
    let numero1 = Number(n1.value.trim())
    let numero2 = Number(n2.value.trim())
    let resultado = numero1 * numero2
    result.innerHTML = ('Resultado', resultado)
}
document.getElementById('divisão').onclick = function somar(){
    let numero1 = Number(n1.value.trim())
    let numero2 = Number(n2.value.trim())
    let resultado = numero1 / numero2
    result.innerHTML = ('Resultado', resultado)
}