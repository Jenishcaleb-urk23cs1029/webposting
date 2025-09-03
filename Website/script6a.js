$(function(){
  $("#calc").click(function(){
    let b = +$("#basic").val(),
        h = +$("#hra").val(),
        d = +$("#da").val(),
        i = +$("#inc").val();

    let gross = b + h + d + i;
    let tax = 0;

    // tax rules
    if(gross > 80000) tax = 0.20 * gross;
    else if(gross > 60000) tax = 0.15 * gross;
    else if(gross > 40000) tax = 0.10 * gross;
    else if(gross > 20000) tax = 0.05 * gross;

    let net = gross - tax;

    // display
    $("#gross").text("₹ " + gross.toFixed(2));
    $("#tax").text("₹ " + tax.toFixed(2));
    $("#net").text("₹ " + net.toFixed(2));

    $("#out").slideDown();
  });
});
