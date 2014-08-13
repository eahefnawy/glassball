var google = Meteor.require('googleapis');
var OAuth2 = google.auth.OAuth2;

var CLIENT_ID = "91512035012-d0ikufirn263evt1rbdst0a4knd4kuqt.apps.googleusercontent.com",
	CLIENT_SECRET = "oaaL_EnuFVB-JlM0UlZFjavd",
	REDIRECT_URL = "http://localhost:3000/oauth2callback",
	SCOPE = "https://www.googleapis.com/auth/glass.timeline";

var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

var url = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPE
        });

console.log(url);