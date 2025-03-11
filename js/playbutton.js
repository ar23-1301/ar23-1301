

document.getElementById("music-control").addEventListener("click", function() {
    const music = document.getElementById("bg-music");
    const icon = document.getElementById("music-icon");

    if (music.paused) {
        music.play();
        icon.classList.remove("bi-play-fill");
        icon.classList.add("bi-pause-fill");
    } else {
        music.pause();
        icon.classList.remove("bi-pause-fill");
        icon.classList.add("bi-play-fill");
    }
});
