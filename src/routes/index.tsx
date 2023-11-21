import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { Loading } from '@/components/loading';
import { useAuth } from '@hooks/useAuth';

export function Routes() {
  const { isLoggedIn, isLoadingAuthInfo } = useAuth();

  if (isLoadingAuthInfo) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}