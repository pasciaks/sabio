/*    
    Sheldon Pasciak, October 2020
*/

var authService = {
    endpoint: "https://api.remotebootcamp.dev/api/users"
};

/*  
    authService.js, 

    var payload = {
    email: "sheldon@pasciak.com",
    password: "Sabiopassword1!",
    tenantId: "U01BTATB8UC"
    }

    userLogin - Note the optional return type with transposed return data
*/
authService.userLogin = (payload) => {
    const config = {
        method: "POST",
        url: authService.endpoint + "/" + "login",
        data: payload,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };
    return axios(config)
};

authService.userLogout = () => {
    const config = {
        method: "GET",
        url: authService.endpoint + "/" + "logout", //"https://api.remotebootcamp.dev/api/users/logout",
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };
    return axios(config)
}

/*
    Register user example/implementation
*/

// var registerPayload = {
//     "firstName": "Sheldon",
//     "lastName": "Pasciak",
//     "email": "new@pasciak.com",
//     "password": "Sabiopassword1!",
//     "passwordConfirm": "Sabiopassword1!",
//     "avatarUrl": "https://api.remotebootcamp.dev/apihelp/rbclogo.png",
//     "tenantId": "bootcamp1"
// }

// userRegister(registerPayload)
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

authService.userRegister = (payload) => {
    const config = {
        method: "POST",
        url: authService.endpoint + "/" + "register", //"https://api.remotebootcamp.dev/api/users/register",
        data: payload,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };
    // NOTE - in the catch case the return of error.response.data.errors
    return axios(config)
};

//https://api.remotebootcamp.dev/api/users/current

authService.getCurrentUser = () => {
    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/users/current",  //https://api.remotebootcamp.dev/api/users/current
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };
    return axios(config)
}

authService.getUsers = (pageIndex, pageSize) => {
    const config = {
        method: "GET",
        url: authService.endpoint + "/" + `?pageIndex=${pageIndex}&pageSize=${pageSize}`, // "https://api.remotebootcamp.dev/api/users/?pageIndex=0&pageSize=9999",
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };
    return axios(config)
}

authService.getUser = (userId) => {
    const config = {
        method: "GET",
        url: authService.endpoint + "/" + `${userId}`, // "https://api.remotebootcamp.dev/api/users/4",
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };
    return axios(config)
}
