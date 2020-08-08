document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {});
});

function onEmailClick(){
  document.location.href = "mailto:idea3d.ok@gmail.com?subject=Idea3d";
}

function onPhoneClick(){
  document.location.href = "phone:+5491100000000";
}