const shareButton = document.querySelector(".shaer-icon");
const socialLinks = document.querySelector(".social-links");
const invertedTriangle = document.querySelector(".inverted-triangle");

shareButton.addEventListener('click', () => {
    socialLinks.classList.toggle('active');
    invertedTriangle.classList.toggle('acticeTriangle');

    if(shareButton.classList.contains('share-active')){
        shareButton.classList.remove('share-active', 'share-active-img');
    }else{
        shareButton.classList.add('share-active', 'share-active-img');
    }
});