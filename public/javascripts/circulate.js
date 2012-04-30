$(window).load(function() {

    $(".top-demo div").each(function() {
        $(this).circulate({
            speed: Math.floor(Math.random()*300) + 100,
            height: Math.floor(Math.random()*1000) - 470,
            width: Math.floor(Math.random()*1000) - 470
        });
    }).click(function() {
        $(this).circulate({
            speed: Math.floor(Math.random()*300) + 100,
            height: Math.floor(Math.random()*1000) - 470,
            width: Math.floor(Math.random()*1000) - 470
        });
    });
        
    $("#recurssive-button").click(function() {
        if ($(this).text() == "Start") {
            $("#text-demo span").circulate({
                loop: true,
                width: 150,
                height: 10
            });
            $(this).text("Stop");
        } else {
            $("#text-demo span").circulate("Stop");
            $(this).text("Start");
        }       
    });   
   

    function startBallOne() {
        $("#butterfly-three").circulate({
            speed: 4000,
            height: 450,
            width: -650,
            sizeAdjustment: 60,
            loop: true,
            zIndexValues: [0, 0, 3, 3]
        });
    }
    
    function startBallTwo() {
        $("#butterfly-one").circulate({
            speed: 9000,
            height: 520,
            width: -1100,
            sizeAdjustment: 25,
            loop: true,
            zIndexValues: [60, 60, 60, 60]
        })
    }
    
    function startBallThree() {
        $("#butterfly-two").circulate({
            speed: 4000,
            height: 300,
            width: -750,
            sizeAdjustment: 10,
            loop: true,
            zIndexValues: [3, 3, 1, 1]
        }).fadeIn();
    }
            
    startBallOne();
    setTimeout(startBallTwo, 1000);
    setTimeout(startBallThree, 8000);
    
});