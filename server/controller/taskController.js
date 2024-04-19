import TaskModel from '../models/taskmodel.js'

// Create task api endpoint
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body
    const tasks = new TaskModel({ title, description })
    await tasks.save()
    res.status(201).json(tasks)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Task creation failed!' })
  }
}

// get tasks api endpoint
export const getTask = async (req, res) => {
  try {
    const tasks = await TaskModel.find()
    res.status(201).json(tasks)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Get task list failed!' })
  }
}

// update tasks api endpoint
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description } = req.body
    const result = await TaskModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    )

    // Check if task is already there
    if (!result) {
      res.status(404).json({ message: 'Task not found' })
    }

    res.status(201).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Update task failed!' })
  }
}

// delete tasks api endpoint
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const deleteTask = await TaskModel.findByIdAndDelete(id)
    res.status(201).json({ message: 'Task deleted successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Delete task failed!' })
  }
}
