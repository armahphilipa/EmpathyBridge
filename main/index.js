<script src="https://apis.google.com/js/platform.js" async defer></script>
document.addEventListener('DOMContentLoaded', function () {
    // Get references to elements
    const fill = document.querySelector('.fill');
    const inputFile = document.getElementById('inputFile');
    const progressBar = document.querySelector('.progress-bar');

    // Add a change event listener to the file input
    inputFile.addEventListener('change', () => {
        updateProgressBar();
    });

    // Function to update the progress bar based on the selected files
    function updateProgressBar() {
        const files = inputFile.files;
        if (files.length > 0) {
            const progressPercentage = (files.length / 3) * 100; // Assuming there are 3 steps in your form
            fill.style.width = `${progressPercentage}%`;
        }
    }
});


//sign up

function onGoogleSignIn(googleUser) {
    // Handle the Google sign-in success here
    console.log('Google Sign-In successful!');
    console.log('User profile:', googleUser.getBasicProfile());
    // You can perform additional actions or send data to your server here
}
