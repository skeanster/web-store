import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Hello from Profile</h1>
      <Link to="/">
        <button>app</button>
      </Link>
    </div>
  );
};

export default Profile;
