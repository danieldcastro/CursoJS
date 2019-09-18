function carregar() {
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(155,183,161)'
    } else if (hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(190,94,5)'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = 'rgb(58,74,107)'
    }
}


