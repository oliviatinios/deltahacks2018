const lib = require('lib')({token: "YEfYw21Fl5DUWW5m5cWhasQtJXxFRhv72vRNCgpEBGvFYK-6D8smjgQo0J6Zi8MQ"})

/**
* Sends a text to the given phone number
* @param {string} tel Recipient's telephone number
* @returns {any}
*/
module.exports = (tel, context, callback) => {
	
	

	lib.utils.sms({
			to: tel,
			body: 'Time to take your medicine'
		},(err,result)=>{
			callback(err,result);
	});
	
};