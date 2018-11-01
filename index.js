exports.handler = (event,context,callback) => {
    var responseBody = {
        message: 'Hello World, waiting for code deploy server to build!!! 26/Oct Morning...'
    }
    var response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    callback(null, response);
}