require('dotenv').config({ silent: true });
module.exports = {
    SOAP_API_URL: process.env.SOAP_API_URL,
    SOAP_API_USERNAME: process.env.SOAP_API_USERNAME,
    SOAP_API_PASSWORD: process.env.SOAP_API_PASSWORD
};