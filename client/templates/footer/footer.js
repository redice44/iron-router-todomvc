/*****************************************************************************/
/* Footer: Event Handlers */
/*****************************************************************************/
Template.Footer.events({
  'click .clear-completed': function(event) {
    Tasks.find({completed: true}).forEach(function(task) {
      Meteor.call('removeTask', task._id);
    });
  }
});

/*****************************************************************************/
/* Footer: Helpers */
/*****************************************************************************/
Template.Footer.helpers({
  tasksRemaining: function() {
    return Tasks.find({completed: false}).count();
  },
  hasCompleted: function() {
    return Tasks.find({completed: true}).count();
  },
  singular: function() {
    console.log(this);
    return (Tasks.find({completed: false}).count() == 1) ? '' : 's';
  },
  isActive: function(filter) {
    console.log(filter);
    console.log(this.filter);
    return (this.filter == filter) ? 'selected' : '';
  }
});

/*****************************************************************************/
/* Footer: Lifecycle Hooks */
/*****************************************************************************/
Template.Footer.onCreated(function () {
});

Template.Footer.onRendered(function () {
});

Template.Footer.onDestroyed(function () {
});
