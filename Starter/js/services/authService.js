/*
    userLogin - Note the optional return type with transposed return data
*/
var userLogin = (payload) => {

    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/users/login",
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
        NOTE - If implemented like this, manipulation can be handled here and still allow .catch case in calling function.
    */
    return new Promise(function (resolve, reject) {

        return axios(config)
            .then(function (data) {

                // Display a success toast, with a title
                toastr.success('Successful Login\n\nPlease enter data carefully, for example purposes this account and data can be accessed by all the use this site.', 'Login Success!')
                //alert("Successful Login\n\nPlease enter data carefully, for example purposes this account and data can be accessed by all the use this site.");
                var hasErrors = false;
                var additionalPayloadInfo = "user login success using payload " + JSON.stringify(payload);
                console.log(additionalPayloadInfo);

                resolve({ data, additionalPayloadInfo, hasErrors });
            })
            .catch(function (data) {
                toastr.error("Error logging in\n\nPlease verify your credentials.", "Error");
                //alert("Error logging in\n\nPlease verify your credentials.");

                var hasErrors = true;
                var myErrorInfo = "user login failure using payload " + JSON.stringify(payload);
                console.log(myErrorInfo);

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
    return axios(config)
        .then(function (data) {
            alert("Successful Login\n\nPlease enter data carefully, for example purposes this account and data can be accessed by all the use this site.");
            var hasErrors = false;
            var additionalPayloadInfo = "user login success using payload " + JSON.stringify(payload);
            console.log(additionalPayloadInfo);
            return { data, additionalPayloadInfo, hasErrors };

        })
        .catch(function (data) {
            alert("Error logging in\n\nPlease verify your credentials.");
            var hasErrors = true;
            var myErrorInfo = "user login failure using payload " + JSON.stringify(payload);
            console.log(myErrorInfo);
            return { data, myErrorInfo, hasErrors };
        })

};


var userLogout = () => {
    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/users/logout",
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    return axios(config)
}

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

var userRegister = (payload) => {
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
        url: "https://api.remotebootcamp.dev/api/users/register",
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


var getCurrentUser = () => {
    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/users/current",
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    return axios(config)

}



var getUsers = () => {
    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/users/?pageIndex=0&pageSize=9999",
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    return axios(config)

}
