alert(); // test
// Element framework
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
    constructor(buttonId) {
        super();
    }
}

const audioSlider = new Input("speedSlider");

