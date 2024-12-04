
//slider
let currentIndex = 0;
const totalItems = 11;
const visibleItems = 5;
const slider = document.querySelector('.artist-slider'); 

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex > totalItems - visibleItems) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalItems - visibleItems;
    }
    updateSliderPosition();
}

function updateSliderPosition() {
    const offset = -(currentIndex * (100 / visibleItems));
    slider.style.transform = `translateX(${offset}%)`;
}

updateSliderPosition();

//copy home link
document.getElementById('shareButton').addEventListener('click', function () {
    const linkToCopy = 'https://yourwebsite.com/page';
    navigator.clipboard.writeText(linkToCopy).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
//sidemenu
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const header = document.querySelector('header');
    const mainPage = document.getElementById('mainPage');
    const footer = document.querySelector('footer');
    const menuButton = document.getElementById('menuButton');

    sideMenu.classList.toggle('open');
    header.classList.toggle('blur');
    mainPage.classList.toggle('blur');
    footer.classList.toggle('blur');
    menuButton.classList.toggle('menu-button-hidden');
}
//back button
function goBack() {
    window.history.back();
}
//copy url
function copyLink() {
    const pageURL = window.location.href;
    navigator.clipboard.writeText(pageURL).then(() => {
        alert('Page URL copied to clipboard: ' + pageURL);
    }).catch(err => {
        console.error('Failed to copy URL:', err);
    });
}
//download
function downloadImage() {
    const imageSrc = document.querySelector('.artwork-image').src;
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.split('/').pop();
    link.click();
}