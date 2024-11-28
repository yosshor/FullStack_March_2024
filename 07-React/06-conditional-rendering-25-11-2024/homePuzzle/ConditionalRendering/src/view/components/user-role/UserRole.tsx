import React, { FC } from 'react'
import './UserRole.scss'

export enum UserRoleOptions {
  user = "User",
  admin = "Admin",
  superuser = "Super User",
  guest = "Guest",
  moderator = "Moderator"
}

interface Props {
  roleUser: UserRoleOptions
}

const UserRole: FC<Props> = ({ roleUser }) => {
  const checkRole = roleUser.split(' ').length > 1 ? roleUser.split(' ')[0].toLowerCase() + roleUser.split(' ')[1].toLowerCase() : roleUser.toLowerCase();
  const [role, setRole] = React.useState(`select-role ${checkRole}`);



  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const role = e.target.value.toLowerCase();
    const checkRole = role.split(' ').length > 1 ? role.split(' ')[0] + role.split(' ')[1] : role;
    const roleClass = 'select-role ' + checkRole;
    console.log(role, roleClass);
    setRole(roleClass);
  }

  return (
    <>
      <select className={role} onChange={handleChange}>
        {Object.values(UserRoleOptions).map(element => (
          <option
            className={element.toLowerCase().split(' ').length > 1 ? element.toLowerCase().split(' ')[0] + element.toLowerCase().split(' ')[1] : element.toLowerCase()}
            key={element}
            value={element}
            selected={element === roleUser}
          >{element}</option>
        ))}
      </select>
    </>
  )
}

export default UserRole