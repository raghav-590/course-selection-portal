# Course Selection Portal 

A clean, modern, and fully responsive web application designed for students to browse and select academic courses. This portal provides an interactive card-based interface that tracks and displays chosen options in real time.

## Features

- **Interactive Selection Mechanism:** Select any course card to instantly highlight it and dynamically render your enrollment confirmation status at the top of the portal.
- **Dynamic UI State Management:** Automatically updates button micro-copy (e.g., changing from "Select Course" to "Selected") and syncs corresponding visual border transitions smoothly.
- **Auto-Focus Accessibility:** Automatically handles smooth auto-scrolling directly to your active selection display card upon clicking.
- **Modern Responsive Layout:** Utilizes CSS Grid layouts and clean `@media` query break-points to optimize formatting across mobile, tablet, and desktop viewports.
- **Clean Structure:** Designed with strict separation of concerns across single distinct modular files for structure, styling, and interactivity.

## Technology Stack

- **HTML5:** Semantic architecture (`<nav>`, `<main>`, `<section>`, `<footer>`).
- **CSS3:** Custom transition curves (`cubic-bezier`), responsive adjustments, sticky navigation tracking, and uniform component elevations.
- **JavaScript (ES6):** Client-side state transitions, iterative DOM manipulation, and dynamic inner HTML layout modification hooks.

## Project Architecture

```text
├── index.html       # Structural layouts, course data grids, and component wrappers
├── style.css        # Visual styles, hover transitions, and viewport configurations
└── script.js        # Event tracking logic and automated DOM update cycles
```

## Setup and Usage 

- **Clone or Download the Repository:** If you have Git installed, run the following command in your terminal:
```bash 
git clone https://github.com/raghav-590/course-selection-portal
```
Alternatively, click on the green Code button at the top right of this repository page and select Download ZIP, then extract the files.
- **Open the Project:**
Navigate into the project directory containing `index.html`, `style.css`, and `script.js`.
- **Launch in Browser:**
Simply double-click the `index.html` file, or right-click it and choose Open With, then select any modern web browser (such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari). No local server installation or configuration is required!

## Available Courses Inside Portal
The portal currently features the following course offerings:
| Course Code | Title | Instructor |
| :---     | :----   |     :--- |
| CS101 | Introduction to Computer Science | Dr. S.S. Singh |
| WEB201 | Fundamentals of Web Development | Prof. K. Sharma |
| CYBER301 | Introduction to Cybersecurity | Dr. S. Kaplan |
| DS401 | Data Structures & Algorithms | Prof. A. Bist |
| AI501 | Introduction to Artificial Intelligence | Dr. K. Seth |
| MATH102 | Discrete Mathematics | Prof. A. DeshPanday |

## License
This project is open-source and available under the MIT License. Feel free to use, modify, and adapt it for academic coursework exercises!

## Author
Website developed by a Raghav.