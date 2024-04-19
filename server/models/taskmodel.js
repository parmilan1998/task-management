import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const TaskModel = mongoose.model('TaskModel', taskSchema)
export default TaskModel
