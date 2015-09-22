/*****************************************************************************/
/* AppLayout: Event Handlers */
/*****************************************************************************/
Template.AppLayout.events({
});

/*****************************************************************************/
/* AppLayout: Helpers */
/*****************************************************************************/
Template.AppLayout.helpers({
  emptyList: function() {
    console.log('# of tasks: ' + Tasks.find({}).count());
    return Tasks.find({}).count();
  }
});

/*****************************************************************************/
/* AppLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.AppLayout.onCreated(function () {
});

Template.AppLayout.onRendered(function () {
});

Template.AppLayout.onDestroyed(function () {
});
