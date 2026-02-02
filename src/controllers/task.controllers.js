import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import { Task } from "../models/task.models.js";
import { SubTask } from "../models/subTask.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiErrors } from "../utils/api-errors.js";
import mongoose from "mongoose";
import { ProjectMember } from "../models/projectmembers.models.js";
import { AvailableUserRole, UserRolesEnum } from "../utils/constants.js";

const createTask = asyncHandler(async (req, re) => {});

const createSubTask = asyncHandler(async (req, re) => {});

const deleteTask = asyncHandler(async (req, re) => {});

const deleteSubTask = asyncHandler(async (req, re) => {});

const getTasks = asyncHandler(async (req, re) => {});

const getTaskById = asyncHandler(async (req, re) => {});

const updateTask = asyncHandler(async (req, re) => {});

const updateSubTask = asyncHandler(async (req, re) => {});

export {
  createTask,
  createSubTask,
  deleteSubTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateSubTask,
  updateTask,
};
