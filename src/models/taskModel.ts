import mongoose, { Schema, Document } from "mongoose";

interface ITask extends Document {
  title: string;
  description: string;
  completed: boolean;
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<ITask>("Task", TaskSchema);
