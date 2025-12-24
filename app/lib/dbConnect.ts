import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

console.log("mongoDb", MONGODB_URI);


if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};


export async function DBConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log('Already connected');

    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI || '', {});
    connection.isConnected = mongoose.connections[0].readyState;
    console.log('New connection established');
  } catch (error) {
    console.log('error', error);
    process.exit(1);

  }

}
