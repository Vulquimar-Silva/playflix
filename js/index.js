$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

  // Listen for clicks
document.addEventListener('click', function (event) {

    // Check if clicked element is a video thumbnail
    var videoId = event.target.getAttribute('video');
    if (!videoId) return;

    // Create iframe
    var iframe = document.createElement('div');
    iframe.innerHTML = '<p>x</p><div class="video-youtube"><iframe src="https://www.youtube.com/embed/' + videoId + '/?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
    var video = iframe.childNodes[1];

    // Replace the image with the video
    event.target.parentNode.replaceChild(video, event.target);

    // Enter fullscreen mode
    video.requestFullscreen();

}, false);