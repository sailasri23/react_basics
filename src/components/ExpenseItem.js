//for components reusabilty ,we use props
//here like js, we need to pass one paramater which is object holds all received properties as attributes called props(properties)
//props are another way passing data from component a to b.
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3>{props.E}</h3>
        <div className="expense-item__price">Rs{props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
