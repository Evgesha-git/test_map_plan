import React, {FC, useEffect, useState} from "react";

import usePagination from "../../hoks/pagination";
import { useActions } from "../../hoks/usersRedux/useActions";
import { usersTypeSelector } from "../../hoks/usersRedux/usersTypeSelector";
// @ts-ignore
import styles from "./users.component.scss";
import UserComponent from "./userComponent";

const Users: FC = () => {
    const { stateUsers } = useActions();
    const { error, loading, data} = usersTypeSelector(state => state.users);
    const {
        totalPage,
        nextPage,
        prevPage,
        setPage,
        firstContentIndex,
        lastContentIndex,
        page
    } = usePagination({
        contentPerPage: 3,
        count: data.data.people.length,
    });

    useEffect(() => {
        if (loading){
            stateUsers();
        }
    }, [data, loading, error]);

    console.log(data)

    // @ts-ignore
    return (
        <div className={'container'}>
            <div className={"pagination"}>
                <p className="text">
                    {page}/{totalPage}
                </p>
                <button onClick={prevPage} className={'page'} disabled={page === 1}>&larr;</button>
                {/*@ts-ignore*/}
                {[...Array(totalPage).keys()].map(el => (
                    <button
                        onClick={() => setPage(el + 1)}
                        key={el.toString()}
                        className={`page ${page === el + 1 ? 'active' : ''}`}
                        disabled={page === el + 1}
                    >{el + 1}</button>
                ))}
                <button onClick={nextPage} className={'page'} disabled={page === totalPage}>&rarr;</button>
            </div>
            <div className={'container-people'}>
                {data.data.people.slice(firstContentIndex, lastContentIndex).map((people, i) => {
                    return <UserComponent
                        name={people.name}
                        surname={people.surname}
                        midname={people.midname}
                        image_ref={people.image_ref}
                    />
                })}
            </div>
        </div>
    )
}

export default Users