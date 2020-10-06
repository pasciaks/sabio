/*
    Sheldon Pasciak, October 2020

    SkillsApi
    Controller that encapsultes Skill enpoints. Skills can be used with other endpoints. For example a 'Job' may be assiociated with a specific set of Skills

    GET
     /api​/skills
    Endpoint to get all the existing skills in the database

    POST
     /api​/skills
    Endpoint to ensure all the specified Skills are in the database    

*/

const skillsService = {
    endpoint: "https://api.remotebootcamp.dev/api/skills"
};