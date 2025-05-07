import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

  // Firebase configuration is loaded from config.js
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

// EventListener for submitting entered data
document.querySelector('button').addEventListener('click', async () => {
    const fnameField = document.querySelector('#fname');
    const lnameField = document.querySelector('#lname');
    const emailField = document.querySelector('#email');
    const pnumField = document.querySelector('#pnum');
    const addressField = document.querySelector('#address');

    // Get values from fields
    const fname = fnameField.value;
    const lname = lnameField.value;
    const email = emailField.value;
    const pnum = pnumField.value;
    const address = addressField.value;

    // Get values from checkboxes
    const milk = document.querySelector('#milk').checked ? 1 : 0;
    const egg = document.querySelector('#egg').checked ? 1 : 0;
    const gluten = document.querySelector('#gluten').checked ? 1 : 0;
    const nuts = document.querySelector('#nuts').checked ? 1 : 0;
    const fish = document.querySelector('#fish').checked ? 1 : 0;
    const other = document.querySelector('#other').value;

    // Data to store in database
    const dataToSend = {
        fname,
        lname,
        pnum,
        email,
        address,
        allergies: { milk, egg, gluten, nuts, fish, other },
        timestamp: new Date()
    };

    console.log('Data to send:', JSON.stringify(dataToSend, null, 2));

    // Storing data to Firestore database
    try {
        await addDoc(collection(db, "ilmoittautumiset"), dataToSend);
        console.log("Stored data successfully!");
        window.location.replace('./thanks.html');
      } catch (error) {
        console.error("Failed to store data:", error);
        alert("Error storing data!");
      }

    // Empty fields
    fnameField.value = "";
    lnameField.value = "";
    emailField.value = "";
    pnumField.value = "";
    addressField.value = "";

    // Empty checkboxes
    document.querySelector('#milk').checked = false;
    document.querySelector('#egg').checked = false;
    document.querySelector('#gluten').checked = false;
    document.querySelector('#nuts').checked = false;
    document.querySelector('#fish').checked = false;
    document.querySelector('#other').value = "";

    
});

// EventListener for logging out
document.querySelector("#logout").addEventListener("click", (event) => {
  event.preventDefault();
  sessionStorage.clear();
  window.location.replace("./index.html");
});