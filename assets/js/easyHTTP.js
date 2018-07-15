export const easyHTTP = (() => {
  // public methods
  return {
    // make get request
    get: async (url) => {
      let getSetup = {
        method: 'GET',
        headers: {
          'Content-type': 'text/html'
        }
      };
      const response = await fetch(url, getSetup);
      // const resData = await response.json();
      const resData = await response.text();
      return resData;
    },
    // make post request
    post: async (url, data) => {
      let postSetup = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const response = await fetch(url, postSetup);
      const resData = await response.json();
      return resData;
    },
    // make update/put request
    put: async (url, data) => {
      let putSetup = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const response = await fetch(url, putSetup);
      const resData = await response.json();
      return resData;
    },
    // make delete request
    delete: async (url) => {
      let deleteSetup = {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      };
      const response = await fetch(url, deleteSetup);
      const resData = await 'Resource Deleted...';
      return resData;
    }
  }
})();