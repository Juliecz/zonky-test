export const averageAmount = (loans) => {
  let amount = loans.reduce((sum, loan) => sum+loan.amount, 0);
  
  amount = Math.round(amount/loans.length);
  return amount;
};

export const formatCurrency = (currency) => {
  if (!currency) {
    return null;
  }
  
  return new Intl.NumberFormat(
    'cs-CZ',
    {
      style: 'currency',
      currency: 'CZK',
      maximumSignificantDigits: 10
    })
    .format(currency)
};
