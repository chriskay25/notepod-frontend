# Notepod (frontend)

This is the frontend of the Notepod web application, built using React. The frontend communicates with the backend (built with Ruby on Rails) via a RESTful API to display dynamic content to the user.

Along with the backend, this application allows users to listen to podcasts and take notes on them. The backend is available at https://github.com/chriskay25/notepod-backend.git. More information is provided there regarding the ListenNotes API.

## Getting Started

Follow these instructions to get a copy of the frontend up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js: Version 22.0.0
- npm: Version 10.5.1

### Installation

1. Clone the repository:

```bash
git clone https://github.com/chriskay/notepod-frontend.git
cd notepod-frontend
```

2. Install the required dependencies:
`npm install`

### Running the Application

To start the development server, run:
`npm start`

The application will run at `http://localhost:3000` by default, but I recommend to start the backend server first, then run the frontend at `http://localhost:3001`.

## Contributing
1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin feature-branch)
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Chris Kay - chriskay25@gmail.com

Link to backend repo: https://github.com/chriskay25/notepod-backend.git 