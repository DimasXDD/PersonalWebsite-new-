window.onscroll = function(){scrollFunction()};
//рандомный коммент
function scrollFunction(){
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolledResult = (winScroll / height) * 100;
    document.getElementById('progressbar').style.width = scrolledResult + "%";
    console.log('lol')
}