// Total Number of Products Per Category
db.products.aggregate([
    { $group: { _id: '$category', totalProducts: { $sum: 1 } } }
])

// Calculate the Average Price per Category
db.products.aggregate([
    { $group: { _id: '$category', avgPrice: { $avg:'$price' } } }
])

// print Sum of Product Stock in Each Category (totalStock per category)
db.products.aggregate([
    { $group: { _id: '$category', totalStock: { $sum: '$quantity' } } }
])

// Print name,price for the products of category-electronics


// Print name,price for the products of category-electronics with alias name for columns
// product_name is alias for name , product_price is alias for price


// Print name,price,discountedPrice(10%) for the products


// Calculate Discounted Price and amountSaved


// Find name , price of  Top 2 'electronics' products by price



