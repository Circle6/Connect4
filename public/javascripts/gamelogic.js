$( document ).ready(function() {

    var $userNameArea = $('#userNameArea');
    var $userNameForm = $('#userNameForm');
    var $userNameText = $('#userNameText');
    var $victoryArea = $('#victoryArea');
    var $queuingArea = $('#queuingArea');
    var $opponent = $('#opponent');

    $userNameForm.submit(function(e){
      e.preventDefault();

      if ($userNameText.val()) {
        console.log("submitting username: " + $userNameText.val());
        socket.emit('submit user', $userNameText.val());
      }

      socket.on('queued', function(data){
        $userNameArea.hide();
        $queuingArea.show();
        console.log("queuing");
      });

      socket.on('victory', function(data){
        $userNameArea.hide();
        $queuingArea.hide();
        $victoryArea.show();
        $opponent.html("You are now playing against " + data);
        console.log("victory!");
      })
    });
});
