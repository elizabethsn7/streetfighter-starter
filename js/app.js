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
});