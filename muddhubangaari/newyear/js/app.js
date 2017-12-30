jQuery(document).ready(function() {

  (function start() {
    var passcode = prompt("Please enter the passcode", "");

    if (passcode != null) {
        /*
          Not a top notch security method but it's good enough
        */
        if(passcode === "selenophile") {
            jQuery("#message").show();
            jQuery('.sky').fireworks({
              sound: true,
              opacity: 0.9,
              width: '100%',
              height: '100%'
            });
            jQuery('#message')
          	.typist({
          		speed: 12,
          		text: 'A very happy and a prosperous new year 2018, Shalini.\n'
          	})
          	.typistAdd('You are so special, beautiful and the most loveliest person I\'ve ever known. \n')
            .typistAdd('I love you and I always wish the best for you :) \n')
            .typistAdd('Have a good one, baby :-* \n');
        } else {
          alert("wrong passcode");
          start();
        }
    }
  })();

});
