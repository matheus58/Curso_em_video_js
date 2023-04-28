function contar(){

    var r = window.document.getElementById('res')
    var n1 = window.document.querySelector('input#numero')
    var fim = window.document.querySelector('input#fim')
    var pulo = window.document.querySelector('input#pulo')
    var N1 = Number(n1.value)
    var Fim = Number(fim.value)
    var Pulo = Number(pulo.value)

    /*
     *if(n1.value.length == 0 || fim.value.length == 0 || pulo.value.length == 0){
     *      window.alert('[ERRO]')
     * } else{
     *      alert('tudo ok')
     *}
     */

    if(n1.value == ''|| fim.value == ''|| pulo.value == ''){
        r.innerHTML = 'voce nao digitou um parametro para contagem '
        r.innerHTML +='digite novamente '
    }else if(Pulo == 0){
        // pulo for igual a 0
        window.alert('pulo invalido Considerando pulo = 1')
        Pulo = 1

        for (t = N1 ; t <= Fim ; t++){
            r.innerHTML += `${t} \u{1F449}`
        }
    }else if (N1>fim){
        // contagem cresente
        for (t = N1 ; t<=Fim ; t +=Pulo ){
            r.innerHTML += `${t} \u{1F449}`
        }

    }else{
            //contagem decrecente
            for(t=N1 ; t >=Fim ; t -= Pulo){
                r.innerHTML +=`${t}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`
}
