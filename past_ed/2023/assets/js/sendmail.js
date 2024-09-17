document.getElementById("submit-button").addEventListener("click", function () {
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Compose the email link
    const mailtoLink = `mailto:brainhacklucca@imtlucca.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
});