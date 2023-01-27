import React from "react";
import { Link } from "react-router-dom";

import styles from "./UserItem.module.css";
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";

const UserItem = (props) => {
  return (
    <React.Fragment>
      <li className={styles["user-item"]}>
        <Card className={`${styles["user-item__content"]} ${styles.pad0}`}>
          <Link to={`/${props.id}/places`}>
            <div className={styles["user-item__image"]}>
              {/* <img src={props.image} alt={props.name}/> */}
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className={styles["user-item__info"]}>
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount}
                {props.placeCount === 1 ? " Place" : " Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default UserItem;
