$(".heart-icon").mouseover(function() {
  document.getElementById("catSurprise").innerHTML="<img src='assets/images/jack.png' />";
  $(".cat-box").show();
}).mouseout(function() {
  $(".cat-box").hide();
});

function changeBackgroundColor() {
  document.onkeydown = function(e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 37:
        document.getElementById('appBody').style.backgroundColor = 'red';
        break;
      case 39:
        document.getElementById('appBody').style.backgroundColor = 'blue';
        break;
    }
  };

}

function changeTheText() {

  document.getElementById('paragraphText').style.color = 'blue';
  document.getElementById('appBody').style.backgroundColor = 'blue';

  var changeTextVariable = document.getElementById('changeUserText').value;
  document.getElementById('paragraphText').innerHTML = changeTextVariable;
}
