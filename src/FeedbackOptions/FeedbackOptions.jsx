import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (options.map((option) => {
        return  <button key={option} onClick={()=> onLeaveFeedback(option)}>{option}</button>
    }));
}
 
export default FeedbackOptions;
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string)
}