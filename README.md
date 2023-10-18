# Project Name

A brief description of your project goes here.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Getting Started](#getting-started)
4. [Folder Structure](#folder-structure)
5. [Authentication and Authorization](#authentication-and-authorization)
6. [Internationalization](#internationalization)
7. [Async Data Fetching](#async-data-fetching)
8. [No SSR (Server-Side Rendering) Component](#no-ssr-server-side-rendering-component)
9. [External Dependencies](#external-dependencies)
10. [API Usage](#api-usage)

## Introduction

Provide a brief introduction to your project, including its purpose and key features.

## Installation

Installation process for the project.

1. Clone the repository

- git clone <https://github.com/ameeriit/redux-practise-proj.git>

2. Open Project

- Open the folder in your Code Editor(Vs-code Preferred).
- Go to terminal.

3. Install dependencies

- npm install

## Getting Started

1. Start the development server

- npm run dev

## Folder Structure

- pages/
- components/
- redux/
- public/

## Authentication and Authorization

This project implements authentication and authorization using an API call, Redux for data management, and cookies for token storage. The following steps explain how authentication and authorization are achieved:

1. Login and API Call:

- Users can log in to the application, which sends a request to the authentication API (e.g., https://dummyjson.com/auth) to verify their credentials.
- An async thunk, powered by Redux Toolkit, handles the login process, making the API request, and saving the user's data in the Redux store.

2. Token and Cookie Storage:

- Upon successful login, the API provides an authentication token.
- This token is saved in a secure cookie for later use. The user's data is also saved in cookies for persistence between sessions.

3. Protected Routes:

- To secure routes that require user authorization, this project uses protected routes.
- Protected routes prevent unauthorized users from accessing specific pages. Only authenticated users with valid tokens can access these routes.

4. Redux for Data Management:

- Redux is utilized to manage user data, authentication state, and other global app states.
- When data is fetched from the API, it is stored in Redux, making it accessible across the application.
- With these mechanisms in place, your application ensures that only authorized users can access protected pages while providing a seamless and secure login experience. The user's data is efficiently managed using Redux, enhancing the overall user experience.

## Internationalization

This project uses Next.js Internationalization to support multiple languages, including English and Nepali. The following steps explain how internationalization is implemented:

1. Locale Configuration:

- The project supports two languages, English (en) and Nepali (np).
- The language and localization settings are managed using Next.js middleware.

2. Folder Structure:

- A nested folder structure is used to organize localized content.
- All pages and routes related to a specific language are placed within a dedicated [lang] folder.

3. Dictionaries:

- The project maintains a dictionaries folder that contains text and translations for the supported languages.
- Each language has its own dictionary file, which includes text and translations used throughout the application.

4. Localization Configuration:

- The configuration for the default language and the supported languages (en, np) is managed within the i18n-config.ts file.

5. Using Translations:

- To display localized text, import the respective dictionary file and use the translation keys within your components.
- For example, if you want to display the "Hello, World" text, you would use the translation key, and the correct translation will be displayed based on the selected language. Your can see Example in home page which is implemented there.

With this internationalization setup, your application can seamlessly switch between different languages, making it accessible and user-friendly for a broader audience. Feel free to expand on this information or provide code examples relevant to your project to further clarify the implementation.

## Asynchronous Data Fetching

In this project, asynchronous data fetching is implemented to facilitate user authentication and data retrieval. The following steps outline how this process works:

1. Login Form and Input:

- A login form is provided where users input their username and password.

2. Async Thunk with Axios:

- To handle the login process, Redux Toolkit is used, along with an asynchronous action (thunk).
  Axios, a popular HTTP client, is used to make POST requests to the authentication API (e.g., https://dummyjson.com/auth/login).
- The user's username and password are sent as part of the request.

3. API Response and Data Storage:

- Upon successful authentication, the API responds with data, typically including an authentication token.
- This data is captured and saved, ensuring that the user remains logged in during their session.
- The data is converted to a JSON string using JSON.stringify and stored in cookies for future use.

4. Redux Toolkit for State Management:

- Redux Toolkit is employed to manage user data and global state.
- Data fetched from the API, such as the user's profile or authentication status, is stored in the Redux store.

## No SSR (Server-Side Rendering) Component

In certain scenarios, issues related to data fetching and rendering timing can lead to "hydration" problems. Hydration issues occur when data required by a component is fetched and available after the initial HTML render, causing inconsistencies or errors. These issues can be challenging to diagnose and resolve, especially in production.

To address this, we've implemented a solution involving the use of "no-SSR" components within our Next.js application. Here's a more detailed explanation:

1. Hydration Challenges:

- In complex applications, data fetching and rendering can be asynchronous processes.
- In some cases, data might not be available before the initial HTML rendering is completed, causing unexpected behavior and errors.
  Dynamic No-SSR Rendering:

2. To mitigate hydration issues, we use dynamic "no-SSR" components within specific pages or components.

- A "no-SSR" component instructs the client-side renderer to skip server-side rendering and hydrate only on the client side. This ensures that data is available before rendering on the client.

3. Benefits:

- By selectively using "no-SSR" components, we can isolate and resolve hydration issues without affecting the entire application.
- This approach is particularly valuable during debugging or when addressing issues under tight deadlines.

In summary, "no-SSR" components are a valuable tool for preventing hydration issues in Next.js applications. They enable us to control when and how client-side rendering occurs, helping to ensure a smoother and more reliable user experience, especially in cases where data retrieval and rendering timing are critical.

## External Dependencies

- intl-localematcher
- redux toolkit
- axios
- js-cookie
- negotiator

## API Usage

"The API is freely accessible and comes with its documentation, readily available on its website. Please feel free to explore and utilize it based on your project's specific requirements and preferences."

**\*\*\*\***(https://dummyjson.com)**\*\*\*\***

Feel free to adapt this text to your specific project details and expand it further if necessary.
