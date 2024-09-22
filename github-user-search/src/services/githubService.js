import axios from "axios";

// Define the GitHub Search Users API endpoint
const GITHUB_API_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Construct the query based on parameters
    let query = `${username}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // Fetch data from the GitHub Search Users API
    const response = await axios.get(`${GITHUB_API_URL}${query}`); // Using the endpoint
    return response.data.items; // Return the array of users
  } catch (error) {
    throw new Error("User not found or API error"); // Handle errors accordingly
  }
};
