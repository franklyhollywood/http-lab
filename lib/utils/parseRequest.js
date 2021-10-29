module.exports = (rawRequest) => {
  const firstParsedRequest = rawRequest.split('\r\n\r\n');
  const [method, path] = firstParsedRequest[0].split(' ');
  const body = firstParsedRequest[1];
  //   const request2 = (rawrequest = firstParsedRequest.split('\r\n\r\n'));

  return { method, path, body };
};
