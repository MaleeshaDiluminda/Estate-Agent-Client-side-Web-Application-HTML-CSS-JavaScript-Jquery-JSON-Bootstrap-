const showBtn = document.querySelector('.navbutton');
const topNav = document.querySelector('.navigationTop');

showBtn.addEventListener('click', function() {
    if (topNav.classList.contains('showNav')) {
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }

    $(document).ready(function() {
        $(".slider").slider({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 1000,
            smartSpeed: 1500,
            autoplayHoverPause: true
        });
    });
});


var lightbox = new SimpleLightbox('.gallery a', { /* options */ });