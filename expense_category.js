var Excategory = Backbone.Model.extend({
    name: '',
    spending: '',
    budget: ''
})

// Instantiate 4 expense category Models

var entertainment = new Excategory({
    name: 'entertainment',
    spending: '0',
    budget: '200'
  });

var groceries = new Excategory({
    name: 'groceries',
    spending: '0',
    budget: '400'
  });

var restaurants = new Excategory({
    name: 'restaurants',
    spending: '0',
    budget: '350'
  });

var transportation = new Excategory({
    name: 'transportation',
    spending: '0',
    budget: '200'
  });

// Backbone Collection

var Excategory = Backbone.Collection.extend({});

//  Instantiate Collection

var excategories = new Excategory([entertainment, groceries, restaurants, transportation]);

