function setBackgroundImage() {
    const body = document.body;
    const hour = new Date().getHours();

    let imageUrl;

    if (hour >= 6 && hour < 11) {
        //Morning
        imageUrl = 'url(1.jpg)';
    } else if (hour >= 11 && hour < 18) {
        // Afternoon
        imageUrl = 'url(2.jpg)';
    } else if (hour >= 18 && hour < 21) {
        // Evening
        imageUrl = 'url(15.jpg)';
    } else {
        // Night
        imageUrl = 'url(12.jpg)';
    }

    body.style.backgroundImage = imageUrl;
}
    window.onload = setBackgroundImage;
// const images = [
//     'url(1.jpg)',
//     'url(2.jpg)',
//     'url(3.jpg)',
//     'url(4.jpg)',
//     'url(5.jpg)',
//     'url(6.jpg)',
//     'url(7.jpg)',
//     'url(8.jpg)',
//     'url(9.jpg)',
//     'url(10.jpg)',
//     'url(11.jpg)',
//     'url(12.jpg)'
// ];

// let currentIndex = 0;

// function changeBackgroundImage() {
//     const body = document.body;
//     body.style.backgroundImage = images[currentIndex];
//     currentIndex = (currentIndex + 1) % images.length;
// }

// window.onload = function() {
//     changeBackgroundImage();
//     setInterval(changeBackgroundImage, 5000);
// };
