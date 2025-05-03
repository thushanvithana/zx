const leftArrow = document.querySelector(".left-arrow-btn");
const rightArrow = document.querySelector(".right-arrow-btn");
const reviewCardWrapper = document.querySelector(".review-card-wrapper");

let currentIndex = 0;
const reviews = [
  {
    image: "/public/images/Award.png",
    alt: "Gartner Award",
    rating: 4.3, // Will display 4 full stars
  },
  {
    image: "/public/images/Award.png",
    alt: "Gartner Award",
    rating: 2.3, // Will display 2 full stars
  },
  // Add more review objects here for additional cards
];

function generateStars(rating) {
  const fullStars = Math.floor(rating); // Number of full stars (round down)
  const totalStars = 5; // Total stars to display
  let starsHTML = "";

  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      // Full star
      starsHTML += `
        <div class="star-container">
          <svg class="star-filled" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      `;
    } else {
      // Unfilled star
      starsHTML += `
        <div class="star-container">
          <svg class="star-unfilled" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      `;
    }
  }
  return starsHTML;
}

function updateReviewCard(index) {
  const review = reviews[index];
  const starsHTML = generateStars(review.rating);
  reviewCardWrapper.innerHTML = `
    <article class="review-card">
      <img src="${review.image}" alt="${review.alt}" loading="lazy" />
      <hr />
      <div class="review-stars" aria-label="${review.rating} out of 5 stars">
        ${review.rating} ${starsHTML}
      </div>
    </article>
  `;
}

// Check if buttons exist before adding event listeners
if (leftArrow && rightArrow) {
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateReviewCard(currentIndex);
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReviewCard(currentIndex);
  });
} else {
  console.error("Arrow buttons not found.");
}

// Initialize the first review card
updateReviewCard(currentIndex);