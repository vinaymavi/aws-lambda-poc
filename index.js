exports.handler = async (event, context) => {
  console.log("event=", JSON.stringify(event));

  let response = {
    statusCode: 200,
    headers: {
      "x-custom-header": "my custom header value"
    },
    body: ""
  };
  let respBody = "";
  const path = event && event.pathParameters && event.pathParameters.proxy;
  switch (path) {
    case "getOne":
      respBody = getOne();
      break;
    case "createOne":
      respBody = createOne();
      break;
    default:
      respBody = { whoami: "I don't know" };
  }
  response.body = JSON.stringify(respBody);
  return response;
};

function getOne() {
  return {
    whoami: "getOne"
  };
}

function createOne() {
  return {
    whoami: "createOne"
  };
}
