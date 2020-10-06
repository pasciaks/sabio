/*    
    Sheldon Pasciak, October 2020
*/

var authService = {
    endpoint: "https://api.remotebootcamp.dev/api/users"
};

/*  
    authService.js, 

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

    /*
        NOTE - If simply implemented like this, the calling result catches with .then and .catch
    */
    // return axios(config)

    /*
        NOTE - If implemented like this, manipulation can be handled here and still allow .then and .catch case in calling function.
    */
    return new Promise(function (resolve, reject) {
        return axios(config)
            .then(function (data) {
                // NOTE - don't put view mechanisms here , pure code , reusable , separate UI/UX from business logic!!!
                // toastr.success('Successful Login\n\nPlease enter data carefully, for example purposes this account and data can be accessed by all the use this site.', 'Login Success!')
                var hasErrors = false;
                var additionalPayloadInfo = "user login success using payload " + JSON.stringify(payload);
                resolve({ data, additionalPayloadInfo, hasErrors });
            })
            .catch(function (data) {
                // NOTE - don't put view mechanisms here , pure code , reusable , separate UI/UX from business logic!!!
                // toastr.error("Error logging in\n\nPlease verify your credentials.", "Error");
                var hasErrors = true;
                var myErrorInfo = "user login failure using payload " + JSON.stringify(payload);
                reject({ data, myErrorInfo, hasErrors });
            })
    });

    /*
        note - if implemented like below, a call to userLogin always returns a then case (I think) -- the catch case doesn't bubble up if called.

        // this then apparantly requires a 'data result flag' like hasErrors be implemented.

            userLogin()
            .then(function(data){})
            .catch(function(data){})
    */
    // return axios(config)
    //     .then(function (data) {
    //         alert("Successful Login\n\nPlease enter data carefully, for example purposes this account and data can be accessed by all the use this site.");
    //         var hasErrors = false;
    //         var additionalPayloadInfo = "user login success using payload " + JSON.stringify(payload);
    //         console.log(additionalPayloadInfo);
    //         return { data, additionalPayloadInfo, hasErrors };
    //     })
    //     .catch(function (data) {
    //         alert("Error logging in\n\nPlease verify your credentials.");
    //         var hasErrors = true;
    //         var myErrorInfo = "user login failure using payload " + JSON.stringify(payload);
    //         console.log(myErrorInfo);
    //         return { data, myErrorInfo, hasErrors };
    //     })

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
//     "email": "sheldon@pasciak.com",
//     "password": "Sabiopassword1!",
//     "passwordConfirm": "Sabiopassword1!",
//     "avatarUrl": "https://api.remotebootcamp.dev/apihelp/rbclogo.png",
//     "tenantId": "U01BTATB8UC"
// }

// userRegister(registerPayload)
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

authService.userRegister = (payload) => {

    // var registerPayload = {
    //     "firstName": payload.firstName,
    //     "lastName": payload.lastName,
    //     "email": payload.email,
    //     "password": payload.password,
    //     "passwordConfirm": payload.passwordConfirm,
    //     "avatarUrl": payload.avatarUrl,
    //     "tenantId": payload.tenantId
    // }

    const config = {
        method: "POST",
        url: authService.endpoint + "/" + "register", //"https://api.remotebootcamp.dev/api/users/register",
        data: payload,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    //error.response.data.errors

    return axios(config)
};

//https://api.remotebootcamp.dev/api/users/current

authService.getCurrentUser = () => {
    const config = {
        method: "GET",
        url: authService.endpoint + "/" + "current", //"https://api.remotebootcamp.dev/api/users/current",
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };
    return axios(config)
}

authService.getUsers = (pageIndex = 0, pageSize = 10) => {
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
