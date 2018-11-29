$(document).ready(function(){
    $(".login-wrap h4").click(function(){
        
        $(this).addClass("act1").siblings("h4").removeClass("act1");
        
    });
    
    $(".login1").click(function(){
        $(".login").css({display:"block"});
        $(".login-wrap .signin").css({display:"none"});
    });
    $(".signin1").click(function(){
        $(".login").css({display:"none"});
        $(".login-wrap .signin").css({display:"block"});
    })
    
    
    
    
    
    $(".now .star i").click(function(){
        $(this).css({color:"black"});
    })
    
    
    
    $('.times h3').click(function () {
           $(this).next("div.drop").slideToggle(500);
           $('.times div.drop').not($(this).next("div.drop")).slideUp(500);
           $(this).next("div.drop").css({display:"inline-block",width:"100%"});
       });
    
    
    $(".cinema table tr td").click(function(){
        $(this).toggleClass("act")
        
    /*if(!($(".cinema table tr td").hasClass("act")))
        {
           $(".b1 .btn1").attr("disabled",true); 
        }
    else
        {
          $(".b1 .btn1").attr("disabled",false);   
        }*/
    })
    
    $(".b1 .btn1").click(function(){
      if(!($(".cinema table tr td").hasClass("act")))
        {
           $(".b1 .btn1").attr("disabled",true); 
        }
    else
        {
          $(".b1 .btn1").attr("disabled",false);   
        }  
    })
    
    $("#form1").submit(function(){
        alert("submitted successfully")
    });
    
    
    
    
    
    
    
});


    


 var arr = ["img/slide1.jpg","img/slide2.jpg","img/slide3.png","img/slide4.jpg"],
        slider = document.getElementById("slider"),
        i = 0;
    window.onload = function () {
        setInterval(function () {
          if(i < 4) {
             slider.src = arr[i];
              i++;
          } else {
              i = 0;
          }
       },2500);     }