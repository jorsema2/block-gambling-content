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

// Create a MutationObserver to monitor DOM changes
const observer = new MutationObserver(() => {
    removeSlotsCategory();
});

// Start observing the body for changes (subtree = watch entire document for changes)
observer.observe(document.body, {
    childList: true,  // Observe when child nodes are added or removed
    subtree: true     // Observe the entire DOM subtree
});

// Initial call to remove "Slots & Casino" if already in the DOM
removeSlotsCategory();
