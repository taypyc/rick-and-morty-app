# Rick and Morty Character Viewer

## Objective
This web application based on the Rick and Morty series using data from the [Rick and Morty API](https://rickandmortyapi.com/).

## Requirements

1. **React Application Setup:**
   - Create a React application with appropriate component structure.
   - Set up routing for different sections of the application.

2. **API Integration:**
   - Utilize the [Rick and Morty API](https://rickandmortyapi.com/) to fetch data for characters.
   - Implement a component to display a list of characters, including their names and images, fetched from the API.

3. **Character Details:**
   - Create a component that displays detailed information about a selected character when the user clicks on a character from the list.
   - Display additional information such as status, species, gender, and location of the character.

4. **Search Functionality:**
   - Implement a search bar that allows users to search for characters by name or other attributes.
   - Update the displayed list of characters based on the search input.

5. **Pagination:**
   - Implement pagination for the character list, allowing users to navigate through multiple pages of characters from the API.

6. **Styling:**
   - Use a CSS-in-JS solution (e.g., styled-components) or a CSS framework (e.g., Bootstrap) to style your components.
   - Make the application visually appealing and user-friendly.

## Application Setup

To setup your application you need to have Vite v.5 or above, React v.18 or above.

Run locally with
```
git clone https://github.com/taypyc/rick-and-morty-app.git
cd rick-and-morty-app
npm install
npm run dev
```