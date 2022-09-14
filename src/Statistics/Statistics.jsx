const Statistics = ({good,neutral,bad, TotalFeedback, PositivePercentage}) => {
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