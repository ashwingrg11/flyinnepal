var $BUTTON_WRAPPER = $('buttons-wrapper'),
    $BUTTON = $('button.btn'),
    $RETURN_DATE = $('div.return-date');
//toggle menu for active class and hide return date when one-way is active
function init_togglemenu() {
  $RETURN_DATE.hide();
  $BUTTON.on('click', function(e) {
    var $parent = $(this).parent();

    $parent.find($BUTTON).removeClass('active-btn btn-secondary').addClass('way-btn');
    $(this).removeClass('way-btn btn-light').addClass('active-btn btn-secondary');
    var btnClicked = $(e.target).data('target');

    if (btnClicked === "btn2")
      $RETURN_DATE.show();
    else if(btnClicked === "btn1")
      $RETURN_DATE.hide();
  });
}
$(function() {
  var date = new Date();
  date.setDate(date.getDate());
  $('.datepicker').datepicker({
    startDate : date
  });
});


$(document).ready(function() {
  init_togglemenu();
  // init_pickdate();
})