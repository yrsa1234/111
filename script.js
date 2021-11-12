const bg_images = [
    "./res/images/header_bg_image_1.png",
    "./res/images/header_bg_image_2.png",
    "./res/images/header_bg_image_3.png",
    "./res/images/header_bg_image_4.png",
    "./res/images/header_bg_image_5.png",
    "./res/images/header_bg_image_6.png",
];

var bg = document.body.getElementsByClassName("header")[0];
var currentIndex = 1;

const delay = 5000;

function OnStart() {

    setInterval(function () {
        bg.style.backgroundImage = "url(" + bg_images[currentIndex] + ")";
        currentIndex++;

        if (currentIndex >= bg_images.length) {
            currentIndex = 0;
        }

    }, delay);

}