document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function clearError(id) {
        document.getElementById(id).textContent = "";
    }

    let name = document.getElementById("name").value.trim();
    if (name === "") {
        showError("nameError", "Name is required");
        isValid = false;
    } else {
        clearError("nameError");
    }

    let phone = document.getElementById("phone").value.trim();
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        showError("phoneError", "Enter a valid 10-digit phone number");
        isValid = false;
    } else {
        clearError("phoneError");
    }

    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        showError("emailError", "Enter a valid email address");
        isValid = false;
    } else {
        clearError("emailError");
    }

    let linkedin = document.getElementById("linkedin").value.trim();
    let linkedinPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/;
    if (!linkedinPattern.test(linkedin)) {
        showError("linkedinError", "Enter a valid LinkedIn URL");
        isValid = false;
    } else {
        clearError("linkedinError");
    }

    let resume = document.getElementById("resume").files.length;
    if (resume === 0) {
        showError("resumeError", "Resume is required");
        isValid = false;
    }

    let terms = document.getElementById("terms").checked;
    if (!terms) {
        alert("You must accept the terms and conditions.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("userForm").reset();
    }
});

document.getElementById("addSkill").addEventListener("click", function() {
    let skillInput = document.getElementById("skills");
    let skillValue = skillInput.value.trim();

    if (skillValue !== "") {
        let skillList = document.getElementById("skillList");
        let listItem = document.createElement("li");
        listItem.textContent = skillValue;
        skillList.appendChild(listItem);
        skillInput.value = "";
    }
});
