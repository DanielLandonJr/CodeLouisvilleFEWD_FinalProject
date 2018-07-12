export const easyHTTP = (() => {
  // public methods
  return {
    // make get request
    get: async (url) => {
      const settings = {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
          "Content-Type": "application/text; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: text // body data type must match "Content-Type" header
      };

      const response = await fetch(url, settings);
      // const resData = await response.json();
      const resData = await response.text();
      return resData;
    },
    // make post request
    post: async (url, data) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const resData = await response.json();
      return resData;
    },
    // make update/put request
    put: async (url, data) => {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const resData = await response.json();
      return resData;
    },
    // make delete request
    delete: async (url) => {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });
      const resData = await 'Resource Deleted...';
      return resData;
    }
  }
})();