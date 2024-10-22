// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charset = "";
    if (options.includeUppercase) charset += uppercase;
    if (options.includeLowercase) charset += lowercase;
    if (options.includeNumbers) charset += numbers;
    if (options.includeSpecialChars) charset += specialChars;

    if (charset === "") {
        alert("Please select at least one character set.");
        return "";
    }    
    // TODO: Generate the password based on the selected criteria
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
    document.getElementById('generateBtn').addEventListener('click', () => {
        const length = parseInt(document.getElementById('length').value, 10);
        
        if (isNaN(length) || length < 8 || length > 128) {
            alert("Please enter a valid password length (8-128).");
            return;
        }
        
        const options = {
            includeUppercase: document.getElementById('includeUppercase').checked,
            includeLowercase: document.getElementById('includeLowercase').checked,
            includeNumbers: document.getElementById('includeNumbers').checked,
            includeSpecialChars: document.getElementById('includeSpecialChars').checked,
        };

        const password = generatePassword(length, options);
        document.getElementById('passwordOutput').textContent = password;
    });
// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('passwordOutput').textContent;
    if (passwordOutput) {
        navigator.clipboard.writeText(passwordOutput).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    } else {
        alert('No password to copy!');
    }
});