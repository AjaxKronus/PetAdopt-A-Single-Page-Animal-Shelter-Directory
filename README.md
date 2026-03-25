# **PetAdopt**

**PetAdopt** is a modern, Single-Page Application (SPA) designed to streamline the pet adoption discovery process. Built with **React** and **React Router**, the application provides a seamless, "no-refresh" user experience, allowing potential adopters to browse available pets, view detailed animal profiles, and access educational resources through client-side navigation.

-----

## **Key Features**

  * **Dynamic Client-Side Routing:** Powered by `react-router-dom`, the app transitions between pages instantly without reloading the browser.
  * **Nested Route Architecture:** Utilizes a sophisticated layout system where the "Adopt" section serves as a parent route, housing both the searchable pet gallery and individual profile views.
  * **Deep-Linkable Pet Profiles:** Each animal has a unique, SEO-friendly URL (e.g., `/adopt/Fido`) generated via dynamic URL parameters.
  * **Intuitive Navigation:** Includes a persistent navigation bar with `NavLink` integration to provide "active" state styling, helping users keep track of their location within the app.
  * **Smart Redirection:** Implements a "catch-all" route that automatically redirects broken or non-existent URLs back to the primary adoption gallery, ensuring a 100% uptime feel for the user.
  * **Interactive Details View:** A dedicated `PetDetail` component that parses URL parameters to fetch and display specific biographical data for each pet.

-----

## **Technical Stack**

  * **Core:** [React.js](https://reactjs.org/)
  * **Routing:** [React Router v6](https://reactrouter.com/) (BrowserRouter, Routes, Route, Link, NavLink, Navigate, useParams, Outlet)
  * **Styling:** Bootstrap-integrated CSS for a clean, responsive "card-based" UI.
  * **Build Tool:** Create React App (CRA).

-----

## **Project Structure**

The application follows a modular component hierarchy to separate concerns:

  * **`App`**: The main entry point defining the high-level route map.
  * **`Nav`**: Managed navigation component handling site-wide links.
  * **`PetPage`**: A layout component using `<Outlet>` to render child content (List vs. Details).
  * **`PetList`**: A gallery of available animals with dynamic links to specific profiles.
  * **`PetDetail`**: A logic-heavy component that uses hooks to identify and display data for a specific pet based on the URL path.

-----

## **Installation & Setup**

To run **PetAdopt** locally, follow these steps:

1.  **Clone the repository** and navigate to the project root:

    ```bash
    cd pet-adopt-spa
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Start the development server**:

    ```bash
    npm start
    ```

4.  **View the App**:
    Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser.

-----

## **Future Enhancements**

  * Integration with a live Petfinder API for real-time data.
  * An active "Adoption Form" state to move users through the application funnel.
  * Filtered searches by species, age, or breed using search parameters.

-----

**Developed by:** Amartya Chaube  
**Mission:** Connecting pets with their forever homes through clean, efficient code.
