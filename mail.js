////////////////   Envoi formulaire   ///////////

function sendMail() {
    var params = {
      blaze: document.getElementById("blaze").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_sik8ahj";
    const templateID = "template_em6toel";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("blaze").value = "";
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          window.location.href='retour_commande.html';  
      })
      .catch(err=>console.log(err));
  
  }
  