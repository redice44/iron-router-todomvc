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
  addTask: function(todo) {
    Tasks.insert({
      text: todo,
      createdAt: new Date(),
      completed: false
    });
    console.log('Inserting Task: ' + todo);
  }
});
