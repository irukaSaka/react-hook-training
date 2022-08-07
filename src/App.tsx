import { useAllUsers } from "./hooks/useAllUsers";
import { UserCard } from "./components/UserCard";
import "./styles.css";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>取得</button>
      {error ? (
        <p>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
