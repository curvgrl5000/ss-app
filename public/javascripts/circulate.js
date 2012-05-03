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
   
    function startInsectOne() {
        $("#butterfly-three").circulate({
            speed: 4000,
            height: 450,
            width: -650,
            sizeAdjustment: 85,
            loop: true,
            zIndexValues: [0, 0, 3, 3]
        });
    }
    
    function startInsectTwo() {
        $("#butterfly-one").circulate({
            speed: 9000,
            height: 820,
            width: -1700,
            sizeAdjustment: 75,
            loop: true,
            zIndexValues: [60, 60, 60, 60]
        })
    }
    
    function startInsectThree() {
        $("#butterfly-two").circulate({
            speed: 4000,
            height: 700,
            width: -750,
            sizeAdjustment: 60,
            loop: true,
            zIndexValues: [3, 3, 1, 1]
        }).fadeIn();
    }
            
    startInsectOne();
    setTimeout(startInsectTwo, 1000);
    setTimeout(startInsectThree, 8000);
    
    function startInsectFour() {
        $("#butterfly-four").circulate({
            speed: 5500,
            height: -1800,
            width: -650,
            sizeAdjustment: 10,
            loop: true,
            zIndexValues: [60, 60, 60, 60]
        });
    }
    
    function startInsectFive() {
        $("#butterfly-five").circulate({
            speed: 5000,
            height: 620,
            width: -1500,
            sizeAdjustment: 10,
            loop: true,
            zIndexValues: [50, 50, 50, 50]
        })
    }
    
    function startInsectSix() {
        $("#butterfly-six").circulate({
            speed: 6500,
            height: 1000,
            width: 3000,
            sizeAdjustment: 80,
            loop: true,
            zIndexValues: [40, 40, 40, 40]
        }).fadeIn();
    }
            
    startInsectFour();
    setTimeout(startInsectFive, 0);
    setTimeout(startInsectSix, 0);
    
});