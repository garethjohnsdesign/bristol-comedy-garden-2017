$(document).foundation();

$('.index__gallery').flickity({
  // options
  contain: true,
  setGallerySize: false,
  wrapAround: true,
  autoPlay: true,
  arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});

$('#gallery').lightGallery({
    selector: '.about__images',
    download: false
});



/*
var carousel = document.querySelector('.index__gallery');
var flkty = new Flickity( carousel, {
  initialIndex: Math.floor( Math.random() * carousel.children.length ),
  contain: true,
  setGallerySize: false,
  wrapAround: true,
  autoPlay: true,
  arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});
*/