

var teamsService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/teams"
};

var blogsService = {
    endpoint: "https://api.remotebootcamp.dev/api/blogs"
};


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

teamsService.add = payload => {
    console.log("teamsService.add is executing ", payload);

    const config = {
        method: "POST",
        url: teamsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};

teamsService.update = (teamId, payload) => {
    console.log("teamsService.update is executing ", teamId, payload);

    const config = {
        method: "PUT",
        url: teamsService.endpoint + "/" + teamId,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
};

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

