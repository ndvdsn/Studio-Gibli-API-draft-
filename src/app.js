const Giblets = require('./models/giblets.js');
const GibletListView = require('./views/giblet_list_view.js');

document.addEventListener('DOMContentLoaded', () => {

// const ListContainer = document.querySelector('#film-list');
const gibletListView = new GibletListView();
gibletListView.bindEvents();




  const giblets = new Giblets;
  // giblets.bindEvents();
  giblets.getData();

})
