Template.createEvent.rendered = function() {
    $('.dropdown')
        .dropdown({
            // you can use any ui transition
            transition: 'drop'
        });
};


Template.createEvent.events({
	'click .createEventButton': function () {
		var eventDetails = []
		var day = $('.day .selected').text();
		var hour = $('.hour .selected').text();
		var minute = $('.minute .selected').text();
		var ampm = $('.ampm .selected').text();
		var maxGuests = $('.maxGuests .selected').text();
		var duration = $('.duration .selected').text();
		var description = $('.enterDescription').val()
		var createdAt = moment().format('MMM Do, h:mm a');
		var createdBy = Meteor.userId();
		var userCollection = Users.find({_id: createdBy}).fetch();
		var name = userCollection[0].profile.name;
		var picture = userCollection[0].profile.largePicture;
		var neighborhood = userCollection[0].profile.neighborhood;
		console.log(neighborhood)

		/*
		console.log(day)
		console.log(hour)
		console.log(minute)
		console.log(ampm)
		console.log(maxGuests)
		console.log(duration)
		console.log(description)
		console.log(createdAt)
		console.log(createdBy)
		console.log(name)
		console.log(picture)


		*/
		Events.insert({
			createdAt: createdAt,
			createdBy: createdBy,
			name: name,
			day: day,
			hour: hour,
			minute: minute,
			ampm: ampm,
			maxGuests: maxGuests,
			duration: duration,
			description: description,
			picture: picture,
			neighborhood: neighborhood
		}, console.log('inserted'));
		
	}
});