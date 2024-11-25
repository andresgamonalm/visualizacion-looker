const simulateData = () => {
  return {
    tables: {
      DEFAULT: [
        ['Texto 1, Fila 1', 'Texto 2, Fila 1'],
        ['Texto 1, Fila 2', 'Texto 2, Fila 2'],
        ['Texto 1, Fila 3', 'Texto 2, Fila 3']
      ]
    }
  };
};

const drawTable = (data) => {
  if (!data || !data.tables || !data.tables.DEFAULT) {
    console.error('Los datos proporcionados no son válidos:', data);
    return;
  }

  const tableHTML = `
    <table style="border-collapse: collapse; width: 100%;">
      ${data.tables.DEFAULT.map(row => `
        <tr>
          ${row.map(cell => `
            <td style="padding: 15px; text-align: justify; vertical-align: middle; border: 3px solid #001F54; background-color: #ffffff;">
              ${cell}
            </td>`).join('')}
        </tr>`).join('')}
    </table>
  `;

  const container = HtmlService.createHtmlOutput(tableHTML);
  return container;
};

const dscc = {
  subscribeToData: (callback) => {
    const mockData = simulateData();
    callback(mockData);
  }
};

dscc.subscribeToData(drawTable);

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index.html')
    .setTitle('Mi Visualización Personalizada')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}