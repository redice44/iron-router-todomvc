
Meteor.publish('tasks', function(filter) {
  var q = filter || {};
  console.log('Filtering');
  console.log(q);
  return Tasks.find(q);
});