let n1 = new Number(10)
let n2 = new Number(3)
let n3 = new Number(9)
let n4 = new Number(99.9)
let n5 = new Number(721)


console.log(Number(n1))
console.log(Number(n2))
console.log(Number(n3))
console.log(Number(n4))
console.log(Number(n5))

if (n1<Number.MAX_VALUE) {
    console.log("O primeiro valor é menor que o máximo")
} else{
    console.log("O primeiro valor é maior que o máximo")
}

if (n2===Number.NaN) {
    console.log("O segundo valor não é um número")
} else {
    console.log("O segundo valor é um número")
}

if (n5<=n3) {
    console.log("O quinto valor é menor ou igual o terceiro")
}else{
    console.log("O quinto valor não é menor ou igual o terceiro")

}