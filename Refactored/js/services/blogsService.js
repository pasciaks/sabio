/*    
    Sheldon Pasciak, October 2020
*/

var blogsService = {
    endpoint: "https://api.remotebootcamp.dev/api/blogs"
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
