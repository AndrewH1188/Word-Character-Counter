const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

function updateCounts() {
    const text = input.value;

    if (!text) {
        resetCounts();
        return;
    }

    // COUNT WORDS
    const wordsArray = text.trim().split(/\s+/).filter(Boolean);
    wordCount.innerText = wordsArray.length;

    // COUNT CHARACTERS
    characterCount.innerText = text.length;

    // COUNT SENTENCES
    const sentencesArray = text.split(/[.!?]+/).filter(Boolean);
    sentenceCount.innerText = sentencesArray.length;

    // COUNT PARAGRAPHS
    const paragraphArray = text.split("\n").filter(p => p.trim() !== "");
    paragraphCount.innerText = paragraphArray.length;
}

function resetCounts() {
    wordCount.innerText =
    characterCount.innerText =
    sentenceCount.innerText =
    paragraphCount.innerText =
    "0";
}

input.addEventListener("input", updateCounts);
