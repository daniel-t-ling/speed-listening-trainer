// HTML Element framework
class TextElement {
    constructor(elementId) {
        this._elementId = elementId;
    }

    get element() {
        return document.getElementById(this._elementId);
    }
}

// Audio Button
class AudioButton extends TextElement {
    constructor(elementId, audioSrc) {
        super(elementId);
        this._audio = new Audio();
        this._audio.src = audioSrc;
        this._audio.playbackRate;
        this.element.addEventListener("click", () => AudioButton.play(hannibal1));
    }

    get audio() {
        return this._audio;
    }

    get playbackRate() {
        return this._audio.playbackRate;
    }

    static play(hannibal) {
        hannibal.audio.play();
        /*let timeInterval = 1000;
        setInterval(() => {
        hannibal1.audio.playbackRate += 0.1;
        hannibal1Playback.element.value += 0.1;
        timeInterval *= 2;
        }, timeInterval);*/
    }
}

// Input Slider
class InputElement extends TextElement {
    constructor(elementId, labelId, audioButton) {
        super(elementId);
        this._labelId = labelId;
        this._audioButton = audioButton;
        this.element.addEventListener("input", () => InputElement.setSpeed(this.audioButton, hannibal1Playback));
    }

    get label() {
        return document.getElementById(this._labelId);
    }

    get audioButton() {
        return this._audioButton;
    }

    static setSpeed(hannibal, hannibalAudioPlayback) {
        hannibal.audio.playbackRate = hannibalAudioPlayback.element.value;
        hannibalAudioPlayback.label.innerHTML = `Playback Speed: ${hannibal.audio.playbackRate}`;
    }
}

const hannibal1 = new AudioButton("hannibal1", "audio/Hannibal1.mp3");
const hannibal1Playback = new InputElement("hannibal1Playback", "hannibal1PlaybackLabel", hannibal1);
