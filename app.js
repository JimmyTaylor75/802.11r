// 802.11r Dashboard — Application Logic

(function () {
  'use strict';

  const searchInput       = document.getElementById('searchInput');
  const clearBtn          = document.getElementById('clearSearch');
  const manufacturerFilter = document.getElementById('manufacturerFilter');
  const tableContainer    = document.getElementById('tableContainer');
  const noResults         = document.getElementById('noResults');
  const resultCount       = document.getElementById('resultCount');

  // ---- Derive unique chipset manufacturers (preserve insertion order) ----
  const allManufacturers = [...new Set(issueData.map(d => d.chipsetManufacturer))];

  // Populate filter dropdown
  allManufacturers.forEach(mfr => {
    const opt = document.createElement('option');
    opt.value = mfr;
    opt.textContent = mfr;
    manufacturerFilter.appendChild(opt);
  });

  // ---- State ----
  let currentQuery  = '';
  let currentFilter = 'all';

  // ---- Helpers ----
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function highlight(text, query) {
    if (!query) return escapeHtml(text);
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return escapeHtml(text).replace(regex, '<mark>$1</mark>');
  }

  function matches(item, query) {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      item.chipset.toLowerCase().includes(q) ||
      item.model.toLowerCase().includes(q) ||
      item.manufacturer.toLowerCase().includes(q) ||
      item.chipsetManufacturer.toLowerCase().includes(q) ||
      item.issueText.toLowerCase().includes(q)
    );
  }

  // ---- Render ----
  function render() {
    const query  = currentQuery.trim();
    const filter = currentFilter;

    // Filter data
    const filtered = issueData.filter(item => {
      const passFilter = (filter === 'all') || (item.chipsetManufacturer === filter);
      const passSearch = matches(item, query);
      return passFilter && passSearch;
    });

    // Update count
    resultCount.textContent = `Showing ${filtered.length} of ${issueData.length} issues`;

    if (filtered.length === 0) {
      tableContainer.innerHTML = '';
      noResults.classList.remove('hidden');
      return;
    }
    noResults.classList.add('hidden');

    // Group by chipset manufacturer
    const groups = {};
    filtered.forEach(item => {
      const key = item.chipsetManufacturer;
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    });

    // Render groups in original manufacturer order
    const orderedKeys = allManufacturers.filter(m => groups[m]);

    tableContainer.innerHTML = orderedKeys.map(mfr => {
      const rows = groups[mfr];
      return `
        <div class="manufacturer-group" id="group-${slugify(mfr)}">
          <div class="group-header" onclick="toggleGroup('${slugify(mfr)}')">
            <div class="group-title">
              ${escapeHtml(mfr)}
              <span class="group-count">${rows.length} issue${rows.length !== 1 ? 's' : ''}</span>
            </div>
            <span class="group-toggle" id="toggle-${slugify(mfr)}">&#9660;</span>
          </div>
          <div class="table-wrapper" id="body-${slugify(mfr)}">
            <table>
              <thead>
                <tr>
                  <th class="col-chipset">Wireless Chipset</th>
                  <th class="col-model">Client Model Number</th>
                  <th class="col-manufacturer">Manufacturer</th>
                  <th class="col-issue">Known Issue with 802.11r</th>
                </tr>
              </thead>
              <tbody>
                ${rows.map(item => renderRow(item, query)).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderRow(item, query) {
    return `
      <tr>
        <td class="col-chipset">${highlight(item.chipset, query)}</td>
        <td class="col-model">${highlight(item.model, query)}</td>
        <td class="col-manufacturer">${highlight(item.manufacturer, query)}</td>
        <td class="col-issue">
          <span class="issue-text">${highlight(item.issueText, query)}</span>
          <a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">
            &#128279; ${escapeHtml(item.sourceLabel)}
          </a>
        </td>
      </tr>
    `;
  }

  function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  // ---- Toggle group expand/collapse ----
  window.toggleGroup = function (slug) {
    const body   = document.getElementById(`body-${slug}`);
    const toggle = document.getElementById(`toggle-${slug}`);
    if (!body) return;
    const collapsed = body.style.display === 'none';
    body.style.display = collapsed ? '' : 'none';
    toggle.classList.toggle('collapsed', !collapsed);
  };

  // ---- Event listeners ----
  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentQuery = searchInput.value;
      render();
    }, 180);
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentQuery = '';
    render();
    searchInput.focus();
  });

  manufacturerFilter.addEventListener('change', () => {
    currentFilter = manufacturerFilter.value;
    render();
  });

  // ---- Initial render ----
  render();

})();
