const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
    },
    max_point: {
      type: Number,
      default: 10,
    },
    completed: {
      //No of people that has completed this task
      type: Number,
      default: 0,
    },
    started: {
      //No of people that has started this task
      type: Number,
      default: 0,
    },
    deadline: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
