Meteor.navigateTo = function(path) {
    FlowRouter.go(path)
}


// FlowRouter.notFound = {
//     action: function() {
//         BlazeLayout.render("noHeaderLayout", {
//             content: "not_found"
//         })
//     }
// }

//FlowRouter.route('/login', {
    //     action: function() {
    //         BlazeLayout.render('mainlayout', {
    //             content: 'login'
    //         });
    //     }
    // });

 FlowRouter.route('/', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'landing'
            });
        }
    });

 FlowRouter.route('/ask', {
        action: function() {
            BlazeLayout.render('', {
                content: 'ask'
            });
        }
    });






var staticmainlayoutpages= ['landing','forgotpassword','chatlog', 'fb','tabs' ,'dashboard', 'staticdashboard', 'profiletab' , 'collage' ,'register'];

_.map(staticmainlayoutpages, function(item, index) {
    FlowRouter.route('/' + item, {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: item
            });
        }
    });
});


FlowRouter.route('/infiniteExample', {
    subscriptions: function(params) {  
    },
    action: function(params) {
        BlazeLayout.render('mainlayout', {
                content: 'infiniteExample'
            });
    }
});


  FlowRouter.route('/login', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'login'
            })
        },
        subscriptions: function(params) {
        console.log("loginServicesConfigured()");
        setTimeout(function(){ 
            Accounts.loginServicesConfigured(); },500); 
      }

    });


// FlowRouter.route('/room', {
//   subscriptions: function(params) {
//     this.register('peopleSubsc', Meteor.subscribe('People'));
//     this.register('discussionSubsc', Meteor.subscribe('Discussion'));
//   },
//   action: function(params) {
//     FlowLayout.render('layout', { template: "room" });
//   }
// });