# Service-Account-IAM
Google Domain Wide Control using Service Accounts written in NodeJS

# IMPORTANT NOTE
Make sure you get the service account up and running. You can do this on your Google API Console
Define a variable and link it to the Service account JSON credentials file.
Enable G Suite domain wide delegation. To learn more --> https://support.google.com/a/answer/162106?hl=en
Don't forget to add scopes in the Google Admin Console. Scopes mentioned below.

npm install
npm install express
npm install googleapis


# All these scopes are important for any Drive API usage through IAM
Scopes for admin google console Security --> Advanced settings --> Manage API 
https://mail.google.com/
https://www.googleapis.com/auth/drive
https://www.googleapis.com/auth/drive.appdata
https://www.googleapis.com/auth/drive.file
https://www.googleapis.com/auth/drive.metadata
https://www.googleapis.com/auth/drive.metadata.readonly
https://www.googleapis.com/auth/drive.photos.readonly
https://www.googleapis.com/auth/drive.readonly
https://www.googleapis.com/auth/email.migration
https://www.googleapis.com/auth/gmail.insert
https://www.googleapis.com/auth/gmail.labels 

Service accounts work using JSON Web Tokens to learn more about JWT -> https://developers.google.com/identity/protocols/oauth2/service-account
