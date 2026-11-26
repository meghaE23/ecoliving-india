function handleContact(event) {
    event.preventDefault();

    document.getElementById("form-response").textContent =
        "Demo form completed. No message was sent.";

    event.target.reset();
}