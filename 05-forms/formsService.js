/*

    This Javascript file contains the methods for teamsService and BlogsService

    Sheldon Pasciak, September 2020

*/


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
                alert("Successful Login\n\nPlease enter data carefully, for example purposes this account and data can be accessed by all the use this site.");
                var hasErrors = false;
                var additionalPayloadInfo = "user login success using payload " + JSON.stringify(payload);
                console.log(additionalPayloadInfo);

                resolve({ data, additionalPayloadInfo, hasErrors });
            })
            .catch(function (data) {
                alert("Error logging in\n\nPlease verify your credentials.");
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

var teamsService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/teams"
};

var blogsService = {
    endpoint: "https://api.remotebootcamp.dev/api/blogs"
};

/*

get a specific team record

    var teamId = 5325235;

*/
teamsService.get = (teamId) => {
    console.log("teamsService.get is executing ", teamId);
    const config = {
        method: "GET",
        url: teamsService.endpoint + "/" + teamId,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};



/*

get all team records

*/
teamsService.getAll = () => {
    console.log("teamsService.getAll is executing ");
    const config = {
        method: "GET",
        url: teamsService.endpoint,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};

/*

add a new team

    var payload = {
        team: "team name",
        sport: "sport name",
        city: "city name"
    }

*/
teamsService.add = payload => {
    console.log("teamsService.add is executing ", payload);

    const config = {
        method: "POST",
        url: teamsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    // NOTE -- a transform might be nice because I'd like to also get back the payload I sent initially in addition to the returned new ID

    return axios(config);
};


/*

update an existing team

    var teamId = 1353252;

    var payload = {
        id : 12342,
        team: "team name",
        sport: "sport name",
        city: "city name"
    }


*/
teamsService.update = (payload) => {
    console.log("teamsService.update is executing ", payload);

    const config = {
        method: "PUT",
        url: teamsService.endpoint + "/" + payload.id,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};

/*

delete a team entity

    var teamId = 1145591531;

*/
teamsService.delete = (teamId) => {
    console.log("teamsService.delete is executing ", teamId);

    const config = {
        method: "DELETE",
        url: teamsService.endpoint + "/" + teamId,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};

/*

get a specific blog by id

    var blogIdToGet = 1529585106;

*/
blogsService.get = (blogId) => {
    console.log("blogsService.get is executing ", blogId);
    const config = {
        method: "GET",
        url: blogsService.endpoint + "/" + blogId,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};


/*

updates an existing blog

payload example 

    var updatedBlog = {
            "id": 1529585106,
            "authorId": 770304984,
            "title": "Updated Blog Title " + Date.now(),
            "content": "Updated Content. " + Date.now()
        }

*/
blogsService.update = payload => {
    console.log("blogsService.update is executing ", payload);

    const config = {
        method: "PUT",
        url: blogsService.endpoint + "/" + payload.id,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};


/*

get all blogs

*/
blogsService.getAll = () => {
    console.log("blogsService.getAll is executing ");
    const config = {
        method: "GET",
        url: blogsService.endpoint,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};


/*

add's a new blog

payload example:

    var newBlog = {
        "authorId": 770304984,
        "title": "Title Of Blog " + Date.now(),
        "content": "This is my blog content."
    }    

*/
blogsService.add = payload => {
    console.log("blogsService.add is executing ", payload);

    const config = {
        method: "POST",
        url: blogsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};
