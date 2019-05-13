import { SchemaTypes } from 'mongoose';
import BaseSchema from './BaseSchema';

const todoSchema = new BaseSchema({
  title: {
    type: SchemaTypes.String,
    required: true,
    index: true,
  },
  priority: {
    type: Number,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export default todoSchema;
