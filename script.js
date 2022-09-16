console.log("Hello");
function sendEmail(e) {
  let sub= document.getElementById('sub').value;
  let mass= document.getElementById('mass').value;
  var temppar={
    from_name:"pritamdas200628@gmail.com",
    to_name:"dassubimal225@gmail.com",
    message:`${sub}   <br>        ${mass}`
  };
 emailjs.send('service_xzj2ge9','template_uu6o3zk',temppar)
 .then(function (message) {
  alert("mail sent successfully",message.status)
})

    
  }
function submitfunc(e){
  e.preventDefault();
    let nam= document.getElementById('nam').value;
    console.log(nam);
    sendEmail();
}

console.log(nam);