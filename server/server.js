

// Accounts.onCreateUser(function(options, user) {
//     if (typeof(user.services.facebook) != "undefined") {
//         user.services.facebook.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
//     }
    
//     return user;
// });


Accounts.onCreateUser(function(options, user) {
  var result;
  if (options.profile) {
    user.profile = options.profile;
    result = Meteor.http.get("https://graph.facebook.com/me", {
      params: {
        access_token: user.services.facebook.accessToken
      }
    });
    if (!result.error && result.data) {
      user.profile.facebook = result.data;
    }
  }
  return user;
});


//Accounts.onCreateUser(function(options,user){
    // var accessToken = user.services.github.accessToken,result,profile;

    // result = Meteor.http.get("https://api.github.com/user", {
    //     params: {
    //         access_token: accessToken
    //     }
    // });

    // if(result.error){
    //     throw result.error
    // }

    // profile = _.pick(result.data,
    //     "login",
    //     "name",
    //     "avatar_url",
    //     "url",
    //     "company",
    //     "blog",
    //     "location",
    //     "email",
    //     "bio",
    //     "html_url");

    // user.profile = profile;

    // return user;

   // var userdata=  {name:"Normal User",email:"normal@example.com",roles:[]},

   //  Roles.addUsersToRoles(id, userData.roles);
//});