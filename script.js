document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before submitting.");
      return;
    }

    var subject = "New Contact Form Submission";
    var body =
      "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

    alert(
      "To contact Hanif Baaba, please send an email to baabahanif@gmail.com with the following details:\n\nSubject: " +
        subject +
        "\n\nBody:\n" +
        body
    );
  });
