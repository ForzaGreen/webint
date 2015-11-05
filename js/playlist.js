/**
 * Created by wael on 05/11/15.
 */

var v3 = document.getElementById("video3");
var playlist = [
    "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f6/Create_beat_with_Audacity.ogv/Create_beat_with_Audacity.ogv.480p.webm",
    "https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e4/Pr%C3%A9sentation_Creative_Commons_CC-Kiwi_VF.ogv/Pr%C3%A9sentation_Creative_Commons_CC-Kiwi_VF.ogv.480p.webm",
    "https://upload.wikimedia.org/wikipedia/commons/transcoded/3/34/Cathedral_Cath%C3%A9drale_Strasbourg_-_Messe.ogv/Cathedral_Cath%C3%A9drale_Strasbourg_-_Messe.ogv.480p.webm"
];

var i = 0;
v3.addEventListener("ended", function() {
    if( i < playlist.length ) {
        v3.src = playlist[i];
        v3.play();
        var playlistText = document.getElementById("playlistText");
        playlistText.innerText = "Playing video " + (i+2) + "/4...";
        i++;
    }
}, true);

