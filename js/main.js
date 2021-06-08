window.onload = function () { 
    var avatar = document.querySelector('.avatar'),
        text = document.querySelector('section'),
        social = document.querySelector('.social'),
        center = document.querySelector('.center'),
        made = document.querySelector('footer');

    avatar.className = 'avatar animated fadeInDown';
    text.className = 'animated zoomIn';
    social.className = 'social animated fadeInUp';
    made.className = 'animated fadeInUp';
    center.style.visibility = 'visible';
    made.style.visibility = 'visible';
};
