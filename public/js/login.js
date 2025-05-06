import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDRwSYv0IIUKPCeuEliiFsRae0iNjMLLVw",
    authDomain: "signup4party.firebaseapp.com",
    projectId: "signup4party",
    storageBucket: "signup4party.firebasestorage.app",
    messagingSenderId: "191939561469",
    appId: "1:191939561469:web:2a89ec0d62d3be2dbbfb94"
};

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
            if (data.email === email) {
                sessionStorage.setItem("userDetails", JSON.stringify(data));
                email_exists = true;
                break;
            }
        }
    } catch (error) {
        console.error("Error checking email:", error);
    }
    
    if (!email_exists) {

        if (email) {
            sessionStorage.setItem("partygoer", email);
            console.log("loginissa: " + sessionStorage.getItem("partygoer"))
            window.location.replace("./form.html");
        } else {
            alert("Invalid email. Please try again.");
            email_input.value = "";
        }
    } else {
        window.location.replace("./personDetails.html")
    }
    
});



