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
    return (Tasks.find({completed: false}).count() == 1) ? '' : 's';
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
