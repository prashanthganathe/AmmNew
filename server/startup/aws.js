if (Meteor.settings.AWS) {
    AWS.config.region = 'us-west-2';

    AWS.config.update({
        accessKeyId: 'AKIAIQU7FQ7VURJVDPJA', 
        secretAccessKey: 'rjU0R28xxAPSpaCna+2jL47RO23IOOBocTAaG3H'//'U3IGRxdgRbsqDymPhldJt5xrnopb+T1hVMIlOCtm'


    });
} else
    console.warn("AWS settings missing");