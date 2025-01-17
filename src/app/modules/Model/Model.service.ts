import { PrismaClient } from "@prisma/client";
import prisma from "../../../shared/prisma";



export const createModel = async (payload: { name: string }) => {
  try {
    const model = await prisma.model.create({
      data: {
        name: payload.name,
      },
    });
    return model;
  } catch (error) {
    throw new Error(`Error creating model: ${error.message}`);
  }
};

export const getModelById = async (id: string) => {
  try {
    const model = await prisma.model.findUnique({
      where: { id },
    });
    if (!model) throw new Error(`Model with ID ${id} not found`);
    return model;
  } catch (error) {
    throw new Error(`Error retrieving model: ${error.message}`);
  }
};

export const getAllModels = async () => {
  try {
    const models = await prisma.model.findMany();
    return models;
  } catch (error) {
    throw new Error(`Error retrieving models: ${error.message}`);
  }
};

export const updateModelById = async (id: string, payload: { name?: string }) => {
  try {
    const model = await prisma.model.update({
      where: { id },
      data: payload,
    });
    return model;
  } catch (error) {
    throw new Error(`Error updating model: ${error.message}`);
  }
};

export const deleteModelById = async (id: string) => {
  try {
    await prisma.model.delete({
      where: { id },
    });
    return { message: `Model with ID ${id} successfully deleted` };
  } catch (error) {
    throw new Error(`Error deleting model: ${error.message}`);
  }
};
