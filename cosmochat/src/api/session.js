// Importing the axios library into our code.
import axios from "axios";

// Creating an axios instance with default configuration.
export default axios.create({
    // Setting the base URL for all HTTP requests made with this instance.
    baseURL: "http://localhost:3500/",
});


