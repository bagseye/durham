let animationVideo;
let observer;
let isPaused = false;

function cacheDOM() {
    animationVideo = document.querySelector('.animation__video video');
}

function startObserver(watchItem) {
    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio != 1 && !animationVideo.paused) {
                watchItem.pause();
                isPaused = true;
            } else if(isPaused) {
                watchItem.play();
                isPaused = false;
            }
        })

    });

    observer.observe(animationVideo);
}

export default function init() {
    cacheDOM();
    if(animationVideo) {
        startObserver(animationVideo);
    }
}