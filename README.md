# global design Crowddsourcing 

A MERN stack application that integrates Python for model execution, with a React frontend, Node.js backend, and MongoDB for data management.

---

## Project Structure  
plaintext
📂 client    # React frontend  
📂 server    # Node.js backend  
📂 model     # Python model  


---

## Prerequisites  
Ensure you have the following installed on your system:  
- [Node.js](https://nodejs.org/)  
- [Python 3.x](https://www.python.org/) with [CUDA](https://developer.nvidia.com/cuda-downloads) support for GPU processing.  
- [MongoDB Compass](https://www.mongodb.com/products/compass) for database visualization.  
- [npm](https://www.npmjs.com/) for package management.  

---

## Installation  

1. *Clone the repository:*  
   bash
   [git clone https://github.com//your-repo-name.git  ](https://github.com/khambampatibhavyasri/global-design-crowdsourcing.git)
   cd global-design-crowdsourcing 
   

2. *Install dependencies:*  

   - *Client:*  
     bash
     cd client  
     npm install  
       

   - *Server:*  
     bash
     cd server  
     npm install  
       

   - *Model:*  
     Ensure the required Python libraries are installed:  
     bash
     cd model  
     pip install -r requirements.txt  
       

3. *Set up MongoDB:*  
   - Open MongoDB Compass and create a new database (e.g., mern_database).  

---

## Running the Application  

### 1. Start the Python Model  

Navigate to the model directory and start the model with CUDA requirements (if available).  
bash
cd model  
python app.py  
  
The model will run on *port 5000*.  

### 2. Start the Backend Server  

Navigate to the server directory and start the server:  
bash
cd server  
node server.js  
  
The server will listen on *port 3500*.  

### 3. Start the React Frontend  

Navigate to the client directory and start the React app:  
bash
cd client  
npm start  
  
The React app will run on *port 3000*.  

---

## Application Flow  

1. *Frontend (React):*  
   - Sends requests to the Python model running on *port 5000* for computations.  
   - Communicates with the Node.js backend on *port 3500* for database operations.  

2. *Backend (Node.js):*  
   - Handles API requests from the frontend and communicates with the MongoDB database.  

3. *Model (Python):*  
   - Processes data using the Python model, leveraging GPU (via CUDA) when available.  

---

## Usage  

1. Open the React app in your browser at http://localhost:3000.  
2. Interact with the app to send requests to the Python model and see responses directly in the UI.  
3. Monitor backend operations via the console and MongoDB Compass.  

---

## Troubleshooting  

- Ensure that Python and CUDA are properly installed for GPU acceleration.  
- Confirm that MongoDB is running locally and accessible via Compass.  
- Verify that the ports (3000, 3500, 5000) are not blocked by your firewall.  

---

## License  

This project is licensed under the MIT License.
