import PubSub from "../helpers/pub_sub.js";

export default class InstrumentFamilies {

  constructor(data) {
    this.data = data;
  }

  bindEvents() {
    PubSub.publish('InstrumentFamilies:data-ready', this.#data);

    PubSub.subscribe('SelectView:change', (evt) => {
      const selectedIndex = evt.detail;
      this.publishFamilyDetail(selectedIndex);
    });
  }

  publishFamilyDetail(selectedIndex) {
    const selectedFamily = this.data[selectedIndex];
    PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
  }
};

// const InstrumentFamilies = function (data) {
//   this.data = data;
// };

// InstrumentFamilies.prototype.bindEvents = function () {
//   PubSub.publish('InstrumentFamilies:data-ready', this.data);
//
//   PubSub.subscribe('SelectView:change', (evt) => {
//     const selectedIndex = evt.detail;
//     this.publishFamilyDetail(selectedIndex);
//   });
// };

// InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
//   const selectedFamily = this.data[selectedIndex];
//   PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
// };

// module.exports = InstrumentFamilies;
