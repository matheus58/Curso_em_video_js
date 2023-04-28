let  n = window.document.getElementById('txtn')
let lista = window.document.getElementById('numeros')
let res = window.document.getElementById('res')
let valores = []


function isNumero(num) {
    if(Number(num) >=1 || Number(num)<=100){
        return true
    }else{
        return false
    }
}

function isLista(num ,l){
    if(l.indexOf(Number(num))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(n.value) && !isLista(n.value,valores)){
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `numero ${n.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja encontrado na lista .')
    }
    n.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length==0){
        window.alert('adicione valores antes')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma +=valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
                if (valores[pos]< menor)
                menor = valores[pos]
        }
        media = soma/tot

        res.innerHTML += `<p>o total de numeros adicinados foi de ${tot}</p>`
        res.innerHTML += `<p>O mair valor inflormado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores e ${media}<\p>`
    }
}
