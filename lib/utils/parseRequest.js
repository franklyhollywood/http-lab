module.exports = (rawRequest) => {
  const firstParsedRequest = rawRequest.split('\r\n');
  const [method, path] = firstParsedRequest[0].split(' ');
  //const [body] = firstParsedRequest[1].split('\r');

  return { method, path };
};
