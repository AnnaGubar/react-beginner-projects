import "../../styles/usersList.scss";

export const Success = ({ amount }) => {
  return (
    <div className="success-block">
      <img src="https://www.svgrepo.com/show/157817/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>An invitation has been sent to all {amount} users.</p>

      <a href="https://annagubar.github.io/react-beginner-projects/users-list">
      <button className="send-invite-btn">Back</button>
      </a>
      {/* <button onClick={()=>window.location.reload()} className="send-invite-btn">Back</button> */}
    </div>
  );
};