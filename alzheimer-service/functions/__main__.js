const lib = require('lib')({token: "YEfYw21Fl5DUWW5m5cWhasQtJXxFRhv72vRNCgpEBGvFYK-6D8smjgQo0J6Zi8MQ"})

/**
* Hello
* @param {string} sender The phone number that sent the text to be handled
* @param {string} receiver The StdLib phone number that received the SMS
* @param {string} message The contents of the SMS
* @param {string} createdDatetime Datetime when the SMS was sent 
* @returns {any}
*/
module.exports = async (sender, receiver, message, createdDatetime, context) => {
	let result = await lib.messagebird.tell.sms({
		originator: '12262860357',
		recipient: "16474072912",
		body: "hello"
	});
 	return result;
};
