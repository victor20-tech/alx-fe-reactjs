import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";

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

    const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
    return response.data.items; // Return the array of users
  } catch (error) {
    throw new Error("User not found or API error"); // Handle errors accordingly
  }
};
