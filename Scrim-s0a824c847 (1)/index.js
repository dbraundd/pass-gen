const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
var numElement = document.getElementById("num-input");


let pass1 = document.getElementById("password-1")
let pass2 = document.getElementById("password-2")
let errorMsg = document.getElementById("error-msg")



function generatePass() {
    let numVal = numElement.value;
    
    
    if (numVal === "") {
        numVal = 15
    }
    
    if (numVal > 9 && numVal < 21) {
        pass1.textContent = ""
        pass2.textContent = ""
        errorMsg.textContent = ""
        
        for (let i = 0; i < numVal; i++) {
            let randomNumber1 = Math.floor( Math.random() * characters.length)
            let randomNumber2 = Math.floor( Math.random() * characters.length)
            
            let password1 = characters[randomNumber1]
            let password2 = characters[randomNumber2]
            
            pass1.textContent += password1
            pass2.textContent += password2
        } 
        
    } else {
        errorMsg.textContent = "Please enter a number between 10-20"
    }
}



numElement.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { // Check if the pressed key is "Enter"
        generatePass(); // Call the function
    }
});


function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
            alert("Copy to clipboard failed. Make sure you're using a secure connection (HTTPS).");
        });
}

// Add event listeners to password elements
pass1.addEventListener("click", () => {
    if (pass1.textContent) { // Ensure there is text to copy
        copyToClipboard(pass1.textContent);
    }
});

pass2.addEventListener("click", () => {
    if (pass2.textContent) { // Ensure there is text to copy
        copyToClipboard(pass2.textContent);
    }
});

// Adding event listeners to the password elements
// pass1.addEventListener("click", () => {
//     copyToClipboard(pass1.textContent); // Copy password-1 on click
// });

// pass2.addEventListener("click", () => {
//     copyToClipboard(pass2.textContent); // Copy password-2 on click
// });

// function copyToClipboard(text) {
//     navigator.clipboard.writeText(text).then(() => {
//         alert("Password copied to clipboard!"); // Success message
//     }).catch(err => {
//         console.error("Failed to copy text: ", err); // Error handling
//     });
// }




