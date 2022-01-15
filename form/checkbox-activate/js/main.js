class CheckActivation {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".js-btn");
    this.DOM.checkBoxes = document.querySelectorAll(".js-formCheckTarget");
    this.disableFlag = true;
    console.log(this.DOM.checkBoxes);
    this._addEvent();
  }
  _addEvent() {
    this.DOM.checkBoxes.forEach((checkbox) => {
      checkbox.addEventListener("change", this._check.bind(this));
    });
  }
  _check() {
    let count = 0;
    for (const checkbox of this.DOM.checkBoxes) {
      if (checkbox.checked) {
        count++;
      } else {
        count--;
      }
    }
    if (count === 3) {
      this.disableFlag = false;
      this.DOM.btn.disabled = false;
    } else {
      this.disableFlag = true;
      this.DOM.btn.disabled = true;
    }
  }
}

new CheckActivation();
