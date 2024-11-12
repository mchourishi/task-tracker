import { Request, Response } from "express";
import Task from "../models/taskModel";

// Get all Tasks
export const getAllTssks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tasks = await Task.find(); // Fetches all tasks
    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new task
export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update task
export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTask) {
      res.status(404).json({ message: "Task not found." });
    }
    res.status(200).json(updatedTask);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete task
export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully." });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
