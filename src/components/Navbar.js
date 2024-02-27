import * as React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import controls from './Controls';
const pages = ['Catalog', 'Resources', 'Community', 'Pricing', 'Career Center', 'For Teams'];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = controls.useState(null);
  const [anchorElUser, setAnchorElUser] = controls.useState(null);
  const location = controls.useLocation();
  const navigate = controls.useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const isTokenAvailable = localStorage.getItem('idToken');
  const handleUserMenuClick = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('idToken');
        handleCloseUserMenu();
        navigate("/");
      })
      .catch((error) => {
      });
  };
  return (
    <controls.AppBar position="fixed" sx={{ backgroundColor: '#fff0e5' }}>
      <controls.Container maxWidth="lg">
        <controls.Toolbar disableGutters>
          <controls.Link to="/">
            <img src={controls.image} style={{ height: '50px', width: '108px' }} alt="logo" />
          </controls.Link>
          <controls.Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <controls.IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
            </controls.IconButton>
            <controls.Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <controls.MenuItem key={page} onClick={handleCloseNavMenu}>
                  <controls.Typography textAlign="center">{page}</controls.Typography>
                </controls.MenuItem>
              ))}
            </ controls.Menu>
          </controls.Box>
          <controls.Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <controls.Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </controls.Button>
            ))}
          </controls.Box>
          <controls.Box sx={{ flexGrow: 0 }}>
            <controls.Tooltip title="Search">
              <controls.SearchIcon sx={{ color: 'black', marginRight: 2 }} />
            </controls.Tooltip>
          </controls.Box>
          <controls.Box sx={{ flexGrow: 0 }}>
            {isTokenAvailable ? (
              <>
                <controls.Avatar
                  sx={{ bgcolor: controls.deepPurple[500], cursor: 'pointer' }}
                  onClick={handleUserMenuClick}
                >
                  dl
                </controls.Avatar>
                {isTokenAvailable && (
                  <controls.Menu
                    anchorEl={anchorElUser}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}>
                    <controls.MenuItem > <controls.Icon icon="fluent-mdl2:profile-search" width="26" height="25" /> Profile</controls.MenuItem>
                    <controls.MenuItem > <controls.Icon icon="lets-icons:setting-line" width="27" height="25" /> Account+Billing</controls.MenuItem>
                    <controls.MenuItem > <controls.Icon icon="teenyicons:home-outline" width="28" height="25" /> My Home</controls.MenuItem>
                    <controls.MenuItem > <controls.Icon icon="lets-icons:question-light" width="29" height="25" />HelpCenter</controls.MenuItem>
                    <controls.Divider />
                    <controls.MenuItem onClick={handleLogout}>Logout</controls.MenuItem>
                  </controls.Menu>
                )}
              </>
            ) : (
              location.pathname === '/login' ? (
                <controls.Tooltip title="Sign Up">
                  <controls.Link to="/signup">
                    <controls.Button sx={{ color: 'white', background: 'blue' }}>Sign Up</controls.Button>
                  </controls.Link>
                </controls.Tooltip>
              ) : (
                <controls.Tooltip title="Login">
                  <controls.Link to="/login">
                    <controls.Button sx={{ color: 'black' }}>Login</controls.Button>
                  </controls.Link>
                </controls.Tooltip>
              )
            )}
          </controls.Box>
        </controls.Toolbar>
      </controls.Container>
    </controls.AppBar>
  );
}
export default ResponsiveAppBar;
