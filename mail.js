////////////////   Envoi formulaire   ///////////

function sendMail() {
    var params = {
      blaze: document.getElementById("blaze").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      boeufs: document.getElementById("samoussas_boeuf").value,
      volaille: document.getElementById("samoussas_volaille").value,
      legume: document.getElementById("samoussas_legume").value,
      poisson: document.getElementById("samoussas_poisson").value,
      chevre: document.getElementById("samoussas_chevre").value,
      beignet_nature: document.getElementById("beignet_nature").value,
      beignet_banane: document.getElementById("beignet_banane").value,
      sauce_chocolat: document.getElementById("sauce_chocolat").value,
      sauce_coco: document.getElementById("sauce_coco").value,
      paiement: document.getElementById("paiement").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_sik8ahj";
    const templateID = "template_em6toel";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("blaze").value = "";
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("samoussas_boeuf").value = "";
          document.getElementById("samoussas_volaille").value = "";
          document.getElementById("samoussas_legume").value = "";
          document.getElementById("samoussas_poisson").value = "";
          document.getElementById("samoussas_chevre").value = "";
          document.getElementById("beignet_nature").value = "";
          document.getElementById("beignet_banane").value = "";
          document.getElementById("sauce_chocolat").value = "";
          document.getElementById("sauce_coco").value = "";
          document.getElementById("paiement").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          window.location.href='retour_commande.html';  
      })
      .catch(err=>console.log(err));
  
  }
  