import React from 'react';
import { expect } from 'chai';
import { genrateSlip } from '../../services/payslip';

describe('payslip component', () => {
  it('Should return incomeTax zero when salary is equal to 5000', () => {
    const payload = {
      firstName: 'John',
      lastName: 'Doe',
      annualSalary: 5000,
      superRate: 10,
      startDate: 'May 2018'
    };
    const paySlip = genrateSlip(payload);

    expect(paySlip.incomeTax).to.equal(0);
    expect(paySlip.fullName).to.equal('John Doe');
    expect(paySlip.superAmount).to.equal(42);
    expect(paySlip.netIncome).to.equal(417);
    expect(paySlip.grossIncome).to.equal(417);
  });

  it('Should return incometax 2 when salary is inbetween 18201 and 37000', () => {
    const payload = {
      firstName: 'John',
      lastName: 'Doe',
      annualSalary: 18300,
      superRate: 10,
      startDate: 'May 2018'
    };
    const paySlip = genrateSlip(payload);

    expect(paySlip.incomeTax).to.equal(2);
    expect(paySlip.fullName).to.equal('John Doe');
    expect(paySlip.superAmount).to.equal(153);
    expect(paySlip.netIncome).to.equal(1523);
    expect(paySlip.grossIncome).to.equal(1525);
  });

  it('Should return incometax 515 when salary is inbetween 37001 and 87000', () => {
    const payload = {
      firstName: 'John',
      lastName: 'Doe',
      annualSalary: 45000,
      superRate: 10,
      startDate: 'May 2018'
    };
    const paySlip = genrateSlip(payload);

    expect(paySlip.incomeTax).to.equal(515);
    expect(paySlip.fullName).to.equal('John Doe');
    expect(paySlip.superAmount).to.equal(375);
    expect(paySlip.netIncome).to.equal(3235);
    expect(paySlip.grossIncome).to.equal(3750);
  });

  it('Should return incometax 1745 when salary is inbetween 87001 and 180000', () => {
    const payload = {
      firstName: 'John',
      lastName: 'Doe',
      annualSalary: 90000,
      superRate: 10,
      startDate: 'May 2018'
    };
    const paySlip = genrateSlip(payload);

    expect(paySlip.incomeTax).to.equal(1745);
    expect(paySlip.fullName).to.equal('John Doe');
    expect(paySlip.superAmount).to.equal(750);
    expect(paySlip.netIncome).to.equal(5755);
    expect(paySlip.grossIncome).to.equal(7500);
  });
});
