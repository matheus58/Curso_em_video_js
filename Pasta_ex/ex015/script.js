function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var fres = window.document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("!ERRO!")
    }else {
        var idade = ano - Number(fano.value)
       // var fsexo = window.document.querySelector('input[name="radsex"]:checked').value
        var genero = ''
       /* if(fsexo === "m"){
            fres.innerHTML = 'b'
            genero = 'Masculino'
        }else if(fsexo === "f"){
            fres.innerHTML = 'a'
            genero = 'Feminino'
            fres.innerHTML = genero
        }
        */

        var fsexo = window.document.getElementsByName('radsex')
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if(fsexo[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criança.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'hjovem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'hadulto.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }
        }else if(fsexo[1].checked){
            genero = 'Feminino'
             if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'mcriança.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'mjovem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'madulta.png')
            }else{
                img.setAttribute('src', 'midosa.png')
            }

        }
        fres.style.textAlign = 'center'
        fres.innerHTML = `a sua idade e ${idade} e seu sexo e ${genero}`
        fres.appendChild(img)
    }

}
