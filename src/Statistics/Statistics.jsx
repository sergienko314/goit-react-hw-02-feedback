import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, TotalFeedback, PositivePercentage }) => {
    return (
        <div>
            <p>good:{good}</p>
            <p>neutral:{neutral }</p>
            <p>bad:{bad} </p>
            <p>total:{TotalFeedback()} </p>
            <p>positive Percentage:{PositivePercentage()}%</p>
        </div>
    );
}
 
export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number ,
    neutral: PropTypes.number ,
    bad: PropTypes.number ,
    TotalFeedback: PropTypes.func ,
    PositivePercentage: PropTypes.func,
}
