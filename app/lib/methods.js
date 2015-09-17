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
    todo = todo.trim();
    if(todo !== '') {
      console.log('Updating Todo Task');
      Tasks.update(id, {$set: {title: todo}});
    } else {
      Meteor.call('removeTask', id);
    }
  },
  setComplete: function(id, complete) {
    console.log('Updating Todo Completed');
    Tasks.update(id, {$set: {completed: complete}});
  },
  addTask: function(todo) {
    todo = todo.trim();
    if(todo !== '') {
      Tasks.insert({
        title: todo,
        createdAt: new Date(),
        completed: false
      });
      console.log('Inserting Task: ' + todo);
    } else { 
      console.log('Fail: Empty Task');
    }
  },
  removeTask: function(id) {
    console.log('Removing Todo');
    Tasks.remove(id);
  }
});
