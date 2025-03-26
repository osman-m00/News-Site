# News Site - README & User Guide

## Overview
The **News Site** is a web application that provides users with the latest news articles from various sources using the **OpenNews API**. The site is built using **React.js**, **Tailwind CSS**, and standard **CSS** for styling.

## Features
- Fetch and display news articles from multiple sources.
- Category-based filtering (e.g., Sports, Technology, Politics).
- Search functionality to find specific news articles.
- Responsive design for mobile, tablet, and desktop users.

---
## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (>=14.0)
- **npm** or **yarn**

### Clone the Repository
```sh
git clone https://github.com/yourusername/news-site.git
cd news-site
```

### Install Dependencies
```sh
npm install
# OR
yarn install
```

### Setup Environment Variables
Create a `.env` file in the project root and add your OpenNews API key:
```env
REACT_APP_NEWS_API_KEY=your_api_key_here
```

### Run the Development Server
```sh
npm start
# OR
yarn start
```
The app will be available at `http://localhost:3000/`.

---
## Usage Guide
### Browsing News
- The homepage displays the latest headlines.
- Click on a news article to read the full details.

### Filtering News by Category
- Use the navigation bar to switch between categories (Technology, Sports, etc.).

### Searching for News
- Enter keywords in the search bar to find relevant articles.

### Responsive Design
- The site adapts to different screen sizes automatically using Tailwind CSS.

---
## Deployment
To deploy the application:
```sh
npm run build
# OR
yarn build
```
Then, deploy the `build/` directory to any hosting service like **Vercel**, **Netlify**, or **GitHub Pages**.

---
## Contributing
1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes.
4. Push to your branch and submit a pull request.

