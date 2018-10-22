const PubSub = require('../helpers/pub_sub.js');
const GibletDetailView = require('./giblet_detail_view.js');

const GibletListView = function (container) {
  this.container = container;
};

GibletListView.prototype.bindEvents = function () {
  PubSub.subscribe('Giblets:film-data-loaded', (event) => {
    // this.clearList();
    this.renderGibletDetailViews(event.detail);
    // console.log(event)
    debugger;
  });
};

// GibletListView.prototype.clearList = function () {
//   this.container.innerHTML = '';
// }

GibletListView.prototype.renderGibletDetailViews = function (giblets) {
  console.log(giblets)
  giblets.forEach((giblet) => {
    const gibletItem = this.createGibletListItem(giblet);
    this.container.appendChild(gibletItem);

  });
};

GibletListView.prototype.createGibletListItem = function (giblet) {
  const gibletDetailView = new GibletDetailView();
  const gibletDetail = gibletDetailView.createGibletDetail(giblet);
  return gibletDetail;
}





module.exports = GibletListView;
