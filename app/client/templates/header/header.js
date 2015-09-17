/*****************************************************************************/
/* Header: Event Handlers */
/*****************************************************************************/
Template.Header.events({
  'submit .new-todo-form': function(event) {
    event.preventDefault();
    console.log('New Task: ' + event.target.children[0].value);
    Meteor.call('addTask', event.target.children[0].value);
    event.target.children[0].value = "";
  }
});

/*****************************************************************************/
/* Header: Helpers */
/*****************************************************************************/
Template.Header.helpers({
});

/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/
Template.Header.onCreated(function () {
});

Template.Header.onRendered(function () {
});

Template.Header.onDestroyed(function () {
});
