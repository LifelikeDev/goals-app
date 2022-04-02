import axios from "axios";

const API_URL = "/api/goals/";

// Add new goal
const addGoal = async (goalData, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    const response = await axios.post(API_URL, goalData, config);

    return response.data;
}


const goalService = { addGoal }

export default goalService;