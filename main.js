'use strict';

const sounds = {
    'A':'boom.wav',
    'S':'clap.wav',
    'D':'hihat.wav',
    'F':'kick.wav',
    'G':'openhat.wav',
    'H':'ride.wav',
    'J':'snare.wav',
    'K':'tink.wav',
    'L':'tom.wav'

};

const createDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.getElementById('container').appendChild(div);
}

const exibir = ( sounds ) => Object.keys(sounds).forEach(createDiv);


exibir(sounds);

const playTheSound = ( letter ) => {
    const audio = new Audio(`./sounds/${sounds[letter ]}`);
    audio.play();
};

const addEffect = ( letter ) => { document.getElementById(letter).classList.add('active') };

const removeEffect = ( letter ) => { 
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend',removeActive);
};

const activeDiv = ( event ) => {
    const letter = event.type == 'click' ? event.target.id : event.key.toUpperCase();
    const permittedLetter = sounds.hasOwnProperty(letter);
    if (permittedLetter) {
        addEffect(letter);
        playTheSound(letter);
        removeEffect(letter);
    }
};

document.getElementById('container')
        .addEventListener('click' , activeDiv );

window.addEventListener('keydown' , activeDiv);