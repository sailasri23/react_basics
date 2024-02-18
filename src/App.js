//components cant just use data stored in other components
//we can pass data by adding a attribute
//props are nothing but attributes in html
//we can also pass hard coded data to props like title = toilet but props need to be reusable

import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2020, 2, 28),
      EOL:'Mumbai'
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 2.67,
      date: new Date(2021, 9, 28),
      EOL:'chennai'
    },
    { id: "e3", title: "New Desk", amount: 29, date: new Date(2021, 10, 28), EOL:'chennai' },
    { id: "e4", title: "Book", amount: 299, date: new Date(2021, 9, 28), EOL:'kerela' },
  ];
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        E={expenses[0].EOL}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        E={expenses[1].EOL}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        E={expenses[2].EOL}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        E={expenses[3].EOL}

      ></ExpenseItem>
    </div>
  );
}

export default App;
