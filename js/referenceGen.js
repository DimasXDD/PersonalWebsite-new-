var textarea = document.getElementById("textAreaRef");
var submitBtn = document.getElementById("submit");

function rand(array){
    var chosenElem = array[Math.floor(Math.random()*array.length)];
    return chosenElem;
}

function randGen(){
    var random = Math.floor(Math.random()*3);
    console.log(random);
    if (random == 0){
        bookGen();
        return;
    }
    else if (random == 1){
        articleGen();
        return; 
    }
    else if (random == 2){
        collectionGen();
        return; 
    }
    else{
        console.log("Чё за хуйня я сломался");
        return;
    }
}

function bookGen(){
    let familiya = ['Смирнов', 'Андреев', 'Лебедев', 'Павлов', 'Кузнецов', 'Егоров', 'Фёдоров', 'Алексеев', 'Новиков', 'Соколов', 'Хохлов', 'Шилов', 'Крюков', 'Самсонов', 'Якушев', 'Авдеев', 'Сафонов', 'Медведев', 'Цветков', 'Фролов'];
    let initials = ['А','Д','В','М','К','С','Р'];
    let izdatelstvo = ['Аврора','Алгоритм','Ломоносовъ','Центрполиграф','Росмэн','Норинт','Карелия'];
    let year = ['2019','2020','2021','2022'];
    let pages = String(450 - Math.floor(Math.random() * 200))

    let reference

    familiya = rand(familiya);
    initials = rand(initials)+'.'+rand(initials);
    izdatelstvo = rand(izdatelstvo);
    year = rand(year);


    reference = String(familiya+" "+ initials+'. *НАЗВАНИЕ КНИГИ ВПИСЫВАЙ СЮДА* /'+" "+initials+'. '+familiya+'.'+' – '+'М.: '+izdatelstvo+", "+year+' – '+pages+' с.');

    textarea.innerHTML = reference;
}

function articleGen(){
    let familiya = ['Смирнов', 'Андреев', 'Лебедев', 'Павлов', 'Кузнецов', 'Егоров', 'Фёдоров', 'Алексеев', 'Новиков', 'Соколов', 'Хохлов', 'Шилов', 'Крюков', 'Самсонов', 'Якушев', 'Авдеев', 'Сафонов', 'Медведев', 'Цветков', 'Фролов'];
    let initials = ['А','Д','В','М','К','С','Р'];
    let izdatelstvo = ['Аврора','Алгоритм','Ломоносовъ','Центрполиграф','Росмэн','Норинт','Карелия'];
    let year = ['2019','2020','2021','2022'];
    let page1 = String(Math.ceil(Math.random() * 20))
    let page2 = String(Math.floor(Math.random() * 40))
    let gazeta = ['Русский вестник','Труд','Правда','Солидарность','Экономика и жизнь'];
    let nomer = ['1','2','3','4','5'];

    let reference;

    familiya = rand(familiya);
    initials = rand(initials)+'.'+rand(initials);
    izdatelstvo = rand(izdatelstvo);
    year = rand(year);
    gazeta = rand(gazeta);
    nomer = rand(nomer);

    reference = String(familiya+" "+initials+'.'+' *ПРИДУМЫВАЙ НАЗВАНИЕ БЛЯТЬ ДЛЯ СТАТЬИ ТУТ НАХУЙ* '+'/ '+initials+'.'+familiya+' // '+gazeta+'. – '+year+' – '+nomer+'. – '+'С. '+page1+"-"+page2);

    textarea.innerHTML = reference;
}

function collectionGen(){
    let sbornik = ['Сборник законов РФ', 'Сборник законов Российской Федерации', 'Российское законодательство. Сборник'];
    let year = ['2019','2020','2021','2022'];
    let nomer = ['1','2','3','4','5'];
    let pages = String(Math.floor(Math.random()*501 + 200));
    let reference;

    sbornik = rand(sbornik);
    year = rand(year);
    nomer = rand(nomer);
    pages = rand(pages);

    reference = String('*ЗДЕСЬ ЗАКОН, НАЗВАНИЕ С КОНСУЛЬТАНТА СКОПИРУЙ* //'+" "+sbornik+" "+'–'+" "+year+". "+'–'+" № "+nomer+". "+'–'+" "+'ст.'+" "+pages+".");
    textarea.innerHTML = reference;
}
