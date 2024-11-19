// List of keywords to identify gambling content
const gamblingKeywords = ["slots", "casino", "betting", "roulette", "poker", "blackjack"];

// Function to check if an element contains gambling-related keywords
function containsGamblingKeywords(text) {
  return gamblingKeywords.some(keyword => text.toLowerCase().includes(keyword));
}

// Function to hide gambling content
function hideGamblingContent() {
  // Select all elements that might contain stream titles or tags
  const streamElements = document.querySelectorAll('[data-a-target="preview-card-title"], [data-test-selector="stream-title"]');

  streamElements.forEach(element => {
    if (containsGamblingKeywords(element.textContent)) {
      // Hide the parent element containing the stream
      const parent = element.closest(".tw-card, .stream-card");
      if (parent) {
        parent.style.display = "none";
      }
    }
  });
}

// Run the function initially and observe DOM changes
hideGamblingContent();

// Use a MutationObserver to dynamically detect and hide new content
const observer = new MutationObserver(hideGamblingContent);
observer.observe(document.body, { childList: true, subtree: true });
