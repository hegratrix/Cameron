// let giphyArr = ["Mom", "Dad", "Taylor", "Abbie", "Lexy", "Grandma Rini", "Grand- parents", "Matt", "Sarah", "Rachael", "Grayson", "Sasha", "Jordan", "Friends"]
let btnColor = ["#ff6600", "#00cccf", "#fed700"]
let extraVideos = [
    {"name": "Lexy Poetry",
        "source": "https://www.youtube.com/embed/LttDyBNIZJM"},
    {"name": "Abbie Flute 1 ",
        "source": "https://www.youtube.com/embed/LzYk0UHQXYM"},
    {"name": "Abbie Flute 2",
        "source": "https://www.youtube.com/embed/oeEL8uKf198"},
    {"name": "Abbie Flute 3",
        "source": "https://www.youtube.com/embed/AiPKrdSVuAE"},
    {"name": "Abbie Sax 1",
        "source": "https://www.youtube.com/embed/O2LiNJXavE8"},
    {"name": "Abbie Sax 2",
        "source": "https://www.youtube.com/embed/A5vu-BDM-8Y"},
    {"name": "Abbie Sax 3",
        "source": "https://www.youtube.com/embed/bno9LeE-buM"}
    ]       

// makes buttons when page is loaded
$(document).ready(function (){
    // makeButtons()
    makeExtraButtons()
})

// makes buttons
function makeButtons (){
    $('#greeting-buttons').empty()
    for (let i = 0; i < giphyArr.length; i++) {
        let title = giphyArr[i]
        let color = btnColor[Math.floor(Math.random() * btnColor.length)]
        $('#greeting-buttons').append (`
            <button id ="btn${title}" class ="greeting-button" style ="background-color: ${color}" onclick="getPictures('${title}')">${title}</button>
        `)
    }
}

function getPictures (name){
    $('#greeting-gifs').empty()
    let frame = [Math.floor(Math.random() * 8) + 1]
        $('#greeting-gifs').append (`
            <div class="gif-div" style="border-image: url(./images/frame${frame}.png) 240 round;">
                <div id ="pic-div">
                <video id="myVideo" width="380" height="300" autoplay>
                    <source src="./videos/${name}.mp4" type="video/mp4">
                </video>
                </div>                    
            </div>
        `)
    window.scrollTo(0,0)
}

function makeExtraButtons (){
    $('#extra-buttons').empty()
    for (let i = 0; i < extraVideos.length; i++) {
        let title = extraVideos[i].name
        let color = btnColor[Math.floor(Math.random() * btnColor.length)]
        $('#extra-buttons').append (`
            <button id ="btn${title}" class ="greeting-button" style ="background-color: ${color}" onclick="getVideos('${title}')">${title}</button>
        `)
    }
}

function getVideos (videoName){
    console.log(extraVideos)
    $('#greeting-gifs').empty()
    let frame = [Math.floor(Math.random() * 8) + 1]
    for (let i= 0; i < extraVideos.length; i++) {
        if (extraVideos[i].name === videoName) {
            $('#greeting-gifs').append (`
                <div class="gif-div2" style="border-image: url(./images/frame${frame}.png) 240 round;">
                    <iframe width="560" height="315" src="${extraVideos[i].source}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </div>
            `)
        }
    }
    window.scrollTo(0,0)
}
