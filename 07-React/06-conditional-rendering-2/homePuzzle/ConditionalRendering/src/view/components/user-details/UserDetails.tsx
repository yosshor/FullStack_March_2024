import React from 'react'
import './UserDetails.scss'
import userData from '../../../data/user-data'
import UserRole from '../user-role/UserRole'
import SelectRole from '../select-role/SelectRole'


const UserDetails = () => {
    const image: string = "https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
    return (
        <>
            <div><h1>User Details</h1></div>

            <div className="user-details">
                <div className="user-details__header">
                    <div className="user-details__header__item">Email</div>
                    <div className="user-details__header__item">ID</div>
                    <div className="user-details__header__item">Role</div>
                </div>
                {userData.map((user, index) => (
                    <div className="user-details__row" key={index}>
                        <div className="user-details__row__item_wrapper">
                            <div className="user-details__row__image">
                                <img src={user.url ?? image} alt={user.name} />
                            </div>
                            <div className="user-details__row__email_name">
                                <div className="user-details__row__name">{user.name} </div>
                                <div className="user-details__row__email">{user.email}</div>
                            </div>

                        </div>
                        <div className="user-details__row__item">{user.id}</div>
                        <div className="user-details__row__item">
                            <UserRole roleUser={user.role} />
                            <SelectRole roleUser={user.role} />
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}

export default UserDetails;