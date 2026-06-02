// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
  const query = url.split('?')[1];
  const params = query.split('&');

  const paramsObj = {};

  for (const param of params) {
    const key = param.split('=')[0];
    const value = param.split('=')[1];

    paramsObj[key] = value;
  }

  return paramsObj;
}

console.log(getQueryParams('https://example.com?search=test&page=2')); // Expected output: { search: "test", page: "2" }
