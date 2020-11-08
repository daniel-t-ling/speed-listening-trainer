// JavaScript
let play = false; // prevents autoincrease from increasing before playing audio

// HTML Element framework
class TextElement {
    constructor(elementId) {
        this._elementId = elementId;
    }

    get element() { // short hand method of grabing JS object's HTML element
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
        return `Audio/${document.getElementById(this._audioListId).value}.mp3`;
    }

    static play(button) {
        button.audio.src = button.selectedAudio;
        button.audio.play();
        play = true;
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
        audioButton.audio.playbackRate = audioPlayback.element.value; // sets speed to slider value
        audioPlayback.label.innerHTML = `Playback Speed: ${audioButton.audio.playbackRate}`; // shows speed on label
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
        /*this.element.innerHTML = "Manually Increase Speed";
        this.playback.element.style.display = "none"; // hide slider
        const automatic = setInterval(() => {
            if (play) {
                this.playback.audioButton.audio.playbackRate = (this.playback.audioButton.audio.playbackRate + 0.1).toFixed(1); // prevent repeating decimals
                this.playback.label.innerHTML = `Playback Speed: ${this.playback.audioButton.audio.playbackRate}`; // shows speed on label
            }
        }, 120000);

        this.element.addEventListener("click", () => clearInterval(automatic)); // stops increasing on another click*/
        this.element.innerHTML = "Manually Increase Speed";
        this.playback.element.style.display = "none";
        let timeInterval = 1;
        let i = 1;
        const refreshId = setInterval(() => {
            if(play) {
                if (!(i % timeInterval)) {
                    timeInterval *= 2;
                    this.playback.audioButton.audio.playbackRate = (this.playback.audioButton.audio.playbackRate + 0.1).toFixed(1); // prevent repeating decimals
                    this.playback.label.innerHTML = `Playback Speed: ${this.playback.audioButton.audio.playbackRate}`;
                }
                i++;
            }
        }, 1000);

        this.element.addEventListener("click", () => clearInterval(refreshId));
    }

    manualIncrease() {
        this.element.innerHTML = "Automatically Change Speed";
        this.playback.element.style.display = "block";
    }

    changeMethod() { // switches between autoIncrease and manualIncrease
        if (this.playback.element.style.display === "block") {
            this.autoIncrease();
        } else {
            this.manualIncrease();
        }
    }
}

// Hannibal
const playHannibal = new AudioButton("playHannibal", "hannibalList");
const hannibalPlayback = new InputElement("hannibalPlayback", "hannibalPlaybackLabel", playHannibal);
const hannibalSwitch = new SwitchButton("hannibalSwitch", hannibalPlayback);


// Holmes
const playHolmes = new AudioButton("playHolmes", "holmesList");
const holmesPlayback = new InputElement("holmesPlayback", "holmesPlaybackLabel", playHolmes);
const holmesSwitch = new SwitchButton("holmesSwitch", holmesPlayback);

/*autoIncrease() {
    this.element.innerHTML = "Manually Increase Speed";
    this.playback.element.style.display = "none";
    let timeInterval = 3;
    var i=1;
    var refreshId = setInterval(() => {
        if(play) {
            if (!(i % timeInterval)) {
                this.playback.audioButton.audio.playbackRate = (this.playback.audioButton.audio.playbackRate + 0.1).toFixed(1); // prevent repeating decimals
                this.playback.label.innerHTML = `Playback Speed: ${this.playback.audioButton.audio.playbackRate}`;
            }
        }
        i++;
    }, 1000);

    this.element.addEventListener("click", () => clearInterval(refreshId));
    this.element.addEventListener("click", () => clearInterval(intervalchange));
}*/