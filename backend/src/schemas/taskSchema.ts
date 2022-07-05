import Joi from 'joi';

const taskSchema = Joi.object({
  task: Joi.string().min(2).required(),
  taskStatus: Joi.number().min(1).max(3).required(),
});

export default taskSchema;
