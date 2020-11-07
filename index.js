// HTML Element framework
class TextElement {
    constructor(elementId) {
        this._elementId = elementId;
    }

    get element() {
        return document.getElementById(this._elementId);
    }
}

// Input stuffs
const inputs = [];
class InputE extends TextElement {
    constructor(elementId, labelId) {
        super(elementId);
        this._labelId = labelId;
        //this.element.addEventListener("onchange", this.change());
        inputs.push(this); // adds input object to array
    }

    get label() {
        return document.getElementById(this._labelId);
    }
}

// Audio Button
class AudioB extends TextElement {
    constructor(elementId, audioSrc) {
        super(elementId);
        this._audio = new Audio();
        this._audio.src = audioSrc;
        this._audio.playbackRate;
    }

    get audio() {
        return this._audio;
    }

    get playbackRate() {
        return this._audio.playbackRate;
    }
}

const hannibal1 = new AudioB("hannibal1", "audio/Hannibal1.mp3");
function play() {
    hannibal1.audio.play();
    /*let timeInterval = 1000;
    setInterval(() => {
        hannibal1.audio.playbackRate += 0.1;
        hannibal1Playback.element.value += 0.1;
        timeInterval *= 2;
    }, timeInterval);*/
}
const hannibal1Playback = new InputE("hannibal1Playback", "hannibal1PlaybackLabel");
function setSpeed() {
    hannibal1.audio.playbackRate = hannibal1Playback.element.value;
    hannibal1Playback.label.innerHTML = `Playback Speed: ${hannibal1.audio.playbackRate}`;
}

hannibal1Playback.element.addEventListener("input", setSpeed);
hannibal1.element.addEventListener("click", play);
