// HTML Element framework
class TextElement {
    constructor(elementId) {
        this._elementId = elementId;
    }

    get element() {
        return document.getElementById(this._elementId);
    }
}

let speed = 1; // default value

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

const audioSlider = new InputE("speedSlider", "speedSliderLabel");
function setSpeed() {
    speed = audioSlider.element.value;
    audioSlider.label.innerHTML = `Playback Speed: ${speed}`;
}

audioSlider.element.addEventListener("input", setSpeed);

class AudioB extends TextElement {
    constructor(elementId, audioSrc) {
        super(elementId);
        this._audio = new Audio()
        this._audio.src = audioSrc;
    }

    get audio() {
        return this.audio;
    }

    play() {
        this.audio.play();
    }
}

const audioHannibal1 = new AudioB("buttonHannibal1", "audio/Hannibal1.mp3");
audioHannibal1.element.addEventListener("click", audioHannibal1.play);
