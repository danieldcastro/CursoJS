function verificar() { 
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'um Homem' 
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'crianca-h.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                //Idoso
                img.style.borderRadius = '50%'
                img.style.width = '250px'
                img.style.height = '250px'
                img.setAttribute('src', 'idoso-h.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'uma Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //Idoso
                img.style.borderRadius = '50%'
                img.style.width = '250px'
                img.style.height = '250px'
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
