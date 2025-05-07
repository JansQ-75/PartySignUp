# Party SignUp

This is a web-application for signing up for party.
Application is hosted via Firebase and Firestore is used for storing the data.

### About web application

First user has to fill in an email address. 

![Login](./public/images/login.png)

If entered email address isn't stored at Firestore, web site opens a form for filling personal data and allergies. After user has filled in the data and clicks "Sign Up" -button, this data is stored at Firestore. After succesfull submit, user is relocated to "thank you" -page and can logout.

![Form](./public/images/form.png)

If user fills in an email address that is already stored at Firestore database, user can not fill in new data. Instead user is shown the information he/she has filled in before.

![PersonalInformation](./public/images/perinf.png)

At the web site there is also navigation bar. Depending on current page, there are links for "List of SignUp", "About us", "Back" and "Logout"

- List of Sign Up
    - Shows page with list of all signed up partygoers
![ListOfPartygoers](./public/images/list.png)
- About us
    - Shows page with information about fictional company named JansQParty
![AboutUs](./public/images/about.png)
- Back
    - Returns previous page
- Logout
    - User is logged out by clearing sessionstorage, page relocates to "login"

## About hosting with Firebase

kerrotaan miten firebase pistetään tulille
config.js

## Links

- [PartySignUp](https://signup4party.web.app)
    - _link to web application hosted via Firestore_
- [tähän videolinkki](https://youtu.be/0FgJx9zbAdE)
   - _web-sivusto käyttöönotettiin Cloudflaren git -integraation avulla_

[]
