const hamburger = document.querySelector('.navbar-toggler');
const stickyTop = document.querySelector('.sticky-top');


hamburger.addEventListener('click', function () {
    stickyTop.style.overflow = 'visible';
});

const offcanvas = document.querySelector('.offcanvas');
offcanvas.addEventListener('hidden.bs.offcanvas', function () {
    stickyTop.style.overflow = 'hidden';
});


simplyCountdown('.simply-countdown', {
    year: 2025, // required
    month: 12, // required
    day: 10, // required
    hours: 8, // Default is 0 [0-23] integer
    words: { //words displayed into the countdown
        days: { singular: 'Hari', plural: 'Hari' },
        hours: { singular: 'Jam', plural: 'Jam' },
        minutes: { singular: 'Menit', plural: 'Menit' },
        seconds: { singular: 'Detik', plural: 'Detik' }
    },
});

//   <!-- fungsi saat tombol lihat undangan di klik -->

const rootElement = document.querySelector(":root");
const audioIcon = document.querySelector('.audio-icon');
const iconAudio = document.querySelector('.audio-icon i');
const song = document.querySelector('#song');
let isPlaying = false;

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(scrollTop, scrollLeft);
    }

    rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
    window.onscroll = function () { }
    rootElement.style.scrollBehavior = 'smooth';
    // localStorage.setItem('opened', 'true');
    playAudio()
}

function playAudio() {
    song.volume = 0.5;
    audioIcon.style.display = 'flex';
    song.play();
    isPlaying = true;
}

audioIcon.onclick = function () {
    if (isPlaying) {
        song.pause();
        iconAudio.classList.remove('bi-disc');
        iconAudio.classList.add('bi-pause-circle');
    } else {
        song.play();
        iconAudio.classList.add('bi-disc');
        iconAudio.classList.remove('bi-pause-circle');
    }

    isPlaying = !isPlaying;
}

// if (!localStorage.getItem('opened')) {
//     
// }
disableScroll();

//   <!-- ketika tombol kirim pada rsvp di tekan  -->

window.addEventListener("load", function () {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Konfirmasi kehadirannya berhasil terkirim!");
            })
    });
});

// saat parameter nama di buat
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('u') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';

const namaContainer = document.querySelector('.home p span');
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');

document.querySelector('#nama').value = nama;