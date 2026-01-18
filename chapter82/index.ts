
type User ={
    name: "jon",
    show: () => void;
}

type Customer = {
    name: "mary",
    buy: () => void;
}

type sale = User | Customer;

function handleSale(sale: sale) {
    if (sale.name === "mary") {
        sale.buy();
    } else {
        sale.show();
    }
}