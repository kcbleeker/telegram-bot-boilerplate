//incoming command matcher
// take in a message (i.e. "echo Hello bot"), and return an object such as 
// { 
//     command: "echo",
//     text: "Hello bot",
//     paramsArray: [
//         "Hello",
//         "bot"
//     ]
// } 
module.exports = {
  matched: function (textmessage) {
	var params = textmessage.match(/\S+/g) || [];
    var result = {
        command: params[0].toLowerCase(),
        text: textmessage.substring(params[0].length, textmessage.length),
        params: params.splice(1,params.length)
    };
    console.log(result);
    return result;
  }
};