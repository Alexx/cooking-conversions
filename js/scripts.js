var lbsToKg = function(lbs) {
  return lbs / 2.205;
};

var galToOz = function(gal) {
  return gal * 128;
};

$(document).ready(function(){
  $("form#lbsToKg").submit(function(event){
    event.preventDefault();
    var lbsInput = parseFloat($("input#lbs").val());
    alert(lbsToKg(lbsInput));
  });

  $("form#galToOz").submit(function(event){
    event.preventDefault();
    var galInput = parseFloat($("input#gal").val());
    alert(galToOz(galInput));
  });

});
