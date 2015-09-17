/*****************************************************************************/
/* Main: Event Handlers */
/*****************************************************************************/
Template.Main.events({
  'click .toggle-all': function(event) {
    // If all tasks are complete, set all incomplete
    // Otherwise find the incomplete and set complete
    if(!Tasks.find({completed: false}).count()) {
      Tasks.find({}).forEach(function(task) {
        Meteor.call('setComplete', task._id, false);
      });
    } else {
      Tasks.find({completed: false}).forEach(function(task) {
        Meteor.call('setComplete', task._id, true);
      });
    }
  }
});

/*****************************************************************************/
/* Main: Helpers */
/*****************************************************************************/
Template.Main.helpers({
  tasks: function() {
    return Tasks.find({});
  }
});

/*****************************************************************************/
/* Main: Lifecycle Hooks */
/*****************************************************************************/
Template.Main.onCreated(function () {
});

Template.Main.onRendered(function () {
});

Template.Main.onDestroyed(function () {
});
