// Meteor.startup(function() {

//     var users = [{
//         name: "Normal User",
//         email: "normal@example.com",
//         roles: ['User']
//     }, {
//         name: "View-Secrets User",
//         email: "view@example.com",
//         roles: ['Secret']
//     }, {
//         name: "Manage-Users User",
//         email: "manage@example.com",
//         roles: ['Manager']
//     }, {
//         name: "Admin User",
//         email: "admin@example.com",
//         roles: ['Admin']
//     }];

//     _.each(users, function(userData) {
//         var id,
//             user;

     
//         id = Accounts.createUser({
//             email: userData.email,
//             password: "apple1",
//             profile: {
//                 name: userData.name
//             }
//         });

      
//         Meteor.users.update({
//             _id: id
//         }, {
//             $set: {
//                 'emails.0.verified': true
//             }
//         });

//         Roles.addUsersToRoles(id, userData.roles);

//     });


// });
