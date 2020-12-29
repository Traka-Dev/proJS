import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlayer.js"

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video,
    plugins: [
        // new AutoPlay()
    ]
});

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();

const button_mute = document.getElementById("mute_btn");
button_mute.onclick = () => player.toggleMute();