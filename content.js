const GAMBLING_CONTENT = "Slots & Casino";

function removeGamblingFromTopCategories() {
    const topLiveCategoriesSection = Array.from(document.querySelectorAll('section')).find(section => {
        const el = section.querySelector('div a span');
        return el && el.textContent.trim() === "Top Live Categories";
    });

    if (topLiveCategoriesSection) {
        const slotsCategory = Array.from(topLiveCategoriesSection.querySelectorAll('span')).find(span => {
            return span.textContent.trim() === GAMBLING_CONTENT;
        });

        if (slotsCategory) {
            slotsCategory.parentElement?.parentElement?.parentElement?.parentElement?.remove();
        }
    }
}

function removeRecommendedGamblingChannels() {
    const recommendationSection = Array.from(document.querySelectorAll('section')).find(section => {
        const el = section.querySelector('div');
        return el && el.textContent.trim() === "Recommended";
    });

    if (recommendationSection) {
        const slotsStreams = Array.from(recommendationSection.querySelectorAll('span')).find(span => {
            return span.textContent.trim() === GAMBLING_CONTENT;
        });

        if (slotsStreams) {
            slotsStreams.parentElement?.parentElement?.parentElement?.remove();  // Remove the span element
        }
    }
}

function removeGamblingSection() {
    const gamblingSection = Array.from(document.querySelectorAll('section')).find(section => {
        const el = section.querySelector('div a span');
        return el && el.textContent.trim() === "Gambling";
    });

    if (gamblingSection) {
        gamblingSection.remove();
    }
}

function removeGamblingClips() {
    const clipsSection = Array.from(document.querySelectorAll('section')).find(section => {
        const el = section.querySelector('div a span');
        return el && el.textContent.trim() === "Popular Clips This Week";
    });

    if (clipsSection) {
        const slotsClips = clipsSection.querySelectorAll('span');

        slotsClips.forEach(span => {
            if (span.textContent.trim() === GAMBLING_CONTENT) {
                span.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.remove();
            }
        });
    }
}

const observer = new MutationObserver(() => {
    removeGamblingFromTopCategories();
    removeGamblingSection();
    removeGamblingClips();
    removeRecommendedGamblingChannels();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});