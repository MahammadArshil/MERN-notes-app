import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/note_app");
        console.log("Connected to Mongo DB");
    } catch(error){
        console.log("Error Connecting to Mongo DB",error.message);
    }
}

export default connectToMongoDB;