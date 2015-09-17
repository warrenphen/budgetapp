// Backbone Model

var Excategory = Backbone.Model.extend({
    name: '',
    budget: ''
})

var Transaction = Backbone.Model.extend({
    date: '',
    title: '',
    category: '',
    amount: ''
});


// Instantiate Model

var entertainment = new Excategory({
    name: 'entertainment',
    budget: '200'
  });

var groceries = new Excategory({
    name: 'groceries',
    budget: '400'
  });

var restaurants = new Excategory({
    name: 'restaurants',
    budget: '350'
  });

var transportation = new Excategory({
    name: 'transportation',
    budget: '200'
  });

// Backbone Collection

var Excategory = Backbone.Collection.extend({});
var Transactions = Backbone.Collection.extend({});

// instantiate a Collection

var excategories = new Excategory();
var transactions = new Transactions();

//Backbone View for one Transaction

var TransactionView = Backbone.View.extend({

  model: new Transaction(),
  tagName: 'tr',
  initialize: function() {
    this.template = _.template($('.transactions-list-template').html());
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

// Backbone View for all Transactions

var TransactionsView = Backbone.View.extend({
  model: transactions,
  el: $('.transactions-list'),
  initialize: function() {
    this.model.on('add', this.render, this);

  },
  render: function() {
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function(transaction){
      self.$el.append((new TransactionView({model: transaction})).render().$el);
    });
    return this;
  }
});

// instantiate transactions view
var transactionsView = new TransactionsView();

// On Click New Transaction function

$(document).ready(function() {
  $('.add-transaction').on('click', function() {
    var transaction = new Transaction({
      date: $('.date-input').val(),
      title: $('.title-input').val(),
      category: $('.category-input').val(),
      amount: $('.amount-input').val()
    });
    $('.category-input').val('');
    $('.date-input').val('');
    $('.title-input').val('');
    $('.amount-input').val('');
    console.log(transaction.toJSON());
    transactions.add(transaction);
  });
});