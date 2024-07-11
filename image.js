const imageSources =['a1.jpg','a2.jpg','a3.jpg','a4.jpg','a5.jpg','a6.jpg','a7.jpg','a8.jpg','a9.jpg','a10.jpg'];
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);
