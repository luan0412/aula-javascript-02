let n1 = new Number(7)
let n2 = new Number(-55)
let n3 = new Number(389)
let n4 = new Number(1000)
let n5 = new Number(3.1459)
let n6 = new Number(-46.267)

console.log(Number(n1))
console.log(Number(n2))
console.log(Number(n3))
console.log(Number(n4))
console.log(Number(n5))
console.log(Number(n6))

console.log("Novos valores")
n1 += n6
console.log(` A soma do primeiro valor com o último${Number(n1)}`)

n1 = 7

n1 *= n3
console.log(`A multiplicação do primeiro valor com o terceiro ${Number(n1)}`)


n4 /= n5

console.log(`A divisão do quarto valor com o quinto ${Number(n4)}`)
