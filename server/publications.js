Accounts.onCreateUser(function(options, user) {
    if (!options.profile) {
        options.profile = {}
    }
    var joinDate = moment().format('MMMM Do, YYYY');
    
    options.profile.interests = null;
    options.profile.whyImHere = null;
    options.profile.neighborhood = null;
    options.profile.joinDate = joinDate;
    options.profile.address = null;
    options.profile.numberOfPreviousMeetups = 0;
    options.profile.largePicture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    options.profile.normalPicture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=normal";
    options.profile.smallPicture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=small";

//id: 704586496327203
//secret: 01894c0c52292f86d063e06bf2d0dc46



    if (options.profile)
        user.profile = options.profile;
    return user;
});