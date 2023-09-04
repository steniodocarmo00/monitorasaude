import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native";
import { User } from "firebase/auth";
import { Auth } from "@/services/firebase.config";
import { Loading } from "@/components/loading";

function useAuth() {
  const [user, setUser] = useState<User | null>(null); // Initialize with null
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((user: User | null) => {
      setUser(user);
      setInitializing(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    initializing
  };
}

export default function RootNavigation() {

  const { user, initializing } = useAuth()

  if (initializing) {
    return <Loading />; // Show the Loading component while the app is initializing
  }

  return (
    <NavigationContainer>
     { user ? <AppRoutes /> : <AuthRoutes />} 
    </NavigationContainer>
  )
}