document.getElementById("yogaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather basic form data
    const formData = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        yogaDuration: document.getElementById("yogaDuration").value,
        healthIssues: [],
        asanas: [],
        times: [],
    };

    // Gather data from the dynamically added rows
    const healthIssueSelects = document.getElementsByName("healthIssue[]");
    const asanaSelects = document.getElementsByName("asana[]");
    const timeSelects = document.getElementsByName("time[]");

    for (let i = 0; i < healthIssueSelects.length; i++) {
        formData.healthIssues.push(healthIssueSelects[i].value);
        formData.asanas.push(asanaSelects[i].value);
        formData.times.push(timeSelects[i].value);
    }

    // Send the data to the server
    fetch("https://script.google.com/macros/s/AKfycbzFAd-1IYm250cRpOg0u7s19fTtuWKTpLK0KqluB71EAa9aFA-rEHrjG9mZ3GcopDkMYQ/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., show a success message)
        alert("Form submitted successfully!");
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
        alert("Error submitting form.");
    });
});
