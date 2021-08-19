// let name=prompt("Enter your name");
// let gut=document.getElementById("gut");
// gut.innerHTML=`Welcome MR. ${name} to my website`;
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
  let img=document.querySelector('img');
  // let btnn= document.querySelector('#btnn');
  var imgtrackers='f';
  function change(){
    if(imgtrackers=='f'){
      img.src='/images/pk1.jpg';
      imgtrackers='t';

    }
    else if(imgtrackers=='t'){
      img.src='/images/pk2.jpg';
      imgtrackers='s';

    }
    else if(imgtrackers=='s'){
      img.src='/images/pk3.jpg';
       imgtrackers='n';

    }
    else{
      img.src='/images/logo.jpeg';
       imgtrackers='f';

    }


    
  }
  let h3=document.querySelector('.h3');
  let dd=document.querySelector('.dd');
  let h33=document.querySelectorAll('.h33');
  let h333=document.querySelectorAll('.h333');
  let h3333=document.querySelectorAll('.h3333');
  let h33333=document.querySelectorAll('.h33333');
  let h333333=document.querySelectorAll('.h333333');
  let h1=document.querySelector('.h1');
  let para=document.querySelector('.para');
  let span=document.querySelector('.span');
  let span2=document.getElementById('span2');
  let span1=document.getElementById('span1');
  let span3=document.getElementById('span3');
  let span4=document.getElementById('span4');
  let span5=document.getElementById('span5');
  let tut=document.getElementsByClassName('tut')[0];
  let tut1=document.getElementsByClassName('tut')[1];
  let tut2=document.getElementsByClassName('tut')[2];
  let tut3=document.getElementsByClassName('tut')[3];
  let tut4=document.getElementsByClassName('tut')[4];
  let body=document.getElementById('all');
  edu1=document.getElementsByClassName('edu')[0];
  edu2=document.getElementsByClassName('edu')[1];
  edu3=document.getElementsByClassName('edu')[2];
  edu4=document.getElementsByClassName('edu')[3];
  edu5=document.getElementsByClassName('edu')[4];
  edu6=document.getElementsByClassName('edu')[5];
  edu7=document.getElementsByClassName('edu')[6];
  edu8=document.getElementsByClassName('edu')[7];
  edu9=document.getElementsByClassName('edu')[8];
  edu10=document.getElementsByClassName('edu')[9];
  edu11=document.getElementsByClassName('edu')[10];
  edu12=document.getElementsByClassName('edu')[11];
con1=document.getElementsByClassName('con')[0];
con2=document.getElementsByClassName('con')[1];
con3=document.getElementsByClassName('con')[2];
con4=document.getElementsByClassName('con')[3];
con5=document.getElementsByClassName('con')[4];
con6=document.getElementsByClassName('con')[5];
head=document.getElementById('head');
 
  let changer=document.getElementById('flexSwitchCheckDefault');
  let temp='d';
 
  changer.addEventListener('click',()=>{
    if(temp=='d'){
    console.log("i m on");
    body.style.background="#fff";
    body.style.color="black";
    h3.style.color="black";
    dd.style.color="black";
  
    h1.style.color="black";
    para.style.color="black";
    span.style.color="red";
    tut.style.color="red";
    tut1.style.color="red";
    tut2.style.color="red";
    tut3.style.color="red";
    tut4.style.color="red";
    span1.style.color="black";
    span2.style.color="black";
    span3.style.color="black";
    span4.style.color="black";
    span5.style.color="black";
    edu1.style.color="black";
    edu2.style.color="black";
    edu3.style.color="black";
    edu4.style.color="black";
    edu5.style.color="black";
    edu6.style.color="black";
    edu7.style.color="black";
    edu8.style.color="black";
    edu9.style.color="black";
    edu10.style.color="black";
    edu11.style.color="black";
    edu12.style.color="black";
    con1.style.color="black";
    con2.style.color="black";
    con3.style.color="black";
    con4.style.color="black";
    con5.style.color="black";
    con6.style.color="black";
    head.style.background="lightgoldenrodyellow";
    temp='w';
  }
  else if(temp=='w'){

    console.log("i m on");
    body.style.background="#111";
    body.style.color="white";
    dd.style.color="white";
    h3.style.color="white";
  
    h1.style.color="white";
    para.style.color="white";
    span.style.color="yellow";
    tut.style.color="yellow";
    tut1.style.color="yellow";
    tut2.style.color="yellow";
    tut3.style.color="yellow";
    tut4.style.color="yellow";
    span1.style.color="white";
    span2.style.color="white";
    span3.style.color="white";
    span4.style.color="white";
    span5.style.color="white";
    edu1.style.color="white";
    edu2.style.color="white";
    edu3.style.color="white";
    edu4.style.color="white";
    edu5.style.color="white";
    edu6.style.color="white";
    edu7.style.color="white";
    edu8.style.color="white";
    edu9.style.color="white";
    edu10.style.color="white";
    edu11.style.color="white";
    edu12.style.color="white";
    con1.style.color="white";
    con2.style.color="white";
    con3.style.color="white";
    con4.style.color="white";
    con5.style.color="white";
    con6.style.color="white";
    head.style.background="#1a1a1a";
    temp='d';

    
  }


  

    
})
function theme(){
  let temp='d';
  if(temp=='d'){
    console.log("i m on");
    body.style.background="#fff";
    body.style.color="black";
    h3.style.color="black";
  
    h1.style.color="black";
    para.style.color="black";
    span.style.color="red";
    tut.style.color="red";
    tut1.style.color="red";
    tut2.style.color="red";
    tut3.style.color="red";
    tut4.style.color="red";
    span1.style.color="black";
    span2.style.color="black";
    span3.style.color="black";
    span4.style.color="black";
    span5.style.color="black";
    edu1.style.color="black";
    edu2.style.color="black";
    edu3.style.color="black";
    edu4.style.color="black";
    edu5.style.color="black";
    edu6.style.color="black";
    edu7.style.color="black";
    edu8.style.color="black";
    edu9.style.color="black";
    edu10.style.color="black";
    edu11.style.color="black";
    edu12.style.color="black";
    con1.style.color="black";
    con2.style.color="black";
    con3.style.color="black";
    con4.style.color="black";
    con5.style.color="black";
    con6.style.color="black";
    head.style.background="lightgoldenrodyellow";
    temp='w';
  }
  else if(temp=='w'){

    console.log("i m on");
    body.style.background="#111";
    body.style.color="black";
    h3.style.color="black";
  
    h1.style.color="white";
    para.style.color="white";
    span.style.color="yellow";
    tut.style.color="yellow";
    tut1.style.color="yellow";
    tut2.style.color="yellow";
    tut3.style.color="yellow";
    tut4.style.color="yellow";
    span1.style.color="white";
    span2.style.color="white";
    span3.style.color="white";
    span4.style.color="white";
    span5.style.color="white";
    edu1.style.color="white";
    edu2.style.color="white";
    edu3.style.color="white";
    edu4.style.color="white";
    edu5.style.color="white";
    edu6.style.color="white";
    edu7.style.color="white";
    edu8.style.color="white";
    edu9.style.color="white";
    edu10.style.color="white";
    edu11.style.color="white";
    edu12.style.color="white";
    con1.style.color="white";
    con2.style.color="white";
    con3.style.color="white";
    con4.style.color="white";
    con5.style.color="white";
    con6.style.color="white";
    head.style.background="#1a1a1a";
    temp='d';

    
  }

}


  
  // if(imgtrackers=='t'){
  //   btnn.addEventListener('click',()=>{
      
      
  //     img.src='/images/pk1.jpg';
  //     imagetrackers='f';
  //     console.log("hello bro");
      
      
      
      
  //   })
    
    
  // }
  // else{
  //   btnn.addEventListener('click',()=>{
  //     img.src='/images/pk3.jpg';
  //      imgtrackers='f';
  //     })
  //   }

  
  // let name = prompt("Enter your name", "Guest");
  // document.getElementById("gut").innerHTML=`Welcome MR. ${name} to my page`;
  