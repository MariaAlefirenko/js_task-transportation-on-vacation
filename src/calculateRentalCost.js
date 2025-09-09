/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_COST = 40;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  let totalRent = BASE_COST * days;

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    totalRent -= MIDDLE_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    totalRent -= LONG_TERM_DISCOUNT;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
