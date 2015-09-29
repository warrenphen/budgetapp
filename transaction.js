// Backbone Model

var Transaction = Backbone.Model.extend({
    date: '',
    title: '',
    category: '',
    amount: ''
});

// Backbone Collection

var TransactionsCollection = Backbone.Collection.extend({

  getTotal: function(){
    var total = 0.0;
    this.each(function(el){
      total += parseFloat( el.get('amount') );
    })

    return total;
  }
});

//Backbone View for one Transaction

var TransactionView = Backbone.View.extend({

  model: new Transaction(),
  tagName: 'tr',
  initialize: function() {
    //this.template = _.template($('.transactions-list-template').html());
    var source = $('.transactions-list-template').html();
    this.template = Handlebars.compile(source);
  },
  render: function() {
    var tran = this.model.toJSON();
    tran.date = new Date();

    var data = {
      tran: tran, 
      categories: [{text: 'category 1'}, {text: 'category 2'}]
    }

    this.$el.html(this.template(data));
    return this;
  }
});

// Backbone View for all Transactions

var TransactionsView = Backbone.View.extend({
  el: '.transactions-list',
  initialize: function() {
    this.collection = new TransactionsCollection();
    this.collection.on('add', this.render, this);
  },
  render: function() {
    var self = this;
    this.$el.html('');
    _.each(this.collection.toArray(), function(transaction){
      self.$el.prepend((new TransactionView({model: transaction})).render().$el);
    });
    return this;
  }
});

// instantiate transactions view
var transactionsView = new TransactionsView();


var TransactionsMainView = Backbone.View.extend({
  el: 'body',
  events: {
    'click .add-transaction': 'addTransaction'
  }, 
  initialize: function(){
    this.listView = new TransactionsView();
  },

  addTransaction: function(e){
    var transaction = new Transaction({
      date: $('.date-input').val(),
      title: $('.title-input').val(),
      category: $('.category-input').val(),
      amount: $('.amount-input').val()
    });
    
    var totalSpending = 0;
    transJSON = transaction.toJSON();
    totalSpending = totalSpending + parseFloat(transJSON.amount);
    console.log("You've spent $" + totalSpending.toFixed(2));
  
    this.listView.collection.add(transaction);
    this.refresh();
    return false;
  }, 

  refresh: function(){
    var total  = this.listView.collection.getTotal();
    console.log('total=%s', total);
  }
  
});

// On Click New Transaction function

$(document).ready(function() {
    new TransactionsMainView();
});