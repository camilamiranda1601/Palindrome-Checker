document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value.trim();
    const resultElement = document.getElementById("result");

    if (inputText === "") {
        alert("Please input a value");
    } else {
        // Preserve the original input for output
        const originalText = inputText;
        
        // Format the input for palindrome check (remove non-alphanumeric, case-insensitive)
        const formattedText = inputText.replace(/[\W_]+/g, '').toLowerCase();
        
        // Check if the formatted text is a palindrome
        const isPalindrome = formattedText === formattedText.split('').reverse().join('');
        
        // Display the result
        if (isPalindrome) {
            resultElement.textContent = `${originalText} is a palindrome`;
        } else {
            resultElement.textContent = `${originalText} is not a palindrome`;
        }
    }
});
