## Word Converter App
This is a simple Word Converter App built with React.js that offers various text manipulation functionalities. The app allows users to perform several actions on the text like converting text to uppercase or lowercase, clearing the text, copying it to the clipboard, and removing extra spaces.

**Features**
- Convert to Uppercase: Converts the input text to uppercase.
- Convert to Lowercase: Converts the input text to lowercase.
- Clear Text: Clears the entered text.
- Copy Text: Copies the input text to the clipboard.
- Remove Extra Spaces: Removes unnecessary spaces from the input text.
- Light and Dark Mode: Users can toggle between light and dark mode for better accessibility.
- Alerts: Displays success or informational alerts to notify users about their actions.
  
**Tech Stack**
- React.js: The frontend framework used to build the app.
- Bootstrap: A CSS framework used for styling and responsive design.
- React Router: For navigation between different pages within the app.
- JavaScript: Programming language used for functionality and interactivity.

**Installation**
To run this project locally, follow these steps:

**1) Clone the repository:**
```bash
git clone https://github.com/your-username/word-converter-app.git
```

**2) Navigate to the project directory:**
```bash
cd word-converter-app
```

**3) Install the dependencies:**
```bash
npm install
```

**4) Run the app:**
```bash
npm start
```

5)Open your browser and go to http://localhost:3000 to view the app.

**Usage**
- On the homepage, you can enter text in the provided textarea and use the various buttons to manipulate the text.
- The "Enable Dark Mode" toggle button allows you to switch between light and dark themes, and it updates the background color of the page accordingly.
- When any of the actions are performed, an alert is displayed at the top of the page notifying the user of the action taken.
  
**Components**
1. App.js
- The root component of the application.
- Sets up routing with React Router.
- Contains the dark/light mode toggle functionality.

2. Navbar.js
- A navigation bar that allows the user to navigate between the "Home" and "About" pages.
- Includes a switch to toggle between light and dark mode.

3. Alert.js
- Displays alerts to inform the user of the action taken (e.g., text copied, mode switched).

4. TextForm.js
- Main functional component for text manipulation.
- Includes features to convert text to uppercase, lowercase, clear text, copy text, and remove extra spaces.

5. About.js
- Contains informational content and an accordion component that can be expanded to display more information.
- Displays content depending on whether the app is in light or dark mode.
  
**Light and Dark Mode**
The app supports both light mode and dark mode for a better user experience. The background color and text color change accordingly when the user toggles the mode.

**Folder Structure**
```bash
src/
├── components/
│   ├── About.js
│   ├── Alert.js
│   ├── Navbar.js
│   ├── TextForm.js
├── App.js
├── App.css
├── index.js
└── index.html
```

**Demo**
You can try the live demo of this application by visiting the deployed website.

**Contributing**
Feel free to fork this repository and submit pull requests. Contributions are always welcome.
- Fork the repository
- Create a new branch (git checkout -b feature/your-feature-name)
- Make changes and commit them (git commit -am 'Add new feature')
- Push to the branch (git push origin feature/your-feature-name)
- Open a pull request
