<div align="center"> 
  <h1>Moodora</h1> 
  <p>A Next.js and Firebase application for tracking mood patterns throughout the year with an intuitive calendar interface.</p> 
  <p> 
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"> 
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"> 
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"> 
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"> 
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"> 
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"> 
  </p> 
</div>

## Features
- Track your daily mood with expressive emoji ratings
- Visualize mood patterns with color-coded calendar view
- User authentication to keep your mood data private
- Historical data tracking by month and year
- Responsive design for both mobile and desktop use

## Tech Stack
- Next.js 15.x
- React 19.x
- Firebase Authentication
- Firestore Database
- TailwindCSS for styling

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/moodora.git
   cd moodora
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a ```.env``` file in the root directory with your Firebase configuration:
   ```bash
   NEXT_PUBLIC_API_KEY=your_api_key
   NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_PROJECT_ID=your_project_id
   NEXT_PUBLIC_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_APP_ID=your_app_id
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
### Deployment
This application is deployed on Vercel. You can deploy your own instance by linking your GitHub repository to Vercel and configuring the necessary environment variables.
