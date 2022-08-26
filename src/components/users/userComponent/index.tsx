import React from "react";
import { TUserComponent, TUserComponentProps } from "./types";
import classNames from "classnames";
// @ts-ignore
import styles from "./user.component.scss";

const UserComponent: TUserComponent = (props) => {
    const { className, name, midname, surname, image_ref} = props;

    const classes = classNames(styles.userContainer, className);

    return (
        <div className={'userContainer'}>
            <div className={'imageContainer'}>
                <img src={`https://213.184.245.66:5010${image_ref}`} alt="#" className={'image'}/>
            </div>
            <div className={'name'}>{name}</div>
            <div className={'midname'}>{midname}</div>
            <div className={'surname'}>{surname}</div>
        </div>
    )
}

export default UserComponent