function getInvoices() {
  const invoices = localStorage.getItem('invoices');
  return invoices ? JSON.parse(invoices) : [];
}

function saveInvoice(invoice) {
  const invoices = getInvoices();
  invoices.push(invoice);
  localStorage.setItem('invoices', JSON.stringify(invoices));
}

function updateInvoice(index, updatedInvoice) {
  const invoices = getInvoices();
  invoices[index] = updatedInvoice;
  localStorage.setItem('invoices', JSON.stringify(invoices));
}

function deleteInvoice(index) {
  const invoices = getInvoices();
  invoices.splice(index, 1);
  localStorage.setItem('invoices', JSON.stringify(invoices));
}

export { getInvoices, saveInvoice, updateInvoice, deleteInvoice };
