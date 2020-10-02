/*
    This Javascript file contains the methods for teamsService
    Sheldon Pasciak, September 2020
*/

var teamsService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/teams"
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

