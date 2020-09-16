$(document).ready(function(){
    
    $('.carousel__slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev main__slick-prev"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="45" height="45" rx="7.5" stroke="url(#paint0_linear)" stroke-width="5"/><rect x="2.5" y="2.5" width="45" height="45" rx="7.5" stroke="white" stroke-opacity="0.3" stroke-width="5"/><path d="M27 19L21 25.25L27 31.5" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear" x1="5.16807" y1="25.1681" x2="45" y2="25.1681" gradientUnits="userSpaceOnUse"><stop stop-color="#EB4778"/><stop offset="1" stop-color="#335ECC"/></linearGradient></defs></svg></button>',
        nextArrow: '<button type="button" class="slick-next main__slick-next"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="45" height="45" rx="7.5" stroke="url(#paint0_linear)" stroke-width="5"/><rect x="2.5" y="2.5" width="45" height="45" rx="7.5" stroke="white" stroke-opacity="0.3" stroke-width="5"/><path d="M23 32L29 25.75L23 19.5" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear" x1="5.16807" y1="25.1681" x2="45" y2="25.1681" gradientUnits="userSpaceOnUse"><stop stop-color="#EB4778"/><stop offset="1" stop-color="#335ECC"/></linearGradient></defs></svg></button>',
        responsive: [
            {
              breakpoint: 960,
              settings: {
                variableWidth: false,
                centerMode: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                variableWidth: false,
                centerMode: false,
              }
            }
          ]
    });
    
    $(".to_form").click(function() {
      $('html, body').animate({
          scrollTop: $("#form-box").offset().top 
      }, 1000);
    });

    $(".to_plan").click(function() {
      $('html, body').animate({
          scrollTop: $("#plan").offset().top 
      }, 1000);
    });
    
});

function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video__button');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1&mute=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();