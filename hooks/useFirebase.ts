import { initializedAuthentication } from "../auth/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { useState } from "react";
initializedAuthentication();
const useFirebase = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((data) => {
      dispatch(setUser(data.user));
      console.log(data.user);
    });
  };
  return { googleLogin, setDropdownShow, dropdownShow };
};

export default useFirebase;
