// Function to remove Slots and Casino categories
function removeCategories() {
    // Define keywords to identify the unwanted categories
    const unwantedCategories = ['Slots & Casino'];

    // Select all potential category elements (adjust the selector based on the website's structure)
    const categories = document.querySelectorAll('span'); // Adjust the tags to match actual elements

    categories.forEach((category) => {
        if (unwantedCategories.some(keyword => category.textContent.includes(keyword))) {
            // Find the grandparent of the category element (parent's parent)
            const grandparent = category.parentElement?.parentElement?.parentElement?.parentElement;

            // If the grandparent exists, hide it
            if (grandparent) {
                grandparent.style.display = 'none'; // Hide the grandparent element
            }
        }
    });
}

// Observe changes in the DOM to catch dynamic content
const observer = new MutationObserver(() => {
    removeCategories();
});

// Start observing the entire body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true,
});

// Initial call to remove existing categories on page load
removeCategories();
