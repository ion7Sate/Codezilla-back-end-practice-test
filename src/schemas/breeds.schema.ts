import * as mongoose from 'mongoose';
import { BreedTypesEnum } from '../common/constants/breed-types.enum';

const Schema = mongoose.Schema;

export const BreedsSchema = new Schema(
  {
    name: { type: String },
    type: { type: Number, default: BreedTypesEnum.UNKNOWN },
  },
  {
    collection: 'breeds',
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
  },
);
