const switchButton = document.getElementById("switch");
const pricing_tags = document.querySelectorAll("p.price-number");
const pricing_monthly = [59.99, 74.99, 99.99];
const pricing_annually = [599.99, 749.99, 999.99];

switchButton.onclick = () => {
  switchButton.classList.toggle("monthly");
  if (!switchButton.classList.contains("monthly")) {
    pricing_tags.forEach((pricing_tag, index) => {
      pricing_tag.textContent = pricing_annually[index];
    });
  } else {
    pricing_tags.forEach((pricing_tag, index) => {
      pricing_tag.textContent = pricing_monthly[index];
    });
  }
};