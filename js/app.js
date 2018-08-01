var $BUTTON = $('button.btn-common'),
    $RETURN_DATE = $('div.return-date');
//toggle menu for active class and hide return date when one-way (nav menu) is active
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
//self invoking function to perform miscellaneous tasks
$(function() {
  var date = new Date();
  date.setDate(date.getDate());
  $('.datepicker').datepicker({
    startDate : date
  });
  $('[data-toggle="tooltip"]').tooltip();
});


//toggle nav menu in flight page
function initFlightToggleMenu() {
  var $CHANGE_FLIGHT_BTN = $('button.change-btn'),
      $SEARCH_SECTION = $('div.filter-section');

  $CHANGE_FLIGHT_BTN.on('click', function(e) {
    var icon = $(this).find('i');
    if (icon.hasClass('fa-pencil-square-o')) {
      icon.removeClass('fa-pencil-square-o');
      icon.addClass('fa-times-circle');
      $SEARCH_SECTION.show();
    }
    else {
      icon.removeClass('fa-times-circle');
      icon.addClass('fa-pencil-square-o');
      $SEARCH_SECTION.hide();
    }
  });
}
//function to deselect multiple checkboxes
function deSelectMultipleCheckBoxes() {
  $('.inp-dep').on('click', function() {
    $('.inp-dep').not(this).prop('checked', false);
  });
  $('.inp-ret').on('click', function() {
    $('.inp-ret').not(this).prop('checked', false);
  });
}
$(document).ready(function() {
  init_togglemenu();
  initFlightToggleMenu();
  deSelectMultipleCheckBoxes();
})
