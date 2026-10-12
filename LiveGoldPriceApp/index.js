
const priceElement = document.getElementById("price");
const price22Element = document.getElementById("price22");
const updatedElement = document.getElementById("updated");
const refreshButton = document.getElementById("refresh");

const GOLD_API =
  "https://api.goldprice.dev/v1/prices?symbol=XAU-USD-SPOT";

const CURRENCY_API =
  "https://open.er-api.com/v6/latest/USD";

async function getGoldPrice() {
  refreshButton.disabled = true;
  priceElement.textContent = "Loading...";
  price22Element.textContent = "Loading...";
  updatedElement.textContent = "Fetching latest prices...";

  try {
    const [goldResponse, currencyResponse] = await Promise.all([
      fetch(GOLD_API),
      fetch(CURRENCY_API)
    ]);

    if (!goldResponse.ok || !currencyResponse.ok) {
      throw new Error("Could not fetch price data");
    }

    const goldData = await goldResponse.json();
    const currencyData = await currencyResponse.json();

    console.log("Gold API response:", goldData);
    console.log("Currency API response:", currencyData);

    const gold = goldData.symbols?.find(
      item => item.symbol === "XAU-USD-SPOT"
    ) ?? goldData.symbols?.[0];

    const usdPerOunce = Number(gold?.price);
    const inrPerUsd = Number(currencyData.rates?.INR);

    if (
      !Number.isFinite(usdPerOunce) ||
      usdPerOunce <= 0 ||
      !Number.isFinite(inrPerUsd) ||
      inrPerUsd <= 0
    ) {
      throw new Error("Invalid API response. Check the console.");
    }

    const price24K =
      (usdPerOunce * inrPerUsd) / 31.1034768;

    const price22K = price24K * (22 / 24);

    const formatINR = price =>
      price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
      });

    priceElement.textContent = formatINR(price24K);
    price22Element.textContent = formatINR(price22K);

    const timestamp = gold.computed_at
      ? new Date(gold.computed_at).toLocaleString("en-IN")
      : new Date().toLocaleString("en-IN");

    updatedElement.textContent =
      `Last updated: ${timestamp}` +
      (gold.is_stale ? " (cached data)" : "");

  } catch (error) {
    console.error("Gold price error:", error);

    priceElement.textContent = "Unavailable";
    price22Element.textContent = "Unavailable";
    updatedElement.textContent =
      `${error.message}. Please try again.`;

  } finally {
    refreshButton.disabled = false;
  }
}

refreshButton.addEventListener("click", getGoldPrice);

getGoldPrice();
