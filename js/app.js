$( document ).ready(function() {
    console.log("ready!");
    
    $(".ryu").mouseover(function() {
    	$(".ryu-still").hide();
    	$(".ryu-ready").show();
    	console.log("mouseover");
    });

    $(".ryu").mouseout(function() {
    	$(".ryu-still").show();
    	$(".ryu-ready").hide();
    	console.log("mouseout");
    });

    $(".ryu").mousedown(function() {
    // play hadouken sound
        $(".ryu-ready").hide();
        $(".ryu-throwing").show();
        $(".hadouken").finish().show().animate(
            {"left": "1020px"},
            500,
            function() {
                $(this).hide();
                $(this).css("left", "520px");
            }
    );
    	console.log("mousedown");
});
    $(".ryu").mouseup(function() {
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
    	console.log("mouseup");
    	//ryu goes back to his ready position
});
    });