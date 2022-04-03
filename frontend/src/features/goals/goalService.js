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

// Get user goals
const getGoals = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    const response = await axios.get(API_URL, config);

    return response.data;
}


const goalService = { addGoal, getGoals }

export default goalService;