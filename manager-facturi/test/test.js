// test.js

import { expect } from "chai";
import { LocalStorage } from "node-localstorage";
import {
  getInvoices,
  saveInvoice,
  updateInvoice,
  deleteInvoice,
} from "../src/storage.js";

global.localStorage = new LocalStorage("./scratch");

describe("Invoice Storage Functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save an invoice', () => {
    const invoice = { type: 'Digi', amount: 100, dueDate: '2024-11-29', paid: false }

    saveInvoice(invoice)

    const invoicesLS = getInvoices()
    expect(invoicesLS).to.have.lengthOf(1)
    expect(invoicesLS[0]).to.deep.equal(invoice)
  })

  it('should get all invoices', () => {
    const invoice1 = { type: 'Digi', amount: 100, dueDate: '2024-11-29', paid: false }
    const invoice2 = { type: 'Electrica', amount: 150, dueDate: '2024-11-29', paid: false }

    saveInvoice(invoice1)
    saveInvoice(invoice2)

    const invoicesLS = getInvoices()
    expect(invoicesLS).to.have.lengthOf(2)
  })

  it('should update an invoice', () => {
    const invoice = { type: 'Digi', amount: 100, dueDate: '2024-11-29', paid: false }
    saveInvoice(invoice)

    invoice.paid = true

    updateInvoice(0, invoice)

    const invoicesLS = getInvoices()
    expect(invoicesLS[0].paid).to.be.true
  })

  it('should delete an invoice by index', () => {
    const invoice1 = { type: 'Digi', amount: 100, dueDate: '2024-11-29', paid: false }
    const invoice2 = { type: 'Electrica', amount: 150, dueDate: '2024-11-29', paid: false }

    saveInvoice(invoice1)
    saveInvoice(invoice2)

    deleteInvoice(0)

    const invoicesLS = getInvoices()

    expect(invoicesLS).to.have.lengthOf(1)
    expect(invoicesLS[0]).to.deep.equal(invoice2)
  })
});
