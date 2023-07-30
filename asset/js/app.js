const trailerBox=document.querySelector('.trailer-box');
const castBox=document.getElementById('cast-text');
const movieBox=document.querySelector('.full-movie');
const galleryBox=document.getElementById('gallery-box');
const imageBox=document.querySelector('.image-box');


const trailer=document.getElementById('trailer');
const cast=document.getElementById('cast');
const movie=document.getElementById('movie');
const gallery=document.getElementById('gallery');

const thisImg=document.getElementById('this-img');
const resizedImages = document.querySelectorAll('.res-img');
var currentIndex = 0;

function showTrailer(){
    hideAll();
    trailerBox.style.display="block";
    trailer.style.backgroundColor="black";
    trailer.style.color="white";
}
function showCast(){
    hideAll();
    castBox.style.display="block";
    cast.style.backgroundColor="black";
    cast.style.color="white";
}
function showMovieBox(){
    hideAll();
    movieBox.style.display="block";
    movie.style.backgroundColor="black";
    movie.style.color="white";
}
function showGalleryBox(){
    hideAll();
    galleryBox.style.display="block";
    gallery.style.backgroundColor="black";
    gallery.style.color="white";
}

function hideAll(){
    trailerBox.style.display="none";
    castBox.style.display="none";
    movieBox.style.display="none";
    galleryBox.style.display="none";
    trailer.style.backgroundColor="white";
    trailer.style.color="black";
    cast.style.backgroundColor="white";
    cast.style.color="black";
    movie.style.backgroundColor="white";
    movie.style.color="black";
    gallery.style.backgroundColor="white";
    gallery.style.color="black";
}

function closeImageBox(){
    imageBox.style.display="none";
}

for(var i = 0; i < resizedImages.length; i++) {
    resizedImages[i].addEventListener("click", bindClick(i));
}
function bindClick(i) {
    
    return function() {
        currentIndex = i;
        thisImg.src=resizedImages[i].src;
        imageBox.style.display="flex";
    };
 }

function prev(){
    if(currentIndex>0){
        currentIndex--;
        thisImg.src=resizedImages[currentIndex].src;
    }
    else{
        currentIndex=resizedImages.length-1;
        thisImg.src=resizedImages[currentIndex].src;
    }

}

function next(){
    console.log(currentIndex);
    if(currentIndex<resizedImages.length-1){
        currentIndex++;
        thisImg.src=resizedImages[currentIndex].src;
    }
    else{
        currentIndex=0;
        thisImg.src=resizedImages[currentIndex].src;
    }
}
