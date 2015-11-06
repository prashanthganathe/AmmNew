var ITEMS_INCREMENT = 20;
Session.setDefault('itemsLimit', ITEMS_INCREMENT);
Deps.autorun(function() {
    Meteor.subscribe('items', Session.get('itemsLimit'));
});

Template.displayqueries.helpers({

	 queries : function() {
            return Items.find();
        },
        moreResults : function() {          
            return !(Items.find().count() < Session.get("itemsLimit"));
        }
});



Template.displayqueries.onRendered(function(){


	 // $('#feed').slimScroll({
  //       height: '250px',
  //       railVisible: true,
  //   alwaysVisible: true
  //   });

    function showMoreVisible() {
        var threshold, target = $("#showMoreResults");
        if (!target.length) return;

        //threshold = $(window).scrollTop() + $(window).height() - target.height();
        threshold = $('#feed').scrollTop() + $('#feed').height() - target.height();

        if (target.offset().top < threshold) {
            if (!target.data("visible")) {
                // console.log("target became visible (inside viewable area)");
                target.data("visible", true);
                Session.set("itemsLimit",
                    Session.get("itemsLimit") + ITEMS_INCREMENT);
            }
        } else {
            if (target.data("visible")) {
                // console.log("target became invisible (below viewable arae)");
                target.data("visible", false);
            }
        }
    }

    // run the above func every time the user scrolls
   // $('.wrapper').scroll(showMoreVisible);
    $('#feed').scroll(showMoreVisible);
   //  $(window).scroll(showMoreVisible);
});