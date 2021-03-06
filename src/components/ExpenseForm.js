import React from 'react';

class ExpenseForm extends React.Component {

  state = {
    description : '',
    note: '',
    amount: '',
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  }
  
  onNoteChange = (e) => {
    console.log('ZOB')
    const note = e.target.value;
    this.setState(() => ({note}));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\{0,2)?$/)) {
      this.setState(() => ({amount}));
    }
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type='text'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add an optional note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;