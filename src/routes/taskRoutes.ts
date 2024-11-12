import * as express from "express";
import {
  getAllTssks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController";

const router = express.Router();

router.get("/tasks", getAllTssks);
router.post("/tasks", createTask);
router.put("tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
