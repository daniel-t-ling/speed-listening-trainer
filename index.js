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
    constructor(elementId, audioListId) {
        super(elementId);
        this._audio = new Audio();
        this._audioListId = audioListId;
        this.element.addEventListener("click", () => AudioButton.play(this));
    }

    get audio() {
        return this._audio;
    }

    get selectedAudio() {
        return `Audio/Hannibal/Hannibal${document.getElementById(this._audioListId).value}.mp3`;
    }

    static play(button) {
        button.audio.src = button.selectedAudio;
        button.audio.play();
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
        this.element.addEventListener("input", () => InputElement.setSpeed(this, this.audioButton));
    }

    get label() {
        return document.getElementById(this._labelId);
    }

    get audioButton() {
        return this._audioButton;
    }

    static setSpeed(audioPlayback, audioButton) {
        audioButton.audio.playbackRate = audioPlayback.element.value;
        audioPlayback.label.innerHTML = `Playback Speed: ${audioButton.audio.playbackRate}`;
    }
}

const playHannibal = new AudioButton("playHannibal", "hannibalList");
const hannibalPlayback = new InputElement("hannibalPlayback", "hannibalPlaybackLabel", playHannibal);
