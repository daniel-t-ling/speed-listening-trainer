alert(); //test
// HTML Element framework
class TextElement {
    constructor(elementId) {
        this._elementId = elementId;
    }

    get element() {
        return document.getElementById(this._elementId);
    }

    hide() {
        this.element.style.display = none;
    }

    show() {
        this.element.style.display = inline;
    }
}

let speed = 1; // default value

// Input stuffs
const inputs = [];
class InputE extends TextElement{
    constructor(elementId, labelId) {
        super(elementId);
        this._labelId = labelId;
        //this.element.addEventListener("onchange", this.change());
        inputs.push(this); // adds input object to array
    }

    get label() {
        return document.getElementById(this._labelId);
    }

    change() {
        speed = this.element.value;
        this.label.innerHTML = `Playback Speed: ${speed}`;
    }
}

function change() {

}

const audioSlider = new InputE("speedSlider", "speedSliderLabel");
audioSlider.element.addEventListener("onchange", audioSlider.change());
