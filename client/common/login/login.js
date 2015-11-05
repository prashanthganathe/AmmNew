Template.login.onRendered(function (){

    if (Meteor.user()) {
        FlowRouter.go('landing');
    }
});


Template.login.events({
    'click #facebook-login': function(event) {


        // var reqPermission = ['email', 'user_friends', 'user_location', 'user_events', 'user_likes', 'read_friendlists',
        //     'friends_events', 'friends_location', 'friends_about_me',
        //     'user_status', 'friends_status', 'read_friendlists'
        // ];


        //   ['read_friendlists','user_about_me','user_birthday',
        // 'user_education_history', 'user_friends', 'user_likes', 'user_photos',
        // 'user_religion_politics', 'user_work_history'];

        Meteor.loginWithFacebook({requestPermissions: ['user_friends', 'read_friendlists', 'email']
        }, function(err) {
            if (err) {
                console.log(err);
                throw new Meteor.Error("Facebook login failed");
            }
            else
            {
                FlowRouter.redirect('landing');
            }

        });
    },
    'click #google-login': function(event) {
        Meteor.loginWithGoogle({
            requestPermissions: ['email', 'profile']
        }, function(err) {
            if (err) {
                console.log(err);
                throw new Meteor.Error("Facebook login failed");
            }
             else
            {
                FlowRouter.go('landing');
            }

        });
    }
});
