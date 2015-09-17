/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  'lib/method_name': function () {
    
    if (this.isSimulation) {
    //   // do some client stuff while waiting for
    //   // result from server.
    //   return;
    }
    // server method logic
  },
  setTodo: function(id, todo) {
    console.log('Updating Todo Task');
    Tasks.update(id, {$set: {text: todo}});
  },
  setComplete: function(id, complete) {
    console.log('Updating Todo Completed');
    Tasks.update(id, {$set: {completed: complete}});
  },
  addTask: function(todo) {
    Tasks.insert({
      text: todo,
      createdAt: new Date(),
      completed: false
    });
    console.log('Inserting Task: ' + todo);
  },
  removeTask: function(id) {
    console.log('Removing Todo');
    Tasks.remove(id);
  }
});
