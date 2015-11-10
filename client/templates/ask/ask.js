Session.setDefault('prof', 'General');




Template.ask.helpers({
    updatebutton: function(e) {
       return Session.get('prof');
    }

});

Template.ask.events({
    "click .master": function(e) {
        var selCateogry = e.target.text;
        $('#tagitem').text(selCateogry);
    }

});




