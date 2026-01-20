function Profile() {
  const age = 24;
  const location = "Nigeria";
  const status = "Frontend Developer";

  return (
    <div className="profile">
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default Profile;
