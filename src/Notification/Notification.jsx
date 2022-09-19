import PropTypes from 'prop-types';
const Notification = ({message}) => {
    return ( 
        <h2>{message}</h2>
     );
}

// Notification.PropTypes = {
//     massage: PropTypes.string.isRequired
// }
 
export default Notification;
Notification.propTypes = {
    message: PropTypes.string.isRequired
}