function makeSound(key) {
    switch (key) {
        case "Home":
            var sound1 = new Audio("sounds/crash.mp3");
            sound1.play();
            break;
        case "About":
            var sound4 = new Audio("sounds/tom-4.mp3");
            sound4.play();
            break;
        case "Skills":
            var sound2 = new Audio("sounds/snare.mp3");
            sound2.play();
            break;
        case "Project":
            var sound5 = new Audio("sounds/tom-1.mp3");
            sound5.play();
            break;
        case "Contact":
            var sound3 = new Audio("sounds/tom-2.mp3");
            sound3.play();
            break;
        default:
            console.log("No sound mapped for key: " + key);
    }
}
document.getElementById("home-link").addEventListener("click", function () {
    makeSound("Home");
});
document.getElementById("about-link").addEventListener("click", function () {
    makeSound("About");
});

document.getElementById("skills-link").addEventListener("click", function () {
    makeSound("Skills");
});

document.getElementById("projects-link").addEventListener("click", function () {
    makeSound("Project");
});
document.getElementById("contact-link").addEventListener("click", function () {
    makeSound("Contact");
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Make sure your form is inside <form> tag

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Stop page refresh

            const name = document.querySelector("input[name='name']").value.trim();
            const email = document.querySelector("input[name='email']").value.trim();
            const subject = document.querySelector("input[name='subject']").value.trim();
            const message = document.querySelector("textarea[name='message']").value.trim();

            if (!name || !email || !subject || !message) {
                alert("⚠ Please fill all fields before submitting.");
                return;
            }

            // ✅ Show nice success message
            alert("✅ Thank you, " + name + "! Your message has been submitted.");

            // ✅ Clear form after submission
            form.reset();
        });
    }
});
