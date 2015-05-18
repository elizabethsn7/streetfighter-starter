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
        $(".hadouken").show();
    	console.log("mousedown");
   //show hadouken and animate it to the right of the screen
})
    $(".ryu").mouseup(function() {
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
    	console.log("mouseup");
    	//ryu goes back to his ready position
});
    });