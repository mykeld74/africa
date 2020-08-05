<script>
  export let total;
  const amount = (total / 25000) * 100;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  const dollarValue = formatter.format(total);
</script>

<style>
  main {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2vh;
    grid-column-gap: 3vw;
    grid-template-areas: "header header" "thermometer numbers" "footer footer";
  }

  .thermometer {
    width: 50%;
    max-width: 150px;
    height: 83vh;
    border: 3px ridge #333;
    background: #fff;
    border-radius: 75px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    justify-self: end;
    grid-area: thermometer;
    box-shadow: 5px 5px 10px #555;
  }
  .currentAmount {
    width: 100%;
    /* height: 25%; */
    background: #b53737;
    transition: all 0.3s ease-in-out;
  }
  .amounts {
    width: 50%;
    height: 81.5vh;
    display: grid;
    grid-area: numbers;
    font-weight: 600;
  }
  .amount {
    align-self: center;
  }
  /* .amount:before {
    content: "--";
  } */
  .footer {
    grid-area: footer;
    height: calc(5vh - 20px);
  }
  .header {
    grid-area: header;
    padding: 1vh 0;
    color: #004086;
    background: #fff;
    align-items: center;
  }
  h2 {
    margin: 0;
    width: 100%;
    text-align: center;
    font-size: clamp(24px, 4vw, 36px);
  }
</style>

<main>
  <div class="header">
    <h2>Africa Funds</h2>
  </div>
  <div class="thermometer">
    <div class="currentAmount" style="height: {amount}%" />
  </div>
  <div class="amounts">
    <div class="amount">&mdash; $25,000</div>
    <div class="amount">&mdash; $24,000</div>
    <div class="amount">&mdash; $23,000</div>
    <div class="amount">&mdash; $22,000</div>
    <div class="amount">&mdash; $21,000</div>
    <div class="amount">&mdash; $20,000</div>
    <div class="amount">&mdash; $19,000</div>
    <div class="amount">&mdash; $18,000</div>
    <div class="amount">&mdash; $17,000</div>
    <div class="amount">&mdash; $16,000</div>
    <div class="amount">&mdash; $15,000</div>
    <div class="amount">&mdash; $14,000</div>
    <div class="amount">&mdash; $13,000</div>
    <div class="amount">&mdash; $12,000</div>
    <div class="amount">&mdash; $11,000</div>
    <div class="amount">&mdash; $10,000</div>
    <div class="amount">&mdash; $9,000</div>
    <div class="amount">&mdash; $8,000</div>
    <div class="amount">&mdash; $7,000</div>
    <div class="amount">&mdash; $6,000</div>
    <div class="amount">&mdash; $5,000</div>
    <div class="amount">&mdash; $4,000</div>
    <div class="amount">&mdash; $3,000</div>
    <div class="amount">&mdash; $2,000</div>
    <div class="amount">&mdash; $1,000</div>
  </div>
  <div class="footer">
    <h2>Total Saved: {dollarValue}</h2>
  </div>
</main>
