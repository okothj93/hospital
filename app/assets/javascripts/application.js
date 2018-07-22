// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bootstrap-datepicker/core
//= require bootstrap-datepicker/locales/bootstrap-datepicker.es
//= require_tree .

$(document).ready(function(){
    $('#patient_date_of_birth').datepicker({
        format: 'dd-mm-yyyy'
    });

    $(".pagination").find("a").attr("data-remote", true);

    $('#report_from_date').datepicker({
        format: 'dd-mm-yyyy'
    });

    $('#report_from_date').val(today);

    $('#report_to_date').datepicker({
        format: 'dd-mm-yyyy'
    });

    $('#report_to_date').val(today);

    $('#invoiceBtnId').click(function(){
        $('#invoiceBtnId').hide();
        $(".editCSS").html("archive");
        $(".editCSS").replaceWith($(".editCSS").html());
    });
});

function today(){
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    return curr_date + "-" + curr_month + "-" + curr_year;
}