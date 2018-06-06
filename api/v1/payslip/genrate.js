import Joi from 'joi';
import { genrate } from '../../../controllers/payslip';

export default {
  method: 'POST',
  path: '/api/v1/payslip/genrate',
  config: {
    auth: false,
    description: 'Api service used to generate the payslip.',
    notes:
      '<br/>The request object should contain following fields in its <b>Payload/Body</b> object',
    tags: ['api', 'payslip'],
    validate: {
      payload: {
        firstName: Joi.string()
          .required()
          .label('First Name'),
        lastName: Joi.string()
          .required()
          .label('Last Name'),
        annualSalary: Joi.number()
          .positive()
          .required()
          .label('Annual Salary'),
        superRate: Joi.number()
          .positive()
          .min(0)
          .max(12)
          .required()
          .label('Super Rate'),
        startDate: Joi.string()
          .required()
          .label('Start Date')
      }
    }
  },
  handler: genrate
};
