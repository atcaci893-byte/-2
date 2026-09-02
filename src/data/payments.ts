export const paymentMethods = [
  {
    method: 'Visa / Mastercard',
    minDeposit: 'Залежить від каси',
    minWithdrawal: 'Залежить від методу',
    fee: 'Перевіряється в умовах',
    time: 'Зарахування депозиту зазвичай протягом кількох секунд',
  },
  {
    method: 'Skrill / NETELLER',
    minDeposit: 'Залежить від каси',
    minWithdrawal: 'Залежить від методу',
    fee: 'Може стягуватися провайдером',
    time: 'У платіжних інструкціях - протягом кількох секунд',
  },
  {
    method: 'Криптовалюта',
    minDeposit: 'Залежить від валюти та мережі',
    minWithdrawal: 'Залежить від валюти та мережі',
    fee: 'Можливі витрати мережі',
    time: 'Залежить від підтвердження транзакції',
  },
];

export const paymentCurrency = 'UAH, USD, EUR';
