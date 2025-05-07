import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Firebase configuration is loaded from config.js
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// namelist of people who have signed up for party
const nameList = document.querySelector("#nameList");
nameList.innerHTML = ""; // empty default list

// function for retrieving firstnames
async function fetchNames() {
  try {
    const querySnapshot = await getDocs(collection(db, "ilmoittautumiset"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const li = document.createElement("li");  // creates new list-element
      li.textContent = data.fname || "(no name)"; // set name to the element
      nameList.appendChild(li); // add element to the list
    });

    if (querySnapshot.empty) {
      nameList.innerHTML = "<li>No one has signed up yet.</li>"; // in case of empty database
    }

  } catch (error) {
    console.error("Error fetching names:", error);
    nameList.innerHTML = "<li>Error fetching data.</li>"; // for handling errors
  }
}

// For selecting right function to "back" -button
document.addEventListener("DOMContentLoaded", () => {
  const partygoer = sessionStorage.getItem("partygoer");  // set sessionstorage "partygoer" value to variable
  const button_toForm = document.getElementById("back2form"); // button for returning form.html
  const button_toDetails = document.getElementById("back2details"); // button for returning personDetails.html

  if (partygoer) {  // if this email has not signed up yet, return to form
      button_toForm.style.display = "block";    // Show button
      button_toDetails.style.display = "none";  // Hide button
  } else {  // if this email has signed up already, return to personal information page
      button_toForm.style.display = "none";     // Hide button
      button_toDetails.style.display = "block"; // Show button

  }
});

document.querySelector('#back2form').addEventListener('click', async () => {
    window.location.replace('./form.html'); // return to form.html
});

document.querySelector('#back2details').addEventListener('click', async () => {
  window.location.replace('./personDetails.html');  // return to personDetails.html
});

// EventListener for logging out
document.querySelector("#logout").addEventListener("click", (event) => {
  event.preventDefault(); // prevent default function for the link
  sessionStorage.clear(); // Clears all session storage
  console.log("Session storage cleared.");
  window.location.replace("./index.html");  // return to index.html (=login)
});

fetchNames(); // function call to fetch names
