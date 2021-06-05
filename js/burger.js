document.getElementById("burger2_r").onclick = function() {open()};

function open() {
    document.getElementById("menu").classList.toggle("show");
}

$(document).ready(function(){
  $('#burger2_r').click(
      function(){
          $('#burger2_r').toggleClass('.burgermenu');
      },
      function(){
          $('.burgermenu').css('visibility', 'visible')
      },
  );
  })
