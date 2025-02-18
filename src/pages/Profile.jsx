import useUserStore from "../stores/userStore";

const Profile = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div>
      <div className="text-4xl">
        {user.firstName} {user.lastName}
      </div>
      <img src={user.profileImage} alt="" />
    </div>
  );
};

export default Profile;
