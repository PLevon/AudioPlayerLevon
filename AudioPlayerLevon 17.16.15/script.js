let  data = {
    title : ["Sun_Goes_Down",
            "Smoke",
            "Summer-walk"],
    song : ["Music/Marenberg_Kollektiv_Sun_Goes_Down.mp3",
            "Music/smoke-143172.mp3",
            "Music/summer-walk-152722.mp3"],
    poster : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdNxNIowwLu4Vt1b504aMddPTjzOpQni8neX0l-mM1w&s", 
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


song.addEventListener("timeupdate", function(){
    // console.log(song.currentTime);
    // console.log(song.duration);

    let fill = document.getElementsByClassName("fill")
    let position  = song.currentTime / song.duration

    fill[0].style.marginLeft = position * 100 + "%"

    convertTime(song.currentTime)

    if(song.ended){
        next()
    }

})


function convertTime(seconds){
    currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime[0].textContent = min + ":" + sec


    totalTime(Math.round(song.duration))

}


function totalTime(seconds){
    let min = Math.round(seconds / 60)
    let sec = Math.round(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime[0].textContent += " / " + min + ":" + sec


}

function next(){
    currentSong++

    if(currentSong >= data.song.length){
        currentSong = 0
    } 

    playSong()
    play.src = "images/play-button-arrowhead.png"
}

function prev(){
    currentSong--

    if(currentSong < 0){
        currentSong = data.song.length - 1
    }

    playSong()
    play.src = "images/play-button-arrowhead.png"
    
    
}

