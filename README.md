# Movies Library

One-page applications for searching information about movies on TMDB.

[Link to the preview](https://vitaliishc-movieslibrary.vercel.app/) (Ctrl + Click to open in a new tab)

## Technologies Used

HTML/CSS, JavaScript, React (with Routes), Axios.

Libraries: clsx, formik, react-hot-toast.

Bundler: Vite.

### Routes

- `/` - **HomePage**, a homepage with a list of trending movies.
- `/movies` - **MoviesPage**, a page for searching movies by keyword.
- `/movies/:movieId` - **MovieDetailsPage**, a page with detailed information about a movie.
- `/movies/:movieId/cast` - **MovieCast**, information about the cast. It is rendered at the bottom of the **MovieDetailsPage**.
- `/movies/:movieId/reviews` - **MovieReviews**, a component providing information about reviews. It is rendered at the bottom of the **MovieDetailsPage**.

## How to Clone and Run the Project

1. Clone the repository:

- Open your terminal (or Git Bash) and navigate to the folder where you want to store the project.

- Run the following command to clone the repository:

`git clone https://github.com/VitaliiShc/MoviesLibrary.git`

2. Navigate to the project directory:
   `cd MoviesLibrary`

3. Install dependencies:

- Make sure you have Node.js installed. If not, download and install it from Node.js official website.

- Install the necessary project dependencies:

`npm install`

4. Run the project locally:

- Start the local development server:

`npm start`

- Open your browser and go to `http://localhost:5173` to see the online store in action.
