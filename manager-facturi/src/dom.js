import {
  saveInvoice,
  deleteInvoice,
  getInvoices,
  updateInvoice,
} from "./storage.js";

function displayInvoices() {
  const invoiceList = document.getElementById("invoiceList");
  invoiceList.innerHTML = "";

  getInvoices().forEach((invoice, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span><strong>${
              invoice.type
            }</strong> <br/> <strong>Sumă:</strong> ${
      invoice.amount
    } lei<br/><strong> Scadență:</strong> ${
      invoice.dueDate
    }<br/><strong> Status:</strong> ${
      invoice.paid ? "Plătit" : "Neplătit"
    }</span>
            <button class="delete-button">Șterge</button>
            <button class="mark-paid-button" ${
              invoice.paid ? "disabled" : ""
            }>Marchează ca Plătit</button>
        `;

    // Atașăm un event listener pentru butonul de ștergere
    const deleteButton = li.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => handleDeleteInvoice(index));

    // Atașăm un event listener pentru butonul de marcare ca plătit
    const markPaidButton = li.querySelector(".mark-paid-button");
    markPaidButton.addEventListener("click", () => handleMarkAsPaid(index));

    invoiceList.appendChild(li);
  });
}

function handleDeleteInvoice(index) {
  deleteInvoice(index);
  displayInvoices();
}

function handleMarkAsPaid(index) {
  const invoices = getInvoices();
  invoices[index].paid = true;
  updateInvoice(index, invoices[index]);
  displayInvoices();
}

export { displayInvoices, handleDeleteInvoice, handleMarkAsPaid };
