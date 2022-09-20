import { Nav } from "../components";
import { useAuth } from "../src/context/auth";
import { Protect } from "../src/utils/protected";

export default function Profile({ email }) {
  const { logout } = useAuth();

  return (
    <div className="profile">
      <Nav />
      <div className="profile-body">
        <h1>Edite Profile</h1>
        <div className="profile-info">
          <img src="/assets/avtar.png" alt="profile" />
        </div>
        <div className="profile-det">
          <h2>{email}</h2>
          <div className="profile-plans">
            <h3>Plans</h3>
            <button onClick={() => logout()} className="signout">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = (ctx) =>
  Protect(ctx, (token) => {
    const { email } = token;

    return {
      props: { email },
    };
  });
