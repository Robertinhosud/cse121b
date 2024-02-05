// Selecionando os elementos onde os preços serão exibidos
const btcPriceElement = document.getElementById("btc-price");
const ethPriceElement = document.getElementById("eth-price");

// Função para obter os preços do Bitcoin e Ethereum em várias moedas
async function fetchPrices() {
  try {
      const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,brl,eur");
      const data = await response.json();
      
      // Atualizando os valores exibidos com os preços obtidos da API
      btcPriceElement.innerHTML = `
          USD: $${data.bitcoin.usd.toFixed(2)}<br>
          BRL: R$${data.bitcoin.brl.toFixed(2)}<br>
          EUR: €${data.bitcoin.eur.toFixed(2)}
      `;
      ethPriceElement.innerHTML = `
          USD: $${data.ethereum.usd.toFixed(2)}<br>
          BRL: R$${data.ethereum.brl.toFixed(2)}<br>
          EUR: €${data.ethereum.eur.toFixed(2)}
      `;
  } catch (error) {
      console.error("Error when obtaining prices:", error);
  }
}

// Chamar a função fetchPrices para obter os preços ao carregar a página
fetchPrices();

// Selecionando os elementos de entrada e saída
const btcAmountInput = document.getElementById("btc-amount");
const ethAmountInput = document.getElementById("eth-amount");
const calculateButton = document.getElementById("calculate-btn");
const resultElement = document.getElementById("result");

function calculateValue() {
  const btcPrice = parseFloat(btcPriceElement.textContent.split('$')[1]); // Obtém o preço do Bitcoin após o "$" e converte para float
  const ethPrice = parseFloat(ethPriceElement.textContent.split('$')[1]); // Obtém o preço do Ethereum após o "$" e converte para float
  const btcAmount = parseFloat(btcAmountInput.value);
  const ethAmount = parseFloat(ethAmountInput.value);
  
  // Verifica se os valores de entrada são números válidos
  if (isNaN(btcAmount) || isNaN(ethAmount)) {
      resultElement.innerHTML = 'Please enter a valid number for the amount of Bitcoin and Ethereum.';
      return;
  }
  
  // Calculando o valor em moeda fiduciária
  const btcValue = btcAmount * btcPrice;
  const ethValue = ethAmount * ethPrice;
  
  // Exibindo os resultados
  resultElement.innerHTML = `Bitcoin's value: ${btcValue.toFixed(2)} USD<br>Value of Ethereum: ${ethValue.toFixed(2)} USD`;
}


// Adicionando um listener de evento para o botão de calcular
calculateButton.addEventListener("click", calculateValue);


// Função para obter os dados históricos do Bitcoin
async function fetchBTCData() {
  try {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily");
      const data = await response.json();
      const prices = data.prices.map(price => price[1]);
      const labels = data.prices.map(price => {
          const date = new Date(price[0]);
          return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
      });
      return { labels, prices };
  } catch (error) {
      console.error("Error retrieving Bitcoin historical data:", error);
      return { labels: [], prices: [] }; // Retornar arrays vazios em caso de erro
  }
}

// Função para obter os dados históricos do Ethereum
async function fetchETHData() {
  try {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=30&interval=daily");
      const data = await response.json();
      const prices = data.prices.map(price => price[1]);
      const labels = data.prices.map(price => {
          const date = new Date(price[0]);
          return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
      });
      return { labels, prices };
  } catch (error) {
      console.error("Error retrieving Ethereum historical data:", error);
      return { labels: [], prices: [] }; // Retornar arrays vazios em caso de erro
  }
}

// Função para criar o gráfico do Bitcoin
async function createBTCChart() {
  const historicalData = await fetchBTCData();
  const ctx = document.getElementById("btc-chart").getContext("2d");

  const data = {
      labels: historicalData.labels,
      datasets: [{
          label: "Bitcoin (BTC)",
          borderColor: "rgb(255, 99, 132)",
          data: historicalData.prices,
      }]
  };

  const options = {
      scales: {
          y: {
              beginAtZero: false,
              suggestedMin: 35000, // Definindo o mínimo sugerido como 30000
              suggestedMax: 50000, // Definindo o máximo sugerido como 50000
          }
      }
  };

  new Chart(ctx, {
      type: "line",
      data: data,
      options: options
  });
}

// Função para criar o gráfico do Ethereum
async function createETHChart() {
  const historicalData = await fetchETHData();
  const ctx = document.getElementById("eth-chart").getContext("2d");

  const data = {
      labels: historicalData.labels,
      datasets: [{
          label: "Ethereum (ETH)",
          borderColor: "rgb(54, 162, 235)",
          data: historicalData.prices,
      }]
  };

  const options = {
      scales: {
          y: {
              beginAtZero: false,
              suggestedMin: 1500, // Definindo o mínimo sugerido como 1000
              suggestedMax: 3000, // Definindo o máximo sugerido como 3000
          }
      }
  };

  new Chart(ctx, {
      type: "line",
      data: data,
      options: options
  });
}


// Chamar as funções para criar os gráficos ao carregar a página
createBTCChart();
createETHChart();
