exports.handler = (event, context, resolve) => {
    if (event.httpMethod !== "POST") {
        callback(null, {
            statusCode: 405,
            body: "Method Not Allowed"
        });
    return;
    }
//    const params = querystring.parse(event.body);
    return {
        statusCode: 200,
        body: `${JSON.stringify(event)}`
    };
}
