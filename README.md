1. Introduction
This project is an AI-powered Waste Management System that helps classify waste types and find nearby recycling centres using AI image classification and Google Maps API. The system consists of a backend (Node.js + Express + TensorFlow.js) and a frontend (HTML, CSS, JavaScript).
2. Features
•	AI Waste Classification – Upload an image of waste, and the AI model will classify it as Plastic, Glass, Paper, Organic, Metal, or Electronic Waste.
•	Find Nearby Recycling Centres – Uses Google Places API to locate the closest recycling centres based on the user's location. 
•	Interactive Map Integration – Displays recycling centers on a Google Map. 
•	Fast and Lightweight – Uses TensorFlow.js for AI processing and Express.js for the backend.
3. Tech Stack
Frontend
•	HTML, CSS, JavaScript (for UI)
•	Google Maps API (for locating centers)
Backend
•	Node.js + Express.js (server handling requests)
•	TensorFlow.js (for AI-based waste classification)
•	Google Places API (fetching recycling centers)
4. How It Works
1.AI Waste Classification
•	The user uploads an image of waste.
•	The image is sent to the Node.js backend, which loads a TensorFlow AI model.
•	The model analyzes the image and predicts its category:
o	Plastic
o	Glass
o	Paper
o	Organic Waste
o	Metal
o	Electronic Waste
•	The classification result is displayed on the website.
2️.Finding Nearby Recycling Centers
•	The user clicks "Find Recycling Centers".
•	The Google Places API fetches the nearest recycling centers based on the location.
•	The results are displayed in a list and on a map.


