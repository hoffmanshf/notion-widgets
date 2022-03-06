document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var date = 1649566800;

    // Set up FlipDown
    var flipdown = new FlipDown(date)

        // Start the countdown
        .start()

        // Do something when the countdown ends
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });

    // Toggle theme
    // var interval = setInterval(() => {
    //   let body = document.body;
    //   body.classList.toggle('light-theme');
    //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
    // }, 5000);
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');

    // Show version number
    // var ver = document.getElementById('ver');
    // ver.innerHTML = flipdown.version;
});
