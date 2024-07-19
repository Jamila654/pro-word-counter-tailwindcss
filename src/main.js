document.addEventListener('DOMContentLoaded', function() {
    const countWordsButton = document.getElementById('count-words-btn');
    const inputWordsTextarea = document.getElementById('input-words');
    const wordCountDisplay = document.getElementById('word-count');

    countWordsButton.addEventListener('click', function() {
        const inputText = inputWordsTextarea.value.trim();
        
        const words = inputText.split(/\s+/);

        const validWords = words.filter(word => word.length > 0);

        wordCountDisplay.textContent = validWords.length;
    });
});
