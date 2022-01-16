import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UsersSchema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    phoneNumber: { type: String },
    profilePicture: { type: String },
  },
  {
    collection: 'users',
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
  },
);
