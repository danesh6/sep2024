 document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const review = document.getElementById("review").value;
        reviews.push({ name, review });
        displayReviews();
        document.getElementById("reviewForm").reset();
    });

    // Display Reviews on Page Load
    displayReviews();

    // Booking Form Validation
    document.getElementById("bookingForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("dates").value;
        const people = document.getElementById("people").value;

        if (destination && date && people) {
            alert(`Booking confirmed for ${destination} on ${date} for ${people} people!`);
        } else {
            alert("Please fill in all the fields!");
        }
    });

    // Contact Form Validation
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Your message has been sent!");
        } else {
            alert("Please fill in all the fields!");
        }
    });
