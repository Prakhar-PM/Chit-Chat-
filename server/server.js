import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import {connectDB} from './lib/db.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import { Server } from 'socket.io';

// create express app and http server
dotenv.config();
const app = express();
const server = http.createServer(app);

// create socket io server
export const io = new Server(server,{
    cors: {origin: "*"}    
    
})

// store online users
export const userSocketMap = {};
// socket.io connection handler 
io.on("connection",(socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("new user connected", userId);   

    if(userId){
        userSocketMap[userId] = socket.id;
    }

    // emit online users to all connected clients
   io.emit("getOnlineUsers", Object.keys(userSocketMap));

   socket.on("disconnect", ()=>{
     console.log("User Disconnected", userId);
     delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap))
   })

})
// middlewares
app.use(express.json({limit: '10mb'})); ;
app.use(cors());

app.use("/api/status",(req,res)=>{
    res.send("server is live");
})
app.use("/api/auth",userRouter);
app.use("/api/messages",messageRouter);
//connect to mongoDB
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});