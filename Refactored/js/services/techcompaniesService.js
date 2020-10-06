/*
    Sheldon Pasciak, October 2020

    GET
    https://api.remotebootcamp.dev/api/techcompanies
    https://api.remotebootcamp.dev/api/techcompanies?pageIndex=0&pageSize=999

    TechCompaniesApi
    Techcompanies Endpoints

    POST
     /api​/techcompanies
    Endpoint to add a record
    GET
     /api​/techcompanies
    Endpoint to get paginated response of records
    PUT
     /api​/techcompanies​/{id}
    Endpoint to update record with matching Id
    GET
     /api​/techcompanies​/{id}
    Get Tech Company by Id
    PUT
     /api​/techcompanies​/{id}​/{statusId}
    Endpoint to update the matching rocord's Status such as Deleted
    GET
     /api​/techcompanies​/search
    Search techcompanies contents using query paginated
    GET
     /api​/techcompanies​/{slug}
    Endpoint to get a record by slug    

*/

const techcompaniesService = {
    endpoint: "https://api.remotebootcamp.dev/api/techcompanies"
};

techcompaniesService.getPageOfTechcompanies = (pageIndex, pageSize) => {
    console.log("techcompaniesService.getPageOfTechcompanies is executing ", pageIndex, pageSize);
    const config = {
        method: "GET",
        url: techcompaniesService.endpoint + "/" + `?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
};

