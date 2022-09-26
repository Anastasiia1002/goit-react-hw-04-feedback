import { useState } from 'react';

import FeedbackOptions from './Controls/FeedbackOptions/FeedbackOptions';
import Statistics from './Controls/Statistics/Statistics';
import Section from './Controls/Section/Section';
import Notification from './Controls/Notification/Notification';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
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
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    const percentage = Math.round((good / total) * 100);

    return good ? percentage : 0;
  };

  const Total = countTotalFeedback();

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
