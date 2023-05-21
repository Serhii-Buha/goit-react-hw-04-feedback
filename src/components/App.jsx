import React, { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  //  state = {
  //    good: 0,
  //    neutral: 0,
  //    bad: 0,
  //  };

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    const { good } = feedback;
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const onLeaveFeedback = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
      //  'good': prevState['good'] + 1
      // prevState - это предыдущее состояние объекта feedback. Например, предположим, что prevState равно { good: 2, neutral: 1, bad: 0 }.

      //prevState['good'] - это обращение к значению ключа 'good' в объекте prevState. В нашем примере prevState['good'] равно 2.

      //prevState['good'] + 1 - это выражение увеличивает значение ключа 'good' на 1. В нашем примере это будет 2 + 1, что равно 3.

      //'good': prevState['good'] + 1 - это запись свойства объекта с ключом 'good' и новым значением, которое на 1 больше предыдущего значения. В нашем примере это будет 'good': 3.
    }));
    // this.setState(prevState => {
    //   return { [option]: prevState[option] + 1 };
    // });
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const total = this.countTotalFeedback();
  //   const positivePercentage = this.countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={Object.keys(state)}
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

//v2

// import React, { useState } from 'react';
// import { Section } from 'components/Section/Section';
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Statistics } from 'components/Statistics/Statistics';
// import { Notification } from 'components/Notification/Notification';

// export const App = () => {
//   const [options, setOptions] = useState(['good', 'neutral', 'bad']);
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const total = countTotalFeedback();
//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   const onLeaveFeedback = option => {
//     const feedbackHandlers = {
//       good: () => setGood(prevState => prevState + 1),
//       neutral: () => setNeutral(prevState => prevState + 1),
//       bad: () => setBad(prevState => prevState + 1),
//     };
//     feedbackHandlers[option]();
//   };

//   const total = countTotalFeedback();

//   return (
//     <div>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
//       </Section>
//       {total > 0 ? (
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       ) : (
//         <Notification message="There is no feedback" />
//       )}
//     </div>
//   );
// };

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => {
//       return { [option]: prevState[option] + 1 };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

// return (
//   <div>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={Object.keys(this.state)}
//         onLeaveFeedback={this.onLeaveFeedback}
//       />
//     </Section>
//     {total > 0 ? (
//       <Section title="Statistics">
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           positivePercentage={positivePercentage}
//         />
//       </Section>
//     ) : (
//       <Notification message="There is no feedback" />
//     )}
//   </div>
// );
//   }
// }
