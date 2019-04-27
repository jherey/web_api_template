import { SchemaTypes } from 'mongoose';
import BaseSchema from './BaseSchema';

const todoSchema = new BaseSchema({
  todo: {
    type: SchemaTypes.String,
    required: true,
    index: true,
  },
  priority: {
    type: Number,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export default todoSchema;
