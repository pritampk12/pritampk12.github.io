let name=prompt("Enter your name");
document.getElementById("gut").innerHTML=`Welcome MR. ${name} to my website`;
$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
  function myfun(){
    var a= document.getElementById("mobilenumber").value;
    if(a==""){
      document.getElementById("messages").innerHTML="fill it first";
      return false;
    }

    if(a.length<10 || a.length>=11){
      document.getElementById("messages").innerHTML="Phone number must be 10 digits";
      return false;
    }
  
    if(isNaN(a)){
      document.getElementById("messages").innerHTML="Only numeric value";
      return false;
    }
  }
  // let name = prompt("Enter your name", "Guest");
  // document.getElementById("gut").innerHTML=`Welcome MR. ${name} to my page`;
  