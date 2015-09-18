// Backbone Model

var Budget = Backbone.Model.extend({
    total: 0,
    limit: ''
});

// var budget = new Budget();

//Backbone View

// var BudgetView = Backbone.View.extend({
//   model: budget,
//   el: $('.budget'),
//   initialize: function() {
//     this.model.on('add', this.render, this);
//   },
//   render: function() {
//     var self = this;
//     this.$el.html('');
//     (this.model.toArray(), function(budget){
//       self.$el.prepend((new BudgetView({model: budget})).render().$el);
//     });
//     return this;
//   }
// });


// On Click New Transaction function

$(document).ready(function() {
  $('.set-budget').on('click', function() {
    var budget = new Budget({
      limit: $('.budget-input').val(),
    });
    $('.budget-input').val('');
 
   console.log(budget); 
  });
});