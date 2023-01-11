import { useAppSelector } from "../store/hooks";
import { selectFiltratedUsers } from "../store/selectors";

export const Tbody = () => {
  const allUsers = useAppSelector(selectFiltratedUsers);
  return (
    <tbody>
      {allUsers.map((i) => {
        return (
          <tr>
            <td>
              <img src={i.avatar} />
            </td>
            <td>
              {i.firstName}&nbsp;
              {i.lastName}
            </td>
            <td>{i.gender}</td>
            <td>{i.country}</td>
            <td>{i.dob}</td>
            <td>{i.email}</td>
            <td>{i.phone}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
