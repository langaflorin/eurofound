(function ($) {
  Drupal.behaviors.efsailabel = {
  attach: function (context, settings) {
    $('input#edit-field-ef-sai-label-override-und').once().change(function(){
      $("input#edit-field-ef-sai-label-en-0-value").prop("disabled", !$(this).is(':checked'));
    });

    var s2article = document.getElementsByClassName('node-ef_report-form');
    var s2nc = document.getElementsByClassName('node-ef_national_contribution-form');
    var s2car = document.getElementsByClassName('node-ef_comparative_analytical_report-form');

    if (s2article.length || s2nc.length || s2car.length) {
      s2 = true;
    } 
    else {
      s2 = false;
    }

    if ($('input#edit-field-ef-observatory-und-13188').length && s2) {
      $('input#edit-field-ef-observatory-und-13188').once().change(function(){
        if ($("input#edit-field-ef-observatory-und-13188").is(':checked')) {
          $(".group-ef-sai-page-label").show();
        } 
        else {
          $(".group-ef-sai-page-label").hide();
        }
      });
    }
  }};
})(jQuery);

(function ($) {
  $(document).ready(function(){
    if ($("input#edit-field-ef-sai-label-override-und").is(':checked')) {
      $("input#edit-field-ef-sai-label-en-0-value").prop("disabled", false);
    } 
    else {
      $("input#edit-field-ef-sai-label-en-0-value").prop("disabled", true);
    }

    var s2article = document.getElementsByClassName('node-ef_report-form');
    var s2nc = document.getElementsByClassName('node-ef_national_contribution-form');
    var s2car = document.getElementsByClassName('node-ef_comparative_analytical_report-form');

    if (s2article.length || s2nc.length || s2car.length) {
      s2 = true;
    } 
    else {
      s2 = false;
    }

    if ($('input#edit-field-ef-observatory-und-13188').length && s2) {
      if ($("input#edit-field-ef-observatory-und-13188").is(':checked')) {
        $(".group-ef-sai-page-label").show();
      } 
      else {
        $(".group-ef-sai-page-label").hide();
      }
    }
  });
})(jQuery);