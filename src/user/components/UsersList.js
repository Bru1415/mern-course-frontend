import React from "react";

import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  let renderResult = null;

  if (props.items.length === 0) {
    renderResult = <h2 className={styles["center"]}>No User found</h2>;
  } else {
    renderResult = (
      <ul className={styles["users-list"]}>
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.numPlaces}
          />
        ))}
      </ul>
    );
  }

  return <React.Fragment>{renderResult}</React.Fragment>;
};

export default UsersList;
