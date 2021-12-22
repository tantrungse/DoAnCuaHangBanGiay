let large = document.getElementById("large").firstChild;
let thumbs = document.querySelectorAll('.thumbnail');

for(var i=0; i<thumbs.length; i++) {
    thumbs[i].addEventListener('click', function() {
        large.src = document.getElementById(thumbs[i].firstElementChild.id).src;
        
    });
}

for(var i=0; i<thumbs.length; i++) {
    console.log(thumbs[i].src);
}