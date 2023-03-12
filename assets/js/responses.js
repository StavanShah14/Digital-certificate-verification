function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "Aadhar") {
        return "uadai";
    }
    else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "h ") {
        return "Hello there!";
    } else if (input == "aadhar") {
        return "uaidai";
    } else if (input == "aadhar") {
        return "https://uidai.gov.in/en/my-aadhaar/update-aadhaar.html";
    }
    else {
        return "Try asking something else!";
    }
}