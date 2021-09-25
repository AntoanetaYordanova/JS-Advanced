function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let textAreaElement = document.querySelector("#inputs textarea");

    let text = textAreaElement.value;
    let inputArray = JSON.parse(text);
    let restaurants = {};

    for (let i = 0; i < inputArray.length; i++) {
      let [restaurantName, workersString] = inputArray[i].split(" - ");
      let inputWorkers = workersString.split(", ").map((w) => {
        let [name, salary] = w.split(" ");
        return { name, salary: Number(salary) };
      });

      if (!restaurants[restaurantName]) {
        restaurants[restaurantName] = {
          workers: [],
          getAverageSalary: function () {
            return (
              this.workers.reduce((acc, el) => acc + el.salary, 0) /
              this.workers.length
            );
          },
        };
      }

      restaurants[restaurantName].workers =
        restaurants[restaurantName].workers.concat(inputWorkers);
    }

    let sortedRestaurants = Object.entries(restaurants).sort(
      (a, b) => b[1].getAverageSalary() - a[1].getAverageSalary()
    );

    let bestRestaurant = sortedRestaurants[0];
    let workersSorted = bestRestaurant[1].workers.sort(
      (a, b) => b.salary - a.salary
    );
    let bestRestaurantString = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].getAverageSalary().toFixed(2)} Best Salary: ${(workersSorted[0].salary).toFixed(2)}`;
    let bestRestaurantElement = document.querySelector("#bestRestaurant p");
    let workersElement = document.querySelector("#workers p");

    bestRestaurantElement.textContent = bestRestaurantString;

    for (let i = 0; i < workersSorted.length; i++) {
      let currentWorker = workersSorted[i];
      workersElement.textContent += `Name: ${currentWorker.name} With Salary: ${currentWorker.salary} `;
    }
  }
}
