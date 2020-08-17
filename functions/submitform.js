const querystring = require('querystring');

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
    
    const response_data = querystring.parse(event.body)
    
    return {
        statusCode: 200,
        body: response_data
    };
}
