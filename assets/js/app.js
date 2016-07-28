(function() { 
    $(".heart-icon").mouseover(function() {
      document.getElementById("catSurprise").innerHTML="<img src='assets/images/jack.png' />";
      $(".cat-box").show();
    }).mouseout(function() {
      $(".cat-box").hide();
    });

    function generateRandomColor() {
        return Math.floor(Math.random()*16777215).toString(16);
    }

    function changeTheText(color) {
      document.getElementById('appMainText').innerHTML = '#' + color;
    }

    // 32 = spacebar
    // 37 = left arrow
    // 38 = up arrow
    // 39 = right arrow
    // 40 = down arrow
    function changeBackgroundColor() {
      document.onkeydown = function(e) {
        e = e || window.event;
        switch (e.keyCode) {
          case 32:
            document.body.style.backgroundColor = "#039ACC";
            document.getElementById('appMainText').innerHTML = "left or right";
            break;
          case 37:
            var color = generateRandomColor();
            document.body.style.backgroundColor = '#' + color;
            changeTheText(color);
            break;
          case 38:
            document.body.style.backgroundColor = "#039ACC";
            changeTheText("039ACC");
            break;
          case 39:
            var color = generateRandomColor();
            document.body.style.backgroundColor = '#' + color;
            changeTheText(color);
            break;
          case 40:
            document.body.style.backgroundColor = "#039ACC";
            changeTheText("039ACC");
            break;
        }
      };

    }

    changeBackgroundColor();
})();


