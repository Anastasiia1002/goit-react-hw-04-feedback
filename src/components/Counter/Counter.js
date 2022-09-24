import { useState } from 'react';

import FeedbackOptions from './Controls/FeedbackOptions/FeedbackOptions';
import Statistics from './Controls/Statistics/Statistics';
import Section from './Controls/Section/Section';
import Notification from './Controls/Notification/Notification';

export default function Counter() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    // this.setState(prevState => ({
    //   [name]: prevState[name] + 1,
    // }));

    // setGood(el.target.value + 1);
    // setGood(good + 1);
    // setNeutral(neutral + 1);
    // setBad(bad + 1);
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    // const initValue = 0;
    // const result = Object.values(this.state).reduce(
    //   (previousValue, currentValue) => previousValue + currentValue,
    //   initValue
    // );
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    // const { good } = this.state;
    const percentage = Math.round((good / total) * 100);

    return good ? percentage : 0;
  };

  const Total = countTotalFeedback();
  //   const options = Object.keys(this.state);
  return (
    <div>
      <div className="Counter">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
      </div>
      {Total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={Total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
}
