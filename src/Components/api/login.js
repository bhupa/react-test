import request from 'axios';


export  function loginApi(query) {
    return request({
        url: `${process.env.REACT_APP_API_BASE_URL}/login`,
        method: 'POST',
        data: query,
      });
  
  }

  export  function logoutApi(token) {
    return request({
        url: `${process.env.REACT_APP_API_BASE_URL}/logout`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
  
  }

