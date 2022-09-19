import { Component } from 'react';
import Section from "./Section";
import Notification from './Notification'
import './App.css';
import Statistics from 'Statistics';
import FeedbackOptions from 'FeedbackOptions';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }


  onLeaveFeedback = (option) => {
    // const { name } = option.target;
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };  

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    const sum = good + neutral + bad
    return sum
  }
  countPositivePercentage = () => {
    const total = this.countTotalFeedback();
    const persantage = Math.round((100 / total) * this.state.good);
    return persantage;
  }

  render() {
    return (
      <div className="App">
        <Section title="Pleace leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() !== 0 ?  <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} TotalFeedback={this.countTotalFeedback} PositivePercentage={this.countPositivePercentage } />
            : <Notification message="There is no feedback" /> }
        
          </Section>
      </div>
    );
  }
}

export default App;
