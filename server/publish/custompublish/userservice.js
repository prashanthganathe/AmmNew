// Meteor.publish("userData", function () {
//     return Meteor.users.findOne({_id: this.userId});
       
// });

// Meteor.publish("allUserData", function () {
//   return Meteor.users.find({}, {fields: {'nested.things': 1}});
// })

// Meteor.publish("userData", function () {
//     return Meteor.users.find({_id: this.userId},
//         {fields: {'other': 1, 'things': 1}});
// });

// Meteor.publish("allUserData", function () {
//   return Meteor.users.find({}, {fields: {'nested.things': 1}});
// });


Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'services': 1, 'status': 1}});
  } else {
    this.ready();
  }
});

// client
