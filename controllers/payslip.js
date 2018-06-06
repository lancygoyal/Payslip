/* -----------------------------------------------------------------------
   * @ description : This is the payslip controller layer.
----------------------------------------------------------------------- */

import { genrateSlip } from '../services/payslip';
import { failAction, successAction } from '../utilities/rest';
// import Messages from '../utilities/messages';
// import logger from '../utilities/logger';

export const genrate = async (request, h) => {
  const { payload } = request;
  try {
    const data = await genrateSlip(payload);
    return successAction(data);
  } catch (error) {
    failAction(error.message);
  }
};
