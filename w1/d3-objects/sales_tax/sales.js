const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateTax = (totalSales, province) => {
  if (province === 'AB') {
    return totalSales * 0.05;
  } else if (province === 'BC') {
    return totalSales * 0.12;
  } else if (province === 'SK') {
    return totalSales * 0.10;
  }
}

const calculateSalesTax = (salesData, taxRates) => {
  const results = {};

  const calculatedSalesData = salesData.map( data => {
    const totalSales = data.sales.reduce( (total, sale) => total += sale, 0);
    return {
      name: data.name,
      totalSales,
      totalTaxes: calculateTax(totalSales, data.province)
    }
  })

  calculatedSalesData.forEach( data => {
    if (!results.hasOwnProperty(data.name)) {
      results[data.name] = {
        totalSales: data.totalSales,
        totalTaxes: data.totalTaxes
      };
    } else {
      results[data.name] = {
        totalSales: results[data.name].totalSales += data.totalSales,
        totalTaxes: results[data.name].totalTaxes += data.totalTaxes
      }
    }
  })

  return results;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));