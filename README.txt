=================================
    GitHub Profile Viewer
=================================    

Live Preview at: https://githubprofileveiwer.netlify.app/

A simple and responsive web application that allows users to search for any GitHub
username and view their profile details along with their public repositories. The 
application fetches real-time data using the GitHub API and displays it in a clean 
and user-friendly interface.

This project was built to practice and demonstrate core React concepts such as components,
props, hooks, and API integration.

=================================
            Features
=================================

Search any GitHub user
View profile information:
Avatar
Bio
Location
Followers & Following
Public repositories
Display user repositories with useful details
Responsive and clean UI
Real-time data fetching from GitHub API
Debounced search to reduce unnecessary API calls

=================================
          Tech Stack
=================================          

React
JavaScript
Tailwind CSS
GitHub REST API
Lucide React Icons

=================================
       Project Structure
=================================       

src
 ├── components
 │   ├── Header.jsx
 │   ├── Searchbar.jsx
 │   ├── ProfileCard.jsx
 │   ├── RepoCard.jsx
 │   └── EmptyState.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── App.css
================================= 
         Installation
=================================         


Clone the repository:

git clone https://github.com/Muhammad-Raheel04/github-profile-viewer.git
Navigate to the project directory:
cd github-profile-viewer
Install dependencies:
npm install
Run the development server:
npm run dev

=================================
       GitHub API Used
=================================       

The project uses the following endpoints:

https://api.github.com/users/{username}
https://api.github.com/users/{username}/repos

================================= 
        Author
=================================

Muhammad Raheel

GitHub:
https://github.com/Muhammad-Raheel04
