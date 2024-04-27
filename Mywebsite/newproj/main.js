
function copymail() {
    // Your logic to copy email to clipboard goes here
    // For demonstration purposes, let's assume the email is "example@example.com"
    // const email =document.getElementById('email').innerText;
    var email = document.getElementById('email').innerText;
    var dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = email;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    
    // Create the notification element
    const notificationElement = document.createElement("div");
    notificationElement.id = "notification";
    notificationElement.textContent = "Email Copied";
    document.body.appendChild(notificationElement);

    // Wait for a few seconds (adjust the duration as needed)
    setTimeout(() => {
        // Fade out the notification
        notificationElement.style.opacity = 0;
    }, 500); // 500 milliseconds (2 seconds) in this example
}