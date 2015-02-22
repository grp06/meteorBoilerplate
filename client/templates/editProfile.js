Template.editProfile.helpers({
	returnPrepop: function () {
		return Users.find({})
	}
});

Template.editProfile.events({
	'click .saveProfile': function () {
		console.log("saved")
		var currentUserId = Meteor.userId();
		var neighborhood = $('.neighborhood').val();
		var interests = $('.interests').val();
		var whyImHere = $('.whyImHere').val();
		console.log(interests)
		console.log(whyImHere)
		Meteor.call('updateProfile', neighborhood, interests, whyImHere, function(){

		})
	}
});