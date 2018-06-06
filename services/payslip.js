/* -----------------------------------------------------------------------
   * @ description : This is the payslip service layer.
----------------------------------------------------------------------- */

// import Messages from '../utilities/messages';
// import * as Universal from '../utilities/universal';
// import logger from '../utilities/logger';

const taxSlabs = [
  {
    min: 0,
    max: 18200,
    tax: 0,
    over: 0,
    fixed: 0
  },
  {
    min: 18201,
    max: 37000,
    tax: 19,
    over: 18200,
    fixed: 0
  },
  {
    min: 37001,
    max: 87000,
    tax: 32.5,
    over: 37000,
    fixed: 3572
  },
  {
    min: 87001,
    max: 180000,
    tax: 37,
    over: 87000,
    fixed: 19822
  },
  {
    min: 180001,
    max: Infinity,
    tax: 45,
    over: 180000,
    fixedTax: 54232
  }
];

const findTaxSlab = data => {
  let result;
  taxSlabs.forEach(slab => {
    if (data.annualSalary >= slab.min && data.annualSalary <= slab.max) {
      result = slab;
      return;
    }
  });
  return result;
};

const calculateTax = (annualSalary, slab) => {
  let taxableIncome = Math.round(annualSalary - slab.over),
    monthlyTaxableIncome = Math.round(taxableIncome / 12),
    monthlyFixedTax = Math.round(slab.fixed / 12),
    tax = monthlyTaxableIncome * slab.tax / 100;
  return Math.round(tax) + monthlyFixedTax;
};

export const genrateSlip = payload => {
  const slab = findTaxSlab(payload);
  const fullName = payload.firstName + ' ' + payload.lastName,
    monthlyIncome = Math.round(payload.annualSalary / 12),
    incomeTax = calculateTax(payload.annualSalary, slab),
    netIncome = monthlyIncome - incomeTax,
    superAmount = Math.round(monthlyIncome * payload.superRate / 100);

  return {
    fullName,
    payPeriod: payload.startDate,
    grossIncome: monthlyIncome,
    incomeTax,
    netIncome,
    superAmount
  };
};
