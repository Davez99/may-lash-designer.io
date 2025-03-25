$(document).ready(function(){

  // Redirect to WhatsApp
  $(".redirectWaMe").click(function () {

    const phone = "5541995277047"; //client number
    const name = $(this).attr("name");

    // Object Messages
    const messages = {
      topbar: "Olá, vim pelo site e gostaria de saber mais sobre seu trabalho.",
      carousel: "Olá, gostaria de agendar um horário",
      volumeBrasileiro: "Olá, eu gostaria de agendar um horário, para fazer o Volume Brasileiro.",
      fioAFio: "Olá, eu gostaria de agendar um horário, para fazer o Fio-a-Fio.",
      volume5D: "Olá, eu gostaria de agendar um horário, para fazer o Volume 5D.",
      volumeMega4D: "Olá, eu gostaria de agendar um horário, para fazer o Volume Mega 4D.",
      sobrancelhaApenasDesigner: "Olá, eu gostaria de agendar um horário, para fazer a Sobrancelha apenas designer.",
      henna: "Olá, eu gostaria de agendar um horário, para fazer a Henna.",
      manutencao: "Olá, eu gostaria de agendar um horário, para fazer a Manutenção.",
      remocaoQuimica: "Olá, eu gostaria de agendar um horário, para fazer a Remoção química.",
      default: "Olá, Gostaria de ver a disponibilidade da sua agenda.",
    };

    // Chose the massage or use default
    const message = messages[name] || messages.default;

    // build the URL and redirect
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    console.log(url);
    // Open WhatsApp link in a new tab
    window.open(url, "_blank");

    // Prevent default link behavior
  return false;
  });
});