'use strict';
const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');
const allRows = document.querySelectorAll('tbody tr');
headers.forEach((th, i)=>{
    th.setAttribute('data-order', 'desc');
    th.addEventListener('click', ()=>{
        sortByColumn(i, th);
    });
});
function sortByColumn(columnIndex, headersElem) {
    const currentOrder = headersElem.getAttribute('data-order');
    const newOrder = currentOrder === 'desc' ? 'asc' : 'desc';
    const sortedRows = Array.from(allRows).sort((rowA, rowB)=>{
        const cellA = rowA.children[columnIndex];
        const cellB = rowB.children[columnIndex];
        const textA = cellA.textContent.trim();
        const textB = cellB.textContent.trim();
        const valA = columnIndex === 2 || columnIndex === 3 ? parseFloat(textA.replace('$', '').replace(',', '')) : textA;
        const valB = columnIndex === 2 || columnIndex === 3 ? parseFloat(textB.replace('$', '').replace(',', '')) : textB;
        let comparison = 0;
        if (valA < valB) comparison = -1;
        else if (valA > valB) comparison = 1;
        if (newOrder === 'asc') return comparison *= -1;
        return comparison;
    });
    headers.forEach((h)=>h.removeAttribute('data-order'));
    headersElem.setAttribute('data-order', newOrder);
    sortedRows.forEach((row)=>{
        tbody.appendChild(row);
    });
}

//# sourceMappingURL=js_sort_table_DOM.f75de5e1.js.map
