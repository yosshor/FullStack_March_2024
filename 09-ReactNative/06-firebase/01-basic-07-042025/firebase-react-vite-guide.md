# Setting Up Firebase in a React-Vite Project

This guide walks you through the process of setting up and initializing Firebase in a React application built with Vite.

## Prerequisites

- Node.js installed (v14.x or later recommended)
- npm or yarn package manager
- Basic understanding of React and JavaScript

## Step 1: Create a New Vite Project with React

First, let's create a new Vite project with React:

```bash
npm create vite@latest my-firebase-app -- --template react
cd my-firebase-app
npm install
```

## Step 2: Install Firebase and Firebase Tools

Install the Firebase SDK and Firebase Tools CLI:

```bash
# Install Firebase SDK
npm install firebase

# Install Firebase Tools globally
npm install -g firebase-tools
```

The Firebase SDK is what you'll use in your app to interact with Firebase services, while firebase-tools is the CLI tool for deploying and managing your Firebase projects.

## Step 3: Log in to Firebase CLI

Authenticate with Firebase using the CLI tool:

```bash
firebase login
```

This will open a browser window where you can sign in with your Google account that has access to Firebase.

## Step 4: Initialize Firebase in Your Project

Initialize Firebase in your project directory:

```bash
firebase init
```

Follow the prompts:
1. Select the Firebase services you want to use (Hosting, Firestore, Authentication, rules, emulators, etc.)
2. Select or create a Firebase project
3. Configure your setup options for each service
4. When asked about the public directory, enter `dist` (Vite's default build output directory)
5. Configure any other settings as prompted

## Step 5: Create a Firebase Configuration File

Create a new file called `src/firebase.js` with your Firebase configuration:

```javascript
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore,connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
if (import.meta.env.DEV) {
    // connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
    // connectStorageEmulator(storage, 'localhost', 9199);
    console.log('Using Firebase emulators');
}


// Export the services for use in other files
export { app, auth, db, storage };
```

> **Note:** Replace the placeholder values in the `firebaseConfig` object with your actual Firebase project details. You can find these in the Firebase console under Project Settings.

## Step 6: Get Your Firebase Configuration

To get your Firebase configuration:

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click on the gear icon (⚙️) next to "Project Overview" to open Project Settings
4. Scroll down to the "Your apps" section and select your web app (or create one)
5. Under the "SDK setup and configuration" section, you'll find your Firebase configuration

## Step 7: Using Firebase in Your React Components

Here's a basic example of how to use Firebase Authentication in a component:

```jsx
// src/components/Auth.jsx
import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created!');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in!');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('Signed out!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Authentication</h2>
      <form>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
      </form>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Auth;
```

## Step 8: Using Environment Variables for Firebase Config (Recommended)

For better security, store your Firebase configuration in environment variables:

1. Create a `.env` file in your project root:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

2. Update your Firebase configuration:

```javascript
// src/firebase.js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
```

> **Important:** Make sure to add `.env` to your `.gitignore` file to prevent sensitive information from being committed to your repository.

## Step 9: Running Emulators
```bash
firebase emulators:start --only firestore
```
This command will start the Firebase emulators for the services you selected during initialization. You can access the emulators at `http://localhost:4000` (or other ports depending on your configuration).
## Step 10: Testing Your App
Run your app locally to test Firebase functionality:

```bash
npm run dev
```
## Step 9: Deployment

Deploy your app to Firebase Hosting:

```bash
# Build your Vite app
npm run build

# Deploy to Firebase
firebase deploy
```

## Troubleshooting

### Issue: "Module not found: Error: Can't resolve 'firebase'"
- Make sure you've installed the Firebase SDK with `npm install firebase`

### Issue: "Firebase App named '[DEFAULT]' already exists"
- Make sure you're only initializing Firebase once in your application

### Issue: CORS errors when using Firebase Storage
- Configure CORS for your Firebase Storage bucket using the firebase-tools CLI

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
