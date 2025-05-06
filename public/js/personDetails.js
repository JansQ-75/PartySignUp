const userDetails = JSON.parse(sessionStorage.getItem("userDetails")); // Get "userDetails" from sessionstorage
if (userDetails) {
    console.log("User info:", userDetails);
    
    // set values to table cells
    document.getElementById("fnameValue").textContent = userDetails.fname || "?";
    document.getElementById("lnameValue").textContent = userDetails.lname || "?";
    document.getElementById("pnumValue").textContent = userDetails.pnum || "?";
    document.getElementById("emailValue").textContent = userDetails.email || "?";
    document.getElementById("addressValue").textContent = userDetails.address || "?";
    
    const allergies = userDetails.allergies;    // get allergies from userDetails
    const allergyList = Object.keys(allergies)  
        .filter(key => allergies[key] === 1) // Filter only allergies with value 1
        .map(key => key.charAt(0).toUpperCase() + key.slice(1)) // Change first letter to uppercase
        .join(", "); // Join allergies with ", "

    // add list of allergies to table cell
    document.getElementById("allergiesValue").textContent = allergyList || "None";
} else {
    console.error("User data was not found." + error);
    alert("User data was not found.")
}

document.querySelector("#logout").addEventListener("click", (event) => {
    event.preventDefault(); // prevent default function for the link
    sessionStorage.clear(); // Clears all session storage
    console.log("Session storage cleared.");
    window.location.replace("./index.html");  // return to index.html (=login)
  });