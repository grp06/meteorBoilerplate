Template.editWorkspace.helpers({
	returnPrepop: function () {
		return Users.find({})
	}
});

Template.editWorkspace.events({
	'click .saveWorkspace': function () {
		console.log("saved")
		var currentUserId = Meteor.userId();
		var neighborhood = $('.neighborhood').val();
		var description = $('.description').val();
		var address = $('.address').val();
		console.log(description)
		console.log(address)
		Meteor.call('updateWorkspace', neighborhood, description, address, function(){

		})
	}
});