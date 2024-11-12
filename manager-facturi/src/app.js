import { saveInvoice } from './storage.js';
import { displayInvoices } from './dom.js';

document.getElementById('invoiceForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const type = document.getElementById('invoiceType').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const dueDate = document.getElementById('dueDate').value;

    const invoice = { type, amount, dueDate, paid: false };
    saveInvoice(invoice);
    displayInvoices();

    document.getElementById('invoiceForm').reset();
});

displayInvoices();
