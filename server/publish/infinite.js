Meteor.publish('items', function(limit) {
    return Items.find({}, { limit: limit });
  });     