const API_URL = import.meta.env.VITE_BACKEND_URL;

fetch(`${API_URL}/api/data`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching:", error));
