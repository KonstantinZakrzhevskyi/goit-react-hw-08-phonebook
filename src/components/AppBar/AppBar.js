import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
// import UserMenu from '../UserMenu';
// import AuthNav from '../AuthNav';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';

import { authSelectors } from 'redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
