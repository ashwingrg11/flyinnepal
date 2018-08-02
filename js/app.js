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
    var $PARENT_ROW = $(this).closest('tr'),
        $ADULT_FARE = $PARENT_ROW.find('td span.adult-fare').text(),
        $CHILD_FARE = $PARENT_ROW.find('td span.child-fare').text(),
        $SURCHARGE = $PARENT_ROW.find('td span.surcharge').text(),
        $TAX = $PARENT_ROW.find('td span.tax').text(),
        $COMMISSION = $PARENT_ROW.find('td span.commission').text(),
        $DEPT_FARE = $PARENT_ROW.find('td:nth-child(7) span.dep-num-price').text(),
        $DEPT_SUMMARY = $('.summary-wrapper ul.booking-summary li.total-item #dep-total');

    $('.dept-fare-adult-summary').html($ADULT_FARE);
    $('.dept-fare-child-summary').html($CHILD_FARE);
    $('.dept-fare-surcharge-summary').html($SURCHARGE);
    $('.dept-fare-tax-summary').html($TAX);
    $('.dept-fare-commission-summary').html($COMMISSION);
    $DEPT_SUMMARY.html($DEPT_FARE);


  });
  $('.inp-ret').on('click', function() {
    $('.inp-ret').not(this).prop('checked', false);
    var $PARENT_ROW = $(this).closest('tr'),
        $ADULT_FARE = $PARENT_ROW.find('td span.adult-fare').text(),
        $CHILD_FARE = $PARENT_ROW.find('td span.child-fare').text(),
        $SURCHARGE = $PARENT_ROW.find('td span.surcharge').text(),
        $TAX = $PARENT_ROW.find('td span.tax').text(),
        $COMMISSION = $PARENT_ROW.find('td span.commission').text(),
        $RET_FARE = $PARENT_ROW.find('td:nth-child(7) span.ret-num-price').text(),
        $RET_SUMMARY = $('.summary-wrapper ul.booking-summary li.total-item #ret-total');

    $('.ret-fare-adult-summary').html($ADULT_FARE);
    $('.ret-fare-child-summary').html($CHILD_FARE);
    $('.ret-fare-surcharge-summary').html($SURCHARGE);
    $('.ret-fare-tax-summary').html($TAX);
    $('.ret-fare-commission-summary').html($COMMISSION);
    $RET_SUMMARY.html($RET_FARE);
  });

}
$(document).ready(function() {
  init_togglemenu();
  initFlightToggleMenu();
  deSelectMultipleCheckBoxes();
  $(window).scroll(function () {
    if ($(window).width() > 992) {
      var scrollTop = $(window).scrollTop(),
        elementOffset = $('.departure-flights').offset().top,
        distance_top = (elementOffset - scrollTop);
      var measure = $('.links-footer'),
        windowHeight = $(window).height(),
        scrollDistance = $(window).scrollTop(),
        divOffsetTop = measure.offset().top,
        delta = divOffsetTop - (scrollDistance + windowHeight);
      var new_d = $('.grand-total').offset().top - $('.links-footer').offset().top
      if (distance_top < 0) {
        if (delta < -120) {
          $('.summary-main-wrapper').css('position', 'fixed');
          $('.summary-main-wrapper').css('top', '-30px');
        }
        else {
          $('.summary-main-wrapper').css('position', 'fixed');
          $('.summary-main-wrapper').css('top', '100px');
        }
      }
      if (distance_top > 100) {
        $('.summary-main-wrapper').removeAttr('style');
      }
    }
  });
  $(window).on('resize', function(){
    if ($(window).width() < 992) {
      $('.summary-main-wrapper').removeAttr('style');
    }
  })
})
