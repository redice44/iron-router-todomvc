/*****************************************************************************/
/* Main: Event Handlers */
/*****************************************************************************/
Template.Main.events({
  'click .toggle-all': function(event) {
    var state = event.currentTarget.checked;
    Tasks.find({}).forEach(function(task) {
      Meteor.call('setComplete', task._id, state);
    });
  }
});

/*****************************************************************************/
/* Main: Helpers */
/*****************************************************************************/
Template.Main.helpers({
  tasks: function() {
    return Tasks.find(this.q, {sort: {createdAt: -1}});
  },
  check: function() {
    // All tasks are complete
    if(!Tasks.find({completed: false}).count()) {
      return 'checked';
    }
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
