import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, Fade } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const menuConfig = [
  { label: 'Polyp Hậu Môn', path: '/polyp-hau-mon' },
  { label: 'Trĩ Nội', path: '/tri-noi' },
  { label: 'Trĩ Ngoại', path: '/tri-ngoai' },
  { label: 'Nứt Kẽ Hậu Môn', path: '/nut-ke-hau-mon' },
  { label: 'Rò Hậu Môn', path: '/ro-hau-mon' },
  { label: 'Trĩ Hỗn Hợp', path: '/tri-hon-hop' },
  { label: 'Áp xe hậu môn', path: '/ap-xe-hau-mon' },
  { label: 'Bệnh Trĩ', path: '/benh-tri' },
];

function ToolBarMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/gioi-thieu');
  };

  return (
    <AppBar
      position="fixed" // Thay đổi từ 'static' thành 'fixed' để phủ toàn màn hình
      sx={{
        background: '#168295',
        boxShadow: 2,
        borderRadius: 0,
        width: '100vw', // Đảm bảo chiều rộng 100% viewport
        maxWidth: '100%', // Không vượt quá viewport
        left: 0, // Đặt cạnh trái về 0
        right: 0, // Đặt cạnh phải về 0
        top: 0, // Đảm bảo nằm trên cùng
      }}
    >
      <Toolbar
        sx={{
          minHeight: '56px',
          px: { xs: 2, sm: 6 }, // Padding linh hoạt theo màn hình
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%', // Đảm bảo Toolbar rộng bằng AppBar
          m: 0, // Loại bỏ margin
          overflowX: 'hidden', // Ngăn tràn ngang
        }}
      >
        {/* DANH MỤC BỆNH */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            id="category-button"
            aria-controls={open ? 'category-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleMenuClick}
            sx={{
              background: '#f51b5a',
              color: 'white',
              px: 3,
              py: 1,
              borderRadius: '8px',
              boxShadow: 2,
              mr: 4,
              '&:hover': {
                background: '#d1174c',
              },
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 2, letterSpacing: 1 }}>
              DANH MỤC BỆNH
            </Typography>
            <MenuIcon fontSize="medium" />
          </Button>
          <Menu
            id="category-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'category-button',
            }}
            // Căn chỉnh menu bung ra từ góc trên bên trái của nút
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            // Thêm hiệu ứng và style chuyên nghiệp
            TransitionComponent={Fade}
            PaperProps={{
              sx: {
                mt: 1.5,
                borderRadius: '8px',
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.15)',
                border: '1px solid #ddd',
                minWidth: '220px',
              },
            }}
          >
            {menuConfig.map((item) => (
              <MenuItem
                key={item.label}
                component={RouterLink}
                to={item.path}
                onClick={handleClose}
                sx={{
                  py: 1.5,
                  px: 2.5,
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': {
                    backgroundColor: '#f5f5f5'
                  }
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* Các mục menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Typography 
            variant="subtitle1" 
            onClick={handleHomeClick}
            sx={{ 
              color: 'white', 
              fontWeight: 500, 
              letterSpacing: 1, 
              cursor: 'pointer', 
              transition: 'color 0.2s', 
              '&:hover': { color: '#f51b5a' } 
            }}
          >
            TRANG CHỦ
          </Typography>
          <Typography 
            variant="subtitle1" 
            onClick={handleAboutClick}
            sx={{ 
              color: 'white', 
              fontWeight: 500, 
              letterSpacing: 1, 
              cursor: 'pointer', 
              transition: 'color 0.2s', 
              '&:hover': { color: '#f51b5a' } 
            }}
          >
            GIỚI THIỆU
          </Typography>
        </Box>
        {/* Spacer để đẩy menu sát trái */}
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}

export default ToolBarMenu;