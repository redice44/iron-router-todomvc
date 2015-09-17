/*****************************************************************************/
/* Header: Event Handlers */
/*****************************************************************************/
Template.Header.events({
  'submit .new-todo-form': function(event) {
    event.preventDefault();
    var task = event.target.children[0].value.trim();
    if(task !== "") {
      console.log('INSERT Task: ' + task);
      Meteor.call('addTask', task);
    } else {
      console.log('Task Empty. No task created.');
    }
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
