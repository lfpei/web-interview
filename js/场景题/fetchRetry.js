/**
 * 可以重试的fetch请求
 * @returns 
 */
const fetchWithRetry = (options, count = 3) => {
  console.log('Starting fetch with options:', options);
  return fetch(options).catch((error) => {
    if (count <= 1) {
      return Promise.reject(error);
    }
    return fetchWithRetry(options, count - 1);
  });
}

fetchWithRetry("https://www.baidu.com/a/b/c").then(response => {
  console.log("Fetch succeeded:", response);
}).catch(error => {
  console.error("Fetch failed after retries:", error);
});
