Template.register.events({
    'click #btnregister': function(event) {
        var username = $('#email').val();
        var password = $('#password').val();

        Accounts.createUser({
            username: username,
            password: password
        }, function(err) {
            if (err)
                console.log(err);
            else
                console.log('success!');
        });




    }
});
