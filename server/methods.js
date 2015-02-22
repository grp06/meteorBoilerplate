Meteor.methods({
	updateProfile: function (neighborhood, interests, whyImHere) {
		console.log(this.userId)
		Users.update({_id: this.userId}, {$set:{"profile.neighborhood": neighborhood}}, console.log("inserted"));
		Users.update({_id: this.userId}, {$set:{"profile.interests": interests}}, console.log("inserted"));
		Users.update({_id: this.userId}, {$set:{"profile.whyImHere": whyImHere}}, console.log("inserted"));
	},
	updateWorkspace: function (neighborhood, description, address) {
		console.log(this.userId)
		Users.update({_id: this.userId}, {$set:{"profile.neighborhood": neighborhood}}, console.log("inserted"));
		Users.update({_id: this.userId}, {$set:{"profile.description": description}}, console.log("inserted"));
		Users.update({_id: this.userId}, {$set:{"profile.address": address}}, console.log("inserted"));
	},


});