$(document).foundation();

$('.index__gallery').flickity({
  // options
  contain: true,
  setGallerySize: false,
  wrapAround: true,
  autoPlay: true,
  arrowShape: 'M93,44.7v10.6H27.6l29.9,30.2L50,93L7,50L50,7l7.5,7.5L27.6,44.7L93,44.7L93,44.7z'
});

$('#gallery').lightGallery({
    selector: '.about__images',
    download: false
});