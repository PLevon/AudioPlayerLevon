let  data = {
    title : ["Sun_Goes_Down",
            "Smoke",
            "Summer-walk"],
    song : ["Music/Marenberg_Kollektiv_Sun_Goes_Down.mp3",
            "Music/smoke-143172.mp3",
            "Music/summer-walk-152722.mp3"],
    poster : ["https://img.freepik.com/premium-photo/sun-pink-clouds_872147-32500.jpg", 
             "https://img.freepik.com/premium-photo/pink-smoke-from-smoke-bomb-nature_159701-5312.jpg",
             "https://w0.peakpx.com/wallpaper/271/998/HD-wallpaper-sky-reflections-lakes-grass-colors-nature-beautiful-twilight-clouds-tall.jpg"],
}


let song = new Audio()

window.onload = function(){
    playSong()
}


let currentSong = 0
function playSong(){
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
}



function playOrPause(){
    let play = document.getElementById("play")

    if(song.paused){
        song.play()
        play.src = "images/pause.png"
    }
    else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}
