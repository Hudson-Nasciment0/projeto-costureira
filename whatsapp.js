function sendtoWhatsapp(){
    let number = "+5522999486732"

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    var url = "wa.me/556481339346" + number + "text="
    + "Name :" +name+ "%0a"
    + "Email :" +email+ "%0a"
    + "Message :" +message+ "%0a%0a"

    window.open(url, '_blank').focus();

}