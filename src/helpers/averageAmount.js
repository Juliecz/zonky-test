export const averageAmount = (loans) => {
  let amount = loans.reduce((sum, loan) => sum + loan.amount, 0);
  
  return Math.round(amount / loans.length);
};

export const formatCurrency = (number) => {
  if (!number) {
    return null;
  }
  
  return new Intl.NumberFormat(
    'cs-CZ',
    {
      style: 'currency',
      currency: 'CZK',
      maximumSignificantDigits: 10
    })
    .format(number)
};
