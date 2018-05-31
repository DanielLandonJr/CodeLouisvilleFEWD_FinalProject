export const easyHTTP = (() => {
  // public methods
  return {
    // make get request
    get: async (url) => {
      console.log(url);
      const response = await fetch(url);
      console.log(response);
      const resData = await response.json();
      console.log(resData);
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