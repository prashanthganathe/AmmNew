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
    if (typeof(user.services.google) == "undefined"  && typeof(user.services.google) == "undefined") {
        user.profile.picture = 'http://www.sonniss.com/wp-content/uploads/edd/2015/08/17797.png';
        user.profile.email = user.username;
    }



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
    //user.roles = {__global_roles__: []};
    //Roles.addUsersToRoles(user._id, ['User','Admin']);
    return user;
});



