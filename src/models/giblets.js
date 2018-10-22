const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Giblets = function () {
  this.gibletsData = []
  this.locations = [];
}

// https://ghibliapi.herokuapp.com/films

Giblets.prototype.getData = function () {
  const url = `https://ghibliapi.herokuapp.com/films`;
  const request = new Request(url);
  request.get().then(data => {
    this.giblets = data;
    PubSub.publish('Giblets:film-data-loaded', this.giblets);
    console.log(this.giblets)
  });
};

module.exports = Giblets;
