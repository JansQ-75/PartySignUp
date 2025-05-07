// For selecting right function to "back" -button
document.addEventListener("DOMContentLoaded", () => {
    const partygoer = sessionStorage.getItem("partygoer");  // set sessionstorage "partygoer" value to variable
    
    document.querySelector("#back").addEventListener("click", (event) => {
        event.preventDefault(); // prevent default function for the link
        if (partygoer) {  // if this email has not signed up yet, return to form
            window.location.replace("./form.html")
        } else {  // if this email has signed up already, return to personal information page
            window.location.replace("./personDetails.html")
        }
    });
  });

  // EventListener for logging out
  document.querySelector("#logout").addEventListener("click", (event) => {
    event.preventDefault(); // prevent default function for the link
    sessionStorage.clear(); // Clears all session storage
    console.log("Session storage cleared.");
    window.location.replace("./index.html");  // return to index.html (=login)
  });