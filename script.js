document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Dynamic Reviews Functionality (Local Storage)
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    function displayReviews() {
        const reviewsList = document.getElementById("reviews-list");
        reviewsList.innerHTML = "";
        reviews.forEach(review => {
            const reviewDiv = document.createElement("div");
            reviewDiv.classList.add("review");
            reviewDiv.innerHTML = `<p><strong>${review.name}</strong>: ${review.review}</p>`;
            reviewsList.appendChild(reviewDiv);
        });
    }

    document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const review = document.getElementById("review").value;
        reviews.push({ name, review });
        localStorage.setItem("reviews", JSON.stringify(reviews));
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
});
