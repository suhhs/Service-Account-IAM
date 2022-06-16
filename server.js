var express = require("express");
var app = express();
const {google} = require("googleapis");

let privatekey = require("./privatekey.json");

app.set("view engine", "ejs");

async function serviceAuth() {
  
    var jwtClient = new google.auth.JWT(
      privatekey.client_email,
      privatekey,
      privatekey.private_key,
      [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/drive.readonly",
        "https://www.googleapis.com/auth/drive.metadata.readonly",
        "https://www.googleapis.com/auth/drive.appdata",
        "https://www.googleapis.com/auth/drive.metadata",
        "https://www.googleapis.com/auth/drive.photos.readonly"
      ],
      "ImpersonationEmailAddress@domain.net"
    );
    listDriveFiles(jwtClient);
  }
  serviceAuth().catch(console.error);
  
  function listDriveFiles(OAuth2Service) {
    
    const listfile = google.drive("v3");
    //pass the authentication inside the request
    listfile.files.list({
    auth: OAuth2Service  
    }, (err, res) => {
      if (err) {
        console.error("faced issue with listing drive files", err)
      } else {
        var files = res.data.files;
        console.log(files)
      }
    })
  }

  app.listen(8080, function() {
    console.log("Server Started on Port 8080 Like Magic");
  });
