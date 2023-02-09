import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  return <h1>Here are {nameOfMyUser}의Followers</h1>;
}
export default Followers;