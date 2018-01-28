const lib = require('lib')({token: "YEfYw21Fl5DUWW5m5cWhasQtJXxFRhv72vRNCgpEBGvFYK-6D8smjgQo0J6Zi8MQ"})

/**
* Sends a text to the given phone number
* @param {string} tel Recipient's telephone number
* @param {string} msg Message to be sent
* @returns {any}
*/
module.exports = (tel, msg, context, callback) => {
	
	lib.utils.sms({
			to: tel,
			body: msg
		},(err,result)=>{
			callback(err,result);
	});
	
};