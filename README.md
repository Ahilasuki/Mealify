# Mealify  

A beautifully designed, cross-platform recipe discovery application built with React Native. Mealify allows users to browse global and regional cuisines, filter by dietary preferences, and save their favorite recipes locally.

##  Features

* **Smart Search & Filtering:** Instantly search for recipes globally or filter specifically by category (e.g., All Indian, Veg, Non-Veg) using a custom-built segmented tab control.
* **State Management:** Utilizes **Redux** to manage global state, allowing users to effortlessly save and remove favorite recipes across different screens.
* **Dynamic UI Components:** Features a custom auto-scrolling image carousel with interactive pagination dots, built entirely with native components for maximum performance.
* **Responsive Layouts:** Implements modern Flexbox techniques to ensure pixel-perfect rendering across varying screen sizes.
* **API Integration:** Seamlessly fetches and filters asynchronous data from [TheMealDB API](https://www.themealdb.com/api.php).

##  Tech Stack

* **Framework:** React Native
* **State Management:** Redux / React-Redux
* **Navigation:** React Navigation (Bottom Tabs & Stack Navigator)
* **Networking:** Axios 
* **Icons:** React Native Vector Icons


##  Screenshots

| Home Screen | Filtered View | Recipe Details | Favorites |
|:---:|:---:|:---:|:---:|
| ![Home](./screenshots/Home.png) | ![Filters](./screenshots/Filtered_image.png) | ![Receipe](./screenshots/Recipe_screen.png) | ![Favorites](./screenshots/Favorites_screen.png) |


##  Getting Started

### Prerequisites
* Node.js
* React Native CLI
* Android Studio or Xcode (for iOS)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ahilasuki/Mealify.git](https://github.com/Ahilasuki/Mealify.git)
2. **Navigate to the project directory:**
   ```bash
   cd Mealify
3. **Install dependencies:**
   ```bash
   npm install
4. **Run the application:**
   - For Android:
     ```bash
     npx react-native run-android
   - For iOS:
     ```bash
     npx react-native run-ios  
##  Project Structure
```
Mealify/
├── src/
│   ├── components/        # Reusable UI components
│   ├── screens/           # Screen components for navigation
│   ├── store/             # Redux store, actions, reducers
│   ├── api/               # API service for fetching data
|   |__ navigation/          # Navigation setup (Bottom Tabs & Stack Navigator)
|   |__ utils/               # Utility functions and constants
│   └── assets/            # Images, icons, and other static assets
├── App.js                # Entry point of the application
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```
