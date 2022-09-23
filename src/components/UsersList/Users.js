import { Skeleton } from "./Skeleton";
import { User } from "./User";
import "../../styles/usersList.scss";

export const Users = ({
  users,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invitedUsers,
  onClickInvite,
  onClickSendInvitation,
}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Find the user..."
        />
      </div>

      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {users
            .filter(
              (user) =>
                user.first_name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                user.last_name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((user) => (
              // <User key={user.id} {...user}/>
              <User
                isInvited={invitedUsers.includes(user.id)}
                onClickInvite={onClickInvite}
                key={user.id}
                user={user}
              />
            ))}
        </ul>
      )}
      {invitedUsers.length>0 && <button onClick={onClickSendInvitation} className="send-invite-btn">Send invitation</button>}
    </>
  );
};
