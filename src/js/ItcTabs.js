import React from "react";

export default class ItcTabs extends React.Component {
  constructor(target, props) {
      //const defaultConfig = {};
      //this._config = Object.assign(defaultConfig, config);
      super(props);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._eventShow = new Event('tab.itc.change');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._events();
      this._init();
  }
  _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute('role', 'tab');
      });
  }
  show(elLinkTarget) {
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      if (elLinkTarget === elLinkActive) {
          return;
      }
      if (elLinkActive) elLinkActive.classList.remove('tabs__btn_active')
      else return null;
      elLinkTarget.classList.add('tabs__btn_active');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
  }
  showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      if (elLinkTarget) this.show(elLinkTarget)
      else return null;
  };
  _events() {
      this._elTabs.addEventListener('click', (e) => {
      const target = e.target.closest('.tabs__btn');
      if (target) {
        e.preventDefault();
        this.show(target);
      }
      });
  }
}