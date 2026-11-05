function handleContact(event) {
    event.preventDefault();

    document.getElementById("form-response").textContent =
        "Thank you! Your message has been received.";

    event.target.reset();
}