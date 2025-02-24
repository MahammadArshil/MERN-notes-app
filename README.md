# 📝 Notes App

A robust and user-friendly **Notes App** built with the **MERN** stack (**MongoDB, Express.js, React, and Node.js**) Technologies. Get organized, stay in touch with your notes easily! 🚀


---

## 📌 Features

✅ **Create, Edit, and Delete Notes.**\
✅ **Search & Filter for Quick Access.**\
✅ **Secure Data Storage with MongoDB.**\
✅ **User Authentication (using JWT).**
✅ **Toast Messages (using toastify).**

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 📂 1. Clone the Repository

```sh
 git clone https://github.com/mahammadarshil/notes-app.git
 cd notes-app
```

### 🏗 2. Install Dependencies

Run the following commands inside both `frontend/` and `backend/` folders:

```sh
 cd backend
 npm install | npm i
```

```sh
 cd frontend
 npm install | npm i
```

### 🔑 3. Configure Database Connection

In the `backend/db/` folder, open the `db.js` file and update the MongoDB connection:

```js
...
 const connectToMongoDB = async () => {
    try {
        await mongoose.connect("<your_mongodb_connection_string>");
        console.log("Connected to MongoDB");
    } catch(error) {
        console.log("Error Connecting to MongoDB", error.message);
    }
};
...
```

### ▶️ 4. Run the App

Open **two terminals**, one for the backend and one for the frontend.

#### Start Backend Server 🌍

```sh
 cd backend
 npm start
```

#### Start Frontend React App 🎨

```sh
 cd frontend
 npm run dev
```

---

## 🛠 Tech Stack

- **Frontend:** React.js (Vite), TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

  &#x20;

---

## 📬 Contact

📧 Email: [[mahammadarshil007@gmail.com](mailto\:mahammadarshil007@gmail.com)]\
🔗 LinkedIn: [MahammadArshil](https://www.linkedin.com/in/mahammadarshil-vahora/)

---

Made with ❤️ by **MahammadArshil Vahora** 🚀

