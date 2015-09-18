// Backbone Model

var Transaction = Backbone.Model.extend({
    date: '',
    title: '',
    category: '',
    amount: ''
});

// Backbone Collection

var Transactions = Backbone.Collection.extend({
});

// instantiate a Collection

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
      self.$el.prepend((new TransactionView({model: transaction})).render().$el);
    });
    return this;
  }
});

// instantiate transactions view
var transactionsView = new TransactionsView();

// On Click New Transaction function

$(document).ready(function() {
  var totalSpending = 0;
  $('.add-transaction').on('click', function() {
    var transaction = new Transaction({
      date: $('.date-input').val(),
      title: $('.title-input').val(),
      category: $('.category-input').val(),
      amount: $('.amount-input').val()
    });
    $('.category-input').val('uncategorized');
    $('.date-input').val(new Date());
    $('.title-input').val('Un-named');
    $('.amount-input').val( ((100 * Math.random())+ 1).toFixed(2) );
    
    transJSON = transaction.toJSON();
    totalSpending = totalSpending + parseFloat(transJSON.amount);
    console.log("You've spent $" + totalSpending.toFixed(2));
    transactions.add(transaction);


  });
});