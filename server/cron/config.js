if (Meteor.settings.AWS) {
  AWS.config.update({
    accessKeyId: 'AKIAIQU7FQ7VURJVDPJA',//Meteor.settings.AWS.accessKeyId,
    secretAccessKey: 'rjU0R28xxAPSpaCna+2jL47RO23IOOBocTAaG3H'//Meteor.settings.AWS.secretAccessKey
  });
} else {
  console.warn("AWS settings missing");
}