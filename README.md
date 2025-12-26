# 🚀 SpaceX Mission Control

A space-themed frontend application built with **React + Vite + TypeScript** that displays information about SpaceX launches using the public SpaceX API.  
The app allows users to browse launches, select a mission, and view detailed information including an embedded launch video when available.

---

## ✨ Features

- Fetches real launch data from the SpaceX API
- Displays a list of launches with basic information
- Shows detailed mission data when a launch is selected
- Embeds YouTube launch videos when available
- Handles loading, empty, and error states
- Space-inspired UI with glassmorphism and decorative background elements

---

## 🧠 Technical Decisions

- **Custom Hook (`useLaunches`)**  
  Used to encapsulate data fetching logic and manage loading and error states, keeping components clean and focused on rendering.

- **TypeScript**  
  Strong typing is used to model API responses and application state, improving reliability and developer experience.

- **Component-Based Architecture**  
  The UI is split into reusable components such as the launch list and the main detail panel.

- **CSS for Visual Design**  
  The interface uses CSS glassmorphism, layered backgrounds, and fixed decorative elements (Earth and Moon) to create a space-themed experience without impacting performance.

---

## 🛠️ Tech Stack

- React
- Vite
- TypeScript
- CSS
- SpaceX REST API

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install