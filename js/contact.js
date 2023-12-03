const btn = document.querySelector("#contact__submit")
const form = document.querySelector("#contact__form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get the values from the form

    let name = document.querySelector("#input__name").value
    let email = document.querySelector("#input__email").value
    let telephone = document.querySelector("#input__number").value
    let subject = document.querySelector("#input__subject").value
    let message = document.querySelector("#input__textarea").value

    console.log("Sending email with JS")

    sendEmailWithJS(name, email, message, telephone, subject)

})


function sendEmailWithJS(name, email, message, telephone, subject) {

    emailjs.init("Debtc7GWoOrqlkYVr")

    btn.innerHTML = "Sending ..."

    var templateParams = {
        from_name: name,
        email: email,
        message: message,
        telephone: telephone,
        subject: subject
    };
    
    emailjs.send('service_glo02mb', 'template_o5ha8ap', templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text)
        form.reset()
        btn.innerHTML = "Message Sent"
            setTimeout(() => {
                btn.innerHTML = 'Messager envoyé'
            }, 3000);
        }, function(error) {
        console.log('FAILED...', error)
        });

}