// Accounts.onCreateUser(function(options, user) {
//     if (typeof(user.services.facebook) != "undefined") {
//         user.services.facebook.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
//     }

//     return user;
// });




Accounts.onCreateUser(function(options, user) {
    var result;

    //console.log(JSON.stringify(user));

    user.profile = options.profile || {};
    //  if (options.profile) {
    //  user.profile = options.profile || {};

    if (typeof(user.services.facebook) != "undefined") {
        result = Meteor.http.get("https://graph.facebook.com/me", {
            params: {
                access_token: user.services.facebook.accessToken
            }
        });
        if (!result.error && result.data) {
            user.profile.facebook = result.data;
            user.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
            user.profile.email = user.services.facebook.email;
        }
    }


    if (typeof(user.services.google) != "undefined") {
        user.profile.picture = user.services.google.picture;
        user.profile.email = user.services.google.email;
    }

      if (typeof(user.services.google) == "undefined"  && typeof(user.services.google) == "undefined") {
        user.profile.picture = '';
        user.profile.email = user.username;
    }



    user.roles = ["User"];
    //Account settings
    //user.profile.active = false; //Account is not active on creation
    //user.profile.trial = true; //Accounts have 1 month trial
    // user.profile.expiration           =   moment().add(1,'M');           //No expiration date on unactivated accounts
    //user.profile.bill = null; //Bill monthly, yearly
    //user.profile.ppId = null; //Paypal Id for associated credit card
    //user.profile.resources = 0; //Number of resources an account has created
    //user.profile.resourceLimit = 2; //Limit for the number of resources an account can have   
    user.profile.phone = null; //Phone is blank when created




    // }



    //user.roles = {__global_roles__: []};
    //Roles.addUsersToRoles(user._id, ['User','Admin']);

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
