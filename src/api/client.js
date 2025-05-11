import { create } from "apisauce";
import { BASE_URL } from "./apiUrls";

const apiClient = create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json'
    },
    timeout: 10000,
});

// For Debugging
apiClient.addMonitor(response => {
    console.log('API Response:', response);
  });

export default apiClient;