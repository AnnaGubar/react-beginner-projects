import { useNavigate } from "react-router-dom";
import "../../styles/usersList.scss";

export const Success = ({ amount }) => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
}

  return (
    <div className="success-block">
      <img src="https://www.svgrepo.com/show/157817/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>An invitation has been sent to all {amount} users.</p>

      {/* <button onClick={()=>window.location.reload()} className="send-invite-btn">Back</button> */}
      <button onClick={()=>refreshPage()} className="send-invite-btn">Back</button>
    </div>
  );
};