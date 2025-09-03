$(function(){
  $("#calc").click(function(){
    let amt = +$("#amount").val();
    let gstRate = +$("#gst").val();

    if(!amt || !gstRate) {
      alert("Please enter amount and select GST %");
      return;
    }

    let gstAmt = (amt * gstRate) / 100;
    let total = amt + gstAmt;

    $("#actual").text(amt.toFixed(2));
    $("#gstAmt").text(gstAmt.toFixed(2));
    $("#total").text(total.toFixed(2));

    $("#out").fadeIn();
  });

  $("#reset").click(function(){
    $("#amount").val("");
    $("#gst").val("");
    $("#out").hide();
  });
});
