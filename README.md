# Chit-Chat 💬

A modern, real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring instant messaging, user profiles, and media sharing.



## ✨ Features

### 🔐 Authentication & User Management
- **Secure Sign Up & Login** with JWT tokens
- **User Profiles** with customizable avatars and bios
- **Online/Offline Status** indicators
- **Persistent Sessions** with automatic login

### 💬 Real-time Messaging
- **Instant Message Delivery** with Socket.io
- **Read Receipts** and typing indicators
- **Media Sharing** - Send images and files in chats
- **Message History** with scrollable chat archives
- **Real-time Notifications** for new messages

### 🎨 User Interface
- **Responsive Design** that works on all devices
- **Modern Glass-morphism UI** with beautiful gradients
- **Dark Theme** with easy-on-the-eyes color scheme
- **Intuitive Navigation** with sidebar and chat panels

### 🔒 Security & Performance
- **Password Encryption** using bcrypt
- **JWT Authentication** for secure API calls
- **Image Optimization** with Cloudinary integration
- **Real-time Updates** without page refresh

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling and responsive design
- **React Router** - Navigation and routing
- **Socket.io Client** - Real-time communication
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Socket.io** - Real-time bidirectional communication
- **JWT** - Authentication tokens
- **Cloudinary** - Image storage and optimization
- **bcrypt** - Password hashing

### Deployment
- **Vercel** - Frontend and backend hosting
- **MongoDB Atlas** - Cloud database

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image storage)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Prakhar-PM/chat-app-deployment-repo.git
cd chat-app-deployment-repo
```

2. **Install dependencies**
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. **Environment Configuration**
Create `.env` files in both `server` and `client` directories:

**Server (.env)**
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

**Client (.env)**
```env
VITE_BACKEND_URL=your_backend_url
```

4. **Run the application**
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend development server (from client directory)
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## 📱 Usage

1. **Sign Up**: Create a new account with email and password
2. **Set Up Profile**: Upload a profile picture and add a bio
3. **Find Users**: Search for other users in the sidebar
4. **Start Chatting**: Click on any user to start a conversation
5. **Share Media**: Use the gallery icon to send images
6. **Stay Connected**: See who's online with green indicators

## 🏗️ Project Structure

```
chat-app-deployment-repo/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   ├── assets/         # Images and icons
│   │   └── App.jsx         # Main app component
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/        # Route controllers
│   ├── routes/             # API routes
│   ├── models/             # MongoDB models
│   ├── lib/                # Utility functions
│   └── server.js           # Server entry point
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/check-auth` - Verify authentication
- `PUT /api/auth/update-profile` - Update user profile

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get specific user

### Messages
- `GET /api/messages/:userId` - Get messages with a user
- `POST /api/messages` - Send a new message

## 🌟 Key Features in Detail

### Real-time Communication
- Built with Socket.io for instant message delivery
- Online/offline status updates in real-time
- No page refresh needed for new messages

### Media Handling
- Image uploads processed through Cloudinary
- Automatic optimization and compression
- Secure file type validation

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interface elements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Prakhar Mishra**
- GitHub: [@Prakhar-PM](https://github.com/Prakhar-PM)
- Project Repository: [chat-app-deployment-repo](https://github.com/Prakhar-PM/chat-app-deployment-repo)

## 🙏 Acknowledgments

- Icons and UI inspiration from various design systems
- Socket.io for real-time functionality
- Vercel for seamless deployment
- MongoDB Atlas for reliable database hosting

---

**Ready to start chatting?** Visit [https://chat-app-deployment-repo-2a29.vercel.app/](https://chat-app-deployment-repo-2a29.vercel.app/) and connect with others! 🚀

---

*If you encounter any issues or have suggestions, please open an issue on the [GitHub repository](https://github.com/Prakhar-PM/chat-app-deployment-repo).*
