function memGen(){
    function randomWord(){
        let word = ["блять", "ахуеть", "пиздец", "гавно", "ахахахахахаха", "крол", "сосеш", "лох", "негрыыы", "томс шелби", "аукыврфвфры", "АХАХАХАХ", "АУВАВ", "ОБЕД", "уютненько", "ПОШЁЛ НАХУЙ", "ИДИ НАХУЙ", "Чё", "Беброчка", "Димас", "Уебатор", "Влад", "Антихрист", "окно"];
        word = word[Math.floor(Math.random()*word.length)]
        return word;
    }

    function randomImg(){
        let randomImgNumber = Math.ceil(Math.random()*10)
        let randomImgAdress = "src/memGenRandomImgs/"+randomImgNumber+".jpg"
        return randomImgAdress;
    }

    let upperText = document.getElementById("upperText");
    let bottomText = document.getElementById("bottomText");
    let MemeImg = document.getElementById("MemeImg");

    upperText.innerHTML = randomWord();
    bottomText.innerHTML = randomWord();
    MemeImg.src = randomImg();
    console.log(MemeImg.src)
}
