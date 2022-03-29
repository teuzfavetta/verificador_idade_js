    function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}

