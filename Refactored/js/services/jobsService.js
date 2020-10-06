/*
    Sheldon Pasciak, October 2020

    JobsApi
    Jobs Endpoint

    POST
     /api​/jobs
    Adds a job to the database
    GET
     /api​/jobs
    Gets a paginated list of all job postings based on pageIndex and pageSize
    PUT
     /api​/jobs​/{id}
    Updates the Job posting with the matching Id
    GET
     /api​/jobs​/{id}
    Gets the Job posting with the matching Id
    GET
     /api​/jobs​/{slug}
    Get Job by Slug
    GET
     /api​/jobs​/search
    Searches all Jobs and returns paginated results based on query
    PUT
     /api​/jobs​/{id}​/{statusId}
    Updates an Entity with the matching Id and Job Status

*/

// TODO - ensure wide use of const, let, and arrow functions

const jobsService = {
    endpoint: "https://api.remotebootcamp.dev/jobs"
};

