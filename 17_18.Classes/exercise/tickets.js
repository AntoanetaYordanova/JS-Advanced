function tickets(inputArr, sortBy) {
  class Ticket {
    constructor(destination, price, statusOfFlight) {
      this.destination = destination;
      this.price = price;
      this.status = statusOfFlight;
    }
  }

  let allTickets = [];

  inputArr.forEach((element) => {
    [destination, price, statusOfFlight] = element.split('|');
    allTickets.push(new Ticket(destination, Number(price), statusOfFlight));
  });

  let sorted = [];

  if (sortBy === 'price') {
    sorted = allTickets.sort((a, b) => a.price - b.price);
  } else {
    sorted = allTickets.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

  return sorted;
}

// console.log(tickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// ));

// console.log('------');

// console.log(tickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'status'
// ));

console.log(
  tickets(
    [
      'Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
      'Boston|126.20|departed',
    ],
    'price'
  )
);
