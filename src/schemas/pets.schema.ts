import * as mongoose from 'mongoose';

const Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId;

export const PetsSchema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    breedId: { type: ObjectId, ref: 'breeds' },
    userId: { type: ObjectId, ref: 'users' },
  },
  {
    collection: 'pets',
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
  },
);
