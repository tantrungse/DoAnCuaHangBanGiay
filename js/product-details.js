var large = document.querySelector(".main img");

var thumbs = document.querySelectorAll('.thumbnail');

for(var i=0; i<thumbs.length; i++) {
    thumbs[i].addEventListener('click', function(e){
        large.src = this.getElementsByTagName('img')[0].src;
    }, false);
}