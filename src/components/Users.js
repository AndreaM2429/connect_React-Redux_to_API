import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../redux/users/usersSlice';
import LiUsers from './LiUsers';

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const { Arrusers, isLoading, error } = useSelector((state) => state.userList);

  if (isLoading === true) {
    return (
      <section className="pending">
        <h2>Loading...</h2>
      </section>
    );
  }
  if (error !== undefined) {
    return (
      <section className="error">
        <h2>Ups....something went wrong</h2>
      </section>
    );
  }
  return (
    <section>
      <h1>Users:</h1>
      <ul>
        {Arrusers.map((user) => (
          <LiUsers
            name={user.name.first}
            lastname={user.name.last}
            key={user.email}
          />
        ))}
      </ul>
    </section>
  );
};

export default Users;
