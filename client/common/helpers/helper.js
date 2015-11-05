

Template.registerHelper("profileImg", function() {
    if (Meteor.user().services.facebook) {
        return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
    }

});


// UI.registerHelper("getImageUser", function (userId) {
//     var user= Meteor.users.findOne(userId);
//     if (user.services)
//     {
//         if (user.services.facebook)
//             return Meteor.user().services.facebook.picture;
//         if (user.services.twitter)
//             return user.services.twitter.profile_image_url;
//         if (user.services.google)
//             return user.services.google.picture;
//     }
//     else
//     {
//         return "images/withOutPhoto.png";
//     }
// });