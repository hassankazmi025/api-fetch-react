import React from "react";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curuser) => {
        const { id, name, email, address } = curuser;
        return (
          <tr key={id}>
            <td className="px-8 py-4 text-left text-xs font-medium  uppercase tracking-wider border">
              {id}
            </td>
            <td className="px-8 py-4 text-left text-xs font-medium  uppercase tracking-wider border">
              {name}
            </td>
            <td className="px-8 py-4 text-left text-xs font-medium  uppercase tracking-wider border">
              {email}
            </td>
            <td className="px-8 py-4 text-left text-xs font-medium  uppercase tracking-wider border">
              {address.city}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
