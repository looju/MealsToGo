import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../../App";
export const loginRequest=(email,password)=>{
    
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
    signInWithEmailAndPassword(auth,email,password)
}