// HTML Element framework
class HElement {
    constructor(buttonId) {
        this._buttonId = buttonId;
    }

    get element() {
        document.getElementById(this._buttonId);
    }

    hide() {
        this.element.style.display = none;
    }

    show() {
        this.element.style.display = inline;
    }
}


// Input stuffs
const inputs = [];
class Input extends HElement{
    constructor(buttonId, variable) {
        super();
        this._variable = variable;
        this.element.addEventListener("onchange", this.change());
        inputs.push(this); // adds input object to array
    }

    change() {
        this._variable() = this.element.value;
    }
}

let speed = 50; // default value

const audioSlider = new Input("speedSlider", );

