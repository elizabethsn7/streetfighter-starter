$( document ).ready(function() {
    console.log("ready!");
    
    $(".ryu").mouseover(function() {
    	$(".ryu-still").hide();
    	$(".ryu-ready").show();
        $(".ryu-cool").hide();
        $(".ryu-throwing").hide();
    	console.log("mouseover");
    });

    $(".ryu").mouseout(function() {
    	$(".ryu-still").show();
    	$(".ryu-ready").hide();
        $(".ryu-cool").hide();
        $(".ryu-throwing").hide();
    	console.log("mouseout");
    });

    $(".ryu").mousedown(function() {
        playHadouken();
        $(".ryu-ready").hide();
        $(".ryu-still").hide();
        $(".ryu-throwing").show();
        $(".ryu-cool").hide();
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
        $(".ryu-still").hide();
        $(".ryu-cool").hide();
    	console.log("mouseup");
    	//ryu goes back to his ready position
});
    function playHadouken () {
        //reset volume when done
  $('#hadouken-sound')[0].volume = 0;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
    }
    $(document).keydown(function(e) {
        console.log("test");
        if(e.which === 88) {
            $(".ryu-cool").show();
            $(".ryu-still").hide();
            $(".ryu-throwing").hide();
            $(".ryu-ready").hide();
            console.log("keydown");
        }

    }).keyup(function(e) {
        if(e.which ===88) {
            $(".ryu-cool").hide();
            $(".ryu-still").show();
            $(".ryu-throwing").hide();
            $(".ryu-ready").hide();
            console.log("keyup");
        }
        
    })
});











