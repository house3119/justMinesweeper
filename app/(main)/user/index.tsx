import ProfileComponent from "../../../components/ProfileComponent/ProfileComponent";
import RegisterComponent from "../../../components/RegisterComponent/RegisterComponent";


export default function UserStack() {
  const user = true;
  
  return (
    user? <ProfileComponent /> : <RegisterComponent />
  );
}