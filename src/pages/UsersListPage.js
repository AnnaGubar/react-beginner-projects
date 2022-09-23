//* `npm i react-content-loader`

import { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Users } from "../components/UsersList/Users";
import { Success } from "../components/UsersList/Success";
import "../styles/usersList.scss";

export function UsersListPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invitedUsers, setInvitedUsers] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.warn(err);
        alert("Error getting users");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invitedUsers.includes(id)) {
      setInvitedUsers((prev) => prev.filter((_id) => id !== _id));
    } else {
      setInvitedUsers((prev) => [...prev, id]);
    }
  };

  const onClickSendInvitation = () => setSuccess(true);

  return (
    <Container>
      <div className="body">
        <div className="UsersListPage">
          {success ? (
            <Success amount={invitedUsers.length}/>
          ) : (
            <Users
              onChangeSearchValue={onChangeSearchValue}
              searchValue={searchValue}
              users={users}
              isLoading={isLoading}
              invitedUsers={invitedUsers}
              onClickInvite={onClickInvite}
              onClickSendInvitation={onClickSendInvitation}
            />
          )}
        </div>
      </div>
    </Container>
  );
}
