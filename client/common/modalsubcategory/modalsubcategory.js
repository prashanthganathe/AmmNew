Template.modalsubcategory.helpers({
    getproflist: function() {
        var proflist = [];

        proflist.push({
            name: 'Fixing'

        });

        proflist.push({
            name: 'Solar'

        });

        proflist.push({
            name: 'Changing'

        });

        proflist.push({
            name: 'Teacher Training'

        });

        proflist.push({
            name: 'IT and Software'

        });



        return proflist;
    }
});

Template.modalsubcategory.events({
    "click .prof": function(e) {
        var prof = e.target.text;
        Session.set('prof', prof);
        $('#modal-dialog').modal('hide');
    },
    "click .subprof": function(e) {
        var prof = e.target.text;
        Session.set('prof', prof);

        $('#modal-dialog').modal('hide');

    },
});
