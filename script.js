let images = document.querySelectorAll(".gallery-item");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

function openLightbox(img){

    lightbox.style.display = "flex";

    lightboxImg.src = img.src;

    images.forEach((image,index)=>{
        if(image.src === img.src){
            currentIndex = index;
        }
    });

}

function closeLightbox(){
    lightbox.style.display = "none";
}

function changeImage(direction){

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;
}

function filterImages(category){

    images.forEach(image=>{

        if(category === "all"){
            image.style.display = "block";
        }
        else if(image.classList.contains(category)){
            image.style.display = "block";
        }
        else{
            image.style.display = "none";
        }

    });

}