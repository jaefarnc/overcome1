import axios from 'axios';
const URL = 'localhost:5000';

async function retrieveJobs(locations, skills, companies, exp, deg) {
    const data = await axios.get(`${URL}/jobs`, {
        params: {
            locations: locations,
            skills: skills,
            companies: companies,
            exp: exp,
            deg: deg,
        }
    }
    );
    console.log(data);
    return data;
}

async function postJob() {

}