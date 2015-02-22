Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'main'});
Router.route('/messages', {name: 'messages'});
Router.route('/notifications', {name: 'notifications'});
Router.route('/profile', {name: 'profile'});
Router.route('/editProfile', {name: 'editProfile'});
Router.route('/myWorkspace', {name: 'myWorkspace'});
Router.route('/editWorkspace', {name: 'editWorkspace'});
Router.route('/createEvent', {name: 'createEvent'});



Router.onBeforeAction(function () {


  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('login');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});

