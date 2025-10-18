# Persistent To-Do Tracker

A simple, single-page To-Do List application that allows users to add tasks, mark them as complete, and delete them. All tasks are automatically saved to the browser's LocalStorage, ensuring data persists even after the browser is closed or refreshed.

## Features

*   **Add New Tasks**: Quickly add new to-do items with a specified scope (Daily, Weekly, Monthly, Yearly).
*   **Persistent Storage**: Tasks are automatically saved to and loaded from your browser's LocalStorage. This means your to-do list will remain intact even if you close and reopen the browser or refresh the page.
*   **Mark as Complete**: Toggle tasks as complete or incomplete with a checkbox. Completed tasks are visually styled (strike-through).
*   **Delete Tasks**: Permanently remove tasks from the list with a dedicated "Delete" button next to each task.
*   **Categorization by Scope**: Organize tasks by scope for better management.

## How to Run

1.  **Save the files**: Ensure you have `index.html`, `style.css`, and `script.js` in the same directory.
2.  **Open `index.html`**: Simply open the `index.html` file in your web browser.
3.  **Start Adding Tasks**: Use the input field and scope selector to add new tasks. They will automatically be saved.

## Technologies Used

*   **HTML5**: For the structure of the web page.
*   **CSS3**: For styling and layout.
*   **JavaScript (ES6+)**: For interactive functionality, DOM manipulation, and LocalStorage management.

## Project Structure

*   `index.html`: The main HTML file that provides the structure of the application.
*   `style.css`: Contains all the CSS rules to style the To-Do Tracker.
*   `script.js`: Implements the core logic of the application, including task management, LocalStorage interaction, and event handling.
*   `README.md`: This file, providing information about the project.
*   `LICENSE`: The MIT License under which this project is distributed.
