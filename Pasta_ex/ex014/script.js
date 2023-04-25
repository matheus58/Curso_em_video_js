function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `agora são ${hora} horas`

    if(hora >= 0 &&hora < 12){
        img.src = 'fotos/manha.png'
        window.document.body.style.background = '#ffac01'
    }else if (hora >=12 && hora <= 18){
        img.src = 'fotos/tarde.png'
        window.document.body.style.background = '#5f6c80'
    }else {
        img.src = 'fotos/noite.png'
        window.document.body.style.background = '#1d3235'
    }

}
