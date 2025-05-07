import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Firebase configuration is loaded from config.js
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const email_input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener("click", async() => {
    const email = email_input.value;
    let email_exists = false;

    try {
        const querySnapshot = await getDocs(collection(db, "ilmoittautumiset"));
        for (const doc of querySnapshot.docs) {
            const data = doc.data();
            console.log(data);
            if (data.email === email) { // if email exists in database, get the data and set boolean true
                sessionStorage.setItem("userDetails", JSON.stringify(data));
                email_exists = true;
                break;
            }
        }
    } catch (error) {
        console.error("Error checking email:", error);
    }
    
    // If email does not exist in database, allow to sign up
    if (!email_exists) {

        if (email) {
            sessionStorage.setItem("partygoer", email); // email is saved to sessionstorage for page functions (e.g. aboutUs.js)
            console.log("loginissa: " + sessionStorage.getItem("partygoer"))
            window.location.replace("./form.html");
        } else {
            alert("Invalid email. Please try again.");
            email_input.value = "";
        }
    } else { // If email does exist, do not allow new sign up, shows only submitted data
        window.location.replace("./personDetails.html")
    }
    
});



