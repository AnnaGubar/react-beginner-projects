import { useNavigate } from 'react-router-dom';
import "../../styles/usersList.scss";

export const Success = ({ amount }) => {
  const navigate = useNavigate();

  return (
    <div className="success-block">
      <img src="https://www.svgrepo.com/show/157817/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>An invitation has been sent to all {amount} users.</p>

      <button onClick={()=>navigate('/')} className="send-invite-btn">Back</button>
      </div>
  );
};
