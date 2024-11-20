import React, { FC } from 'react'
import './UserInfo.scss'

interface UserInfoProps {
    userData: {
        avatar_url: string,
        location: string,
        name: string,
        followers: number,
        following: number,
        public_repos: number,
        created_at: string,
        updated_at: string

    }
}


const UserInfo: FC<UserInfoProps> = ({ userData }) => {

    return (
        <>
            
            <div className='user-wrapper'>
                <div className="user-image">
                    <img src={userData.avatar_url} alt="avatar" />
                </div>
                <div className="user-info">
                    <div className="user-name">User Name: {userData.name}</div>
                    <div className="user-location">Location: {userData.location}</div>
                    <div className="user-followers">Followers: {userData.followers}</div>
                    <div className="user-following">Following: {userData.following}</div>
                    <div className="user-repos">Public Repos: {userData.public_repos}</div>
                    <div className="user-created">Created At: {userData.created_at.split('T')[0]}</div>
                    <div className="user-updated">Updated At: {userData.updated_at.split('T')[0]}</div>
                </div>
            </div>
        </>
    )
}

export default UserInfo