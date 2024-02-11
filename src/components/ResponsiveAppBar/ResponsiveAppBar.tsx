import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo always on the left */}
          <Brightness4Icon sx={{ display: 'flex', mr: 1 }} />

          {/* Title that disappears from 'sm' and smaller screens */}
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="./"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            ReactWeatherApp
            </Link>
          </Typography>

          {/* Display links for large screens */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {routes.map((route) => (
              <Button
                key={route.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link}
                to={route.path}
              >
                {route.title}
              </Button>
            ))}
          </Box>

          {/* Hamburger menu for smaller screens */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Menu
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
            {routes.map((route) => (
              <MenuItem key={route.title} onClick={handleCloseNavMenu} component={Link} to={route.path}>
                <Typography textAlign="center">{route.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
