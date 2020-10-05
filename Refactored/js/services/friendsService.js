/*
    Sheldon Pasciak, October 2020
*/

// TODO verify the NON_NEED for return new promises around each axios - only needed if I want to further transpose data
// based on data from Axios

var friendsService = {
    endpoint: "https://api.remotebootcamp.dev/api/friends"
};

//GET friends by id- https://api.remotebootcamp.dev/api/friends/4976
/*
    get a specific record by id

    var id = 4976;  

*/
friendsService.get = (id) => {
    console.log("friendsService.get is executing ", id);
    const config = {
        method: "GET",
        url: friendsService.endpoint + "/" + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return new Promise(function (resolve, reject) {
        return axios(config)
            .then(function (data) {
                //console.log(data);
                resolve(data);
            })
            .catch(function (err) {
                //console.log(err.response.data.errors);
                reject(err);
            })
    })
};

//GET friends getPageOfFriends - https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=33

/*
    get page of friends

*/
friendsService.getPageOfFriends = (pageIndex, pageSize) => {
    console.log("friendsService.getPageOfFriends is executing ", pageIndex, pageSize);
    const config = {
        method: "GET",
        url: friendsService.endpoint + "/" + `search?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return new Promise(function (resolve, reject) {
        return axios(config)
            .then(function (data) {
                //console.log(data);
                resolve(data);
            })
            .catch(function (err) {
                //console.log(err.response.data.errors);
                reject(err);
            })
    })
};

//GET friends search - https://api.remotebootcamp.dev/api/friends/search?pageIndex=0&pageSize=15&q=raised
/*
    search friends - consider optimization that uses a call to traditional paging OR this paging with search parameter
*/
friendsService.search = (pageIndex, pageSize, searchString) => {
    console.log("friendsService.search is executing ", pageIndex, pageSize, searchString);
    const config = {
        method: "GET",
        url: friendsService.endpoint + "/" + `search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${searchString}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return new Promise(function (resolve, reject) {
        return axios(config)
            .then(function (data) {
                //console.log(data);
                resolve(data);
            })
            .catch(function (err) {
                //console.log(err.response.data.errors);
                reject(err);
            })
    })
};


//GET friends by slug - ??? - 77546


//POST - https://api.remotebootcamp.dev/api/friends
// {
//     "title": "This is a test",
//     "bio": "This is the bio",
//     "summary": "Summary of the friends api record",
//     "headline": "Now is the time for a headline",
//     "slug": "56333333", // must be unique
//     "statusId": "NotSet",
//     "primaryImage": "https://api.remotebootcamp.dev/apihelp/rbclogo.png"
//   }
friendsService.add = (payload) => {

    const config = {
        method: "POST",
        url: friendsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    return new Promise(function (resolve, reject) {
        return axios(config)
            .then(function (data) {
                resolve(data);
            })
            .catch(function (error) {
                reject(error);
            })
    });

};


//PUT - https://api.remotebootcamp.dev/api/friends/6211
// {
//     "id": 6211,
//     "title": "Updated test",
//     "bio": "Updated Bio",
//     "summary": "Updated Summary",
//     "headline": "Updated Headline",
//     "slug": "1238675209",
//     "statusId": "NotSet",
//     "primaryImage": "https://api.remotebootcamp.dev/apihelp/rbclogo.png"
//   }

//PUT - update friends status - https://api.remotebootcamp.dev/api/friends/6211/Active
// id / NotSet, Active, Deleted, Flagged 


//DELETE - https://api.remotebootcamp.dev/api/friends/4976
/*
    delete a friend record by id

    Note that delete is successful if a record with that ID exists - it's status is set to "statusId":"Deleted"

    Note that delete errors if the record ID doesn't exist

    var id = 4976;
*/
friendsService.delete = (id) => {
    console.log("friendsService.delete is executing ", id);
    const config = {
        method: "DELETE",
        url: friendsService.endpoint + "/" + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return new Promise(function (resolve, reject) {
        return axios(config)
            .then(function (data) {
                //console.log(data);
                resolve(data);
            })
            .catch(function (err) {
                //console.log(err.response.data.errors);
                reject(err);
            })
    })
};

