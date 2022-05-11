import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>April 2nd 2021</div>
            <div className='expense-item__description'>
                <h2>School Loan </h2>
                <div className='expense-item__price'>$557.89</div>
            </div>
        </div>
    );
}

export default ExpenseItem; 