function removeSlotsCategory() {
    // Step 1: Find the section containing the div > a > span with text "Top Live Categories"
    const topLiveCategoriesSection = Array.from(document.querySelectorAll('section')).find(section => {
        // Check if the section contains the specific structure
        const anchor = section.querySelector('div a span');
        return anchor && anchor.textContent.trim() === "Top Live Categories";
    });

    // If the section is found
    if (topLiveCategoriesSection) {
        // Step 2: Find the span containing the text "Slots & Casino" inside this section
        const slotsCategory = Array.from(topLiveCategoriesSection.querySelectorAll('span')).find(span => {
            return span.textContent.trim() === "Slots & Casino";
        });

        // Step 3: If the "Slots & Casino" span is found, remove it
        if (slotsCategory) {
            slotsCategory.parentElement?.parentElement?.parentElement?.parentElement?.remove();  // Remove the span element
        }
    }
}

function removeGamblingSection() {
    // Step 1: Find the section containing the div > a > span with text "Top Live Categories"
    const gamblingSection = Array.from(document.querySelectorAll('section')).find(section => {
        // Check if the section contains the specific structure
        const anchor = section.querySelector('div a span');
        return anchor && anchor.textContent.trim() === "Gambling";
    });



    // Step 3: If the "Slots & Casino" span is found, remove it
    if (gamblingSection) {
        gamblingSection.remove();  // Remove the span element
    }
}

function removeSlotsClips() {
    // Step 1: Find the section containing "Popular Clips This Week"
    const clipsSection = Array.from(document.querySelectorAll('section')).find(section => {
        // Check if the section contains the specific structure
        const anchor = section.querySelector('div a span');
        return anchor && anchor.textContent.trim() === "Popular Clips This Week";
    });

    // Step 2: If the section is found, find all spans inside it with the text "Slots & Casino"
    if (clipsSection) {
        const slotsSpans = clipsSection.querySelectorAll('span');

        slotsSpans.forEach(span => {
            if (span.textContent.trim() === "Slots & Casino") {
                // Remove or hide the span with "Slots & Casino"
                span.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.remove(); // Hide the span
                // Or use: span.remove(); // To remove the span entirely
            }
        });
    }
}

// Create a MutationObserver to monitor DOM changes
const observer = new MutationObserver(() => {
    removeSlotsCategory();
    removeGamblingSection();
    removeSlotsClips();
});

// Start observing the body for changes (subtree = watch entire document for changes)
observer.observe(document.body, {
    childList: true,  // Observe when child nodes are added or removed
    subtree: true     // Observe the entire DOM subtree
});

// Initial call to remove "Slots & Casino" if already in the DOM
removeSlotsCategory();
