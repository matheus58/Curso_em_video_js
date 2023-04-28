let num = [4 , 5 ,6]
num [3] = 10
num.push(7)//adiciona altomaticamente u valor no ultimo valor
num.length//mostra quantas posisoes tem o vetor
//num.sort()// prdena em ordem crecente o vetor

console.log(num)
num.sort()//ordena num
console.log(`na ordem crescente ${num}`)



for(let c=0 ; c<num.length ; c++){
    console.log(`VETOR [${c}] = ${num[c]}`)
}

for(let c in num ){//para cada posisoe em num
    console.log(`num[${num[c]}]`) // vou mostra
}

// buscar valores no vetor
// indexOf(7)
// quando ele nao achar o valor ele vota -1
let pos = num.indexOf(5)

console.log(pos)
