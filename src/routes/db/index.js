import mongoose from 'mongoose';

const dbUser = process.env.DB_USER;
const dbPass = process.env.DM_PASS;
const connectionString = "mongodb://${dbUser}:${dbPass}@ds113700.mlab.com:13700/kenzie1127"

mongoose.connect(connectionString);
