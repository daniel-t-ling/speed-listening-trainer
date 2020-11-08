// JavaScript
let play = false;

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
        play = true
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

// Speed Switch Button
class SwitchButton extends TextElement {
    constructor(elementId, playback) {
        super(elementId);
        this._playback = playback;
        this.element.addEventListener("click", () => this.changeMethod());
    }

    get playback() {
        return this._playback;
    }

    autoIncrease() {
        this.element.innerHTML = "Manually Increase Speed";
        this.playback.element.style.display = "none";
        let timeInterval = 1000;
        const automatic = setInterval(() => {
            if (play) {
                timeInterval *= 2;
                this.playback.audioButton.audio.playbackRate = (this.playback.audioButton.audio.playbackRate + 0.1).toFixed(1); // prevent repeating decimals
                this.playback.label.innerHTML = `Playback Speed: ${this.playback.audioButton.audio.playbackRate}`;
            }
        }, timeInterval);

        this.element.addEventListener("click", () => clearInterval(automatic));
    }

    manualIncrease() {
        this.element.innerHTML = "Automatically Change Speed";
        this.playback.element.style.display = "block";
    }

    changeMethod() {
        if (this.playback.element.style.display === "block") {
            this.autoIncrease();
        } else {
            this.manualIncrease();
        }
    }
}

const playHannibal = new AudioButton("playHannibal", "hannibalList");
const hannibalPlayback = new InputElement("hannibalPlayback", "hannibalPlaybackLabel", playHannibal);
const hannibalSwitch = new SwitchButton("hannibalSwitch", hannibalPlayback);
