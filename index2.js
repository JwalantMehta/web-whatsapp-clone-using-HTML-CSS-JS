document.addEventListener('DOMContentLoaded', function() {
    var moreOptionsIcon = document.getElementById('more-options-icon');
    var moreOptionsMenu = document.getElementById('more-options-menu');
    var userImg = document.querySelector('.user-img');
    var userProfile = document.querySelector('.user-profile');

    moreOptionsIcon.addEventListener('click', function() {
        moreOptionsMenu.classList.toggle('active');
    });

    // Close the menu if user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!moreOptionsMenu.contains(event.target) && !moreOptionsIcon.contains(event.target)) {
            moreOptionsMenu.classList.remove('active');
        }
    });

    userImg.addEventListener('click', function() {
        userProfile.classList.toggle('active');
    });

    // Close the profile if user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!userProfile.contains(event.target) && !userImg.contains(event.target)) {
            userProfile.classList.remove('active');
        }
    });

    // Edit name
    document.getElementById('edit-name').addEventListener('click', function() {
        var newName = prompt("Enter new name:");
        if (newName !== null) {
            document.getElementById('name').textContent = newName;
        }
    });

    // Edit bio
    document.getElementById('edit-bio').addEventListener('click', function() {
        var newBio = prompt("Enter new bio:");
        if (newBio !== null) {
            document.getElementById('bio').textContent = newBio;
        }
    });
});
