function makeLaptop(brand, model, price) {
    return {
        brand: brand,
        model: model,
        price: price,
    }
}
console.log((makeLaptop('Hp', 'Probook', 40000)));

function createLaptop(brand, model, price) {
    return { brand, model, price };
}
console.log((createLaptop('Hp', 'Probook', 40000)));