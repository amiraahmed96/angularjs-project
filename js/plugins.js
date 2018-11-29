$(document).ready(function()
 {
   $('.carousel').carousel({
      interval:6000 
   });
    });
    //show color option when click the gear
    $(".gear-ckeck").click(function()
    {
        $(".color-option").toggle();
    });
