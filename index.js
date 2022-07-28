console.log("<--Welcome to Spotify-->");
// Initiliazing all variables:

let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let audioElement_1= new Audio('02 Kar Har Maidaan Fateh - Sanju.mp3');
let audioElement_2= new Audio('Bint-e-Dil - (Raag.Fm).mp3');
let audioElement_3= new Audio('04 Sultan - Title Song (Sukhvinder Singh) 190Kbps.mp3');
let audioElement_4= new Audio('Lut_Gaye-Jubin_Nautiyal-(JattZone.com).mp3');
let audioElement_5= new Audio('Give Me Some Sunshine - 3 Idiots Aamir Khan, Madhavan, Sharman J Suraj Jagan Shantanu Moit.mp3');
let audioElement_6= new Audio('KABIR_SINGH_mass_Full_BGM_(_without_remake_)(128k).mp3');


let songs=[
    {songlist: "Kar Har Maidaan Fateh - [Sanju]", filePath:"02 Kar Har Maidaan Fateh - Sanju.mp3" },
    {songlist: "Bint-e-Dil - [Padmaavat]", filePath:"Bint-e-Dil - (Raag.Fm).mp3" },
    {songlist: "Sultan - Title Song", filePath:"04 Sultan - Title Song (Sukhvinder Singh) 190Kbps.mp3" },
    {songlist: "Lut Gaye", filePath:"Lut_Gaye-Jubin_Nautiyal-(JattZone.com).mp3" },
    {songlist: "Give Me Some Sunshine - [3 Idiots]", filePath:"Give Me Some Sunshine - 3 Idiots Aamir Khan, Madhavan, Sharman J Suraj Jagan Shantanu Moit.mp3" },
    {songlist: "Kabir Singh BGM", filePath:"KABIR_SINGH_mass_Full_BGM_(_without_remake_)(128k).mp3" },
]

// Handel play/pause click:
firstsong.addEventListener('click', ()=>{
    if (audioElement_1.paused || audioElement_1.currentTime<=0){
        audioElement_1.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        firstsong.classList.remove('fa-play-circle');
        firstsong.classList.add('fa-pause-circle');
    }
    
    else{
        audioElement_1.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        firstsong.classList.remove('fa-pause-circle');
        firstsong.classList.add('fa-play-circle');
    }
})

secondsong.addEventListener('click',()=>{
    if (audioElement_2.paused || audioElement_2.currentTime<=0){
        audioElement_2.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        secondsong.classList.remove('fa-play-circle');
        secondsong.classList.add('fa-pause-circle');
    }
    else{
        audioElement_2.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        secondsong.classList.remove('fa-pause-circle');
        secondsong.classList.add('fa-play-circle');
    }
})

thirdsong.addEventListener('click', ()=>{
    if(audioElement_3.paused || audioElement_3.currentTime<0){
        audioElement_3.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        thirdsong.classList.remove('fa-play-circle');
        thirdsong.classList.add('fa-pause-circle');
    }
    else{
        audioElement_3.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        thirdsong.classList.remove('fa-pause-circle');
        thirdsong.classList.add('fa-play-circle');
    }
})
fourthsong.addEventListener('click', ()=>{
    if(audioElement_4.paused|| audioElement_4.currentTime<=0){
        audioElement_4.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        fourthsong.classList.remove('fa-play-circle')
        fourthsong.classList.add('fa-pause-circle')
    }
    else{
        audioElement_4.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        fourthsong.classList.remove('fa-pause-circle');
        fourthsong.classList.add('fa-play-circle');
    }
})
fifthsong.addEventListener('click', ()=>{
    if(audioElement_5.paused|| audioElement_5.currentTime<=0){
        audioElement_5.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        fifthsong.classList.remove('fa-play-circle')
        fifthsong.classList.add('fa-pause-circle')
    }
    else{
        audioElement_5.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        fifthsong.classList.remove('fa-pause-circle');
        fifthsong.classList.add('fa-play-circle');
    }
})
sixthsong.addEventListener('click', ()=>{
    if(audioElement_6.paused|| audioElement_6.currentTime<=0){
        audioElement_6.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        sixthsong.classList.remove('fa-play-circle')
        sixthsong.classList.add('fa-pause-circle')
    }
    else{
        audioElement_6.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        sixthsong.classList.remove('fa-pause-circle');
        sixthsong.classList.add('fa-play-circle');
    }
})