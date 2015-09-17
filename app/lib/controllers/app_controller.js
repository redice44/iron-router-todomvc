AppController = RouteController.extend({
  layoutTemplate: 'AppLayout',
  // A place to put your subscriptions
  // this.subscribe('items');
  // // add the subscription to the waitlist
  // this.subscribe('item', this.params._id).wait();
  
  subscriptions: function() {
  },
  
  // Subscriptions or other things we want to "wait" on. This also
  // automatically uses the loading hook. That's the only difference between
  // this option and the subscriptions option above.
  // return Meteor.subscribe('post', this.params._id);
  
  waitOn: function () {
  },
  
  // A data function that can be used to automatically set the data context for
  // our layout. This function can also be used by hooks and plugins. For
  // example, the "dataNotFound" plugin calls this function to see if it
  // returns a null value, and if so, renders the not found template.
  // return Posts.findOne({_id: this.params._id});
  
  data: function () {
  },
  
  // You can provide any of the hook options
  
  onRun: function () {
    this.next();
  },
  onRerun: function () {
    this.next();
  },
  onBeforeAction: function () {
    this.next();
  },
  
  // The same thing as providing a function as the second parameter. You can
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function
  // is optional. By default a route will render its template, layout and
  // regions automatically.
  // Example:
  //  action: 'myActionFunction'
  
  action: function () {    
    var filter = this.data();

    this.render('Header', {to: 'header'});
    this.render('Main', {to: 'main'});
    this.render('Footer', {to: 'footer', data: filter});
    this.render('Info', {to: 'info'});
  },
  onAfterAction: function () {
  },
  onStop: function () {
  }
});

AllController = AppController.extend({
  subscriptions: function() {
    console.log('All Subscriptions');
    this.subscribe('tasks');
  },
  data: function() {
    return {filter: 'all'};
  }
});

ActiveController = AppController.extend({
  subscriptions: function() {
    console.log('Active Subscriptions');
    this.subscribe('tasks', {completed: false});
  },
  data: function() {
    return {filter: 'active'};
  }
});

CompletedController = AppController.extend({
  subscriptions: function() {
    console.log('Completed Subscriptions');
    this.subscribe('tasks', {completed: true});
  },
  data: function() {
    return {filter: 'completed'};
  }
});