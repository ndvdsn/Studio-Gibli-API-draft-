const GibletDetailView = function () {

}

GibletDetailView.prototype.createGibletDetail = function (giblet) {
  const gibletDetail = document.createElement('div');
  gibletDetail.classList.add('giblet-detail');

  const title = document.createElement('h3');
  title.textContent = this.id;
  gibletDetail.appendChild(title);




}

GibletDetailView.prototype.createDetailItemList = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
}

module.exports = GibletDetailView;
