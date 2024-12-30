function toogleMode(){

    const html = document.documentElement

    //  if(html.classList.contains('light')) {
    //      html.classList.remove('light')
    //  } else {
    //      html.classList.add('light')
    //  }

    html.classList.toggle('light')
    // Pegar imagem
    const img = document.querySelector("#profile img")

    //SUBSTITUINDO IMAGENS
    if(html.classList('light')){
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }

    /*const html = document.documentElement
    html.classList.toogle('light')

    //Pegar a tag img
    const img = document.querySelector("#profile img")

    //Substituir a imagem
    if(html.classList('light')){
        //Se tiver light mode, adicionaa imagem light
        img.setAttribute('src', './assets/avatar-light.png')
    }else{
        //Se tiver sem light mode
        img.setAttribute('src', './assets/avatar.png')
    }*/
}