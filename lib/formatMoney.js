export function formatMoney(amount = 0) {
  const options = {
    currency: 'USD',
    maximumFractionDigits: 2,
    style: 'currency',
  };

  if (amount % 100 === 0) options.maximumFractionDigits = 0;

  const formatIt = Intl.NumberFormat('en-Us', options);

  return formatIt.format(amount / 100);
}
