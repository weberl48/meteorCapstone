Template.tuna.events({
    'click #soundcloud-login': function(event) {
        event.stopPropagation();
        Template._loginButtons.toggleDropdown();
        Meteor.loginWithSoundcloud(function(evt) {
            console.log("Logged in");
        });
    }
});
