// var category = Backbone.Model.extend({
//     name: '',
//     spending: '',
//     budget: ''
// })

// // Instantiate 4 expense category Models

// var entertainment = new category({
//     name: 'entertainment',
//     spending: '0',
//     budget: '200'
//   });

// var groceries = new category({
//     name: 'groceries',
//     spending: '0',
//     budget: '400'
//   });

// var restaurants = new category({
//     name: 'restaurants',
//     spending: '0',
//     budget: '350'
//   });

// var transportation = new category({
//     name: 'transportation',
//     spending: '0',
//     budget: '200'
//   });

// // Backbone Collection

// var category = Backbone.Collection.extend({});

// //  Instantiate Collection

// var categories = new category([entertainment, groceries, restaurants, transportation]);

// // Backbone View

// var CategoryDropDownView = Backbone.View.extend({
//   el: 'body',
//   events: {
//     'click #category': 'categoryDropdown',
//   }, 

//   categoryDropdown: function(e){

//     var select = document.getElementById("category");
//     var options = new category([entertainment, groceries, restaurants, transportation]);
//     for(var i = 0; i < options.length; i++) {
//         var opt = options.toJSON()[i].name;
//         var self = document.createElement("option");
//         self.textContent = opt;
//         self.value = opt;
//         select.appendChild(self);
//     }
//   }

// });

// $(document).ready(function() {
//     new CategoryDropDownView();
  
// });

