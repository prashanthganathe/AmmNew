Meteor.methods({
    createuser: function(username,password,email) {
        Accounts.createUser({
            username: username,
            email: email,
            password: password,
            profile: {
                'picture':''
            }

        });
    },

    createRole:function(rolename)
    {
        var status= Roles.createRole('Manager');
    }

    

});
