/*function signature/sample */
function calculateMoney(ticketSale) {
    mealCost = 8 * 50;
    careTaker = 500;
    totalSale = ticketSale * 120;
      result =  totalSale - mealCost -careTaker;
    if (typeof ticketSale == "number" && ticketSale >= 0) {
      return result;
    }else {
      return "Please Provide a positive Nunber"
    } 
  }
  
  
  console.log(calculateMoney(10 )) 