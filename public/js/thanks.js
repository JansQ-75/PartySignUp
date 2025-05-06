document.querySelector("#logout").addEventListener("click", (event) => {
    event.preventDefault(); // prevent default function for the link
    sessionStorage.clear(); // Clears all session storage
    console.log("Session storage cleared.");
    window.location.replace("./index.html");  // return to index.html (=login)
  });