import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1C2833',
        color: 'white',
        py: 6,
        px: { xs: 2, sm: 4 },
        mt: 'auto',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          {/* Cột thông tin phòng khám */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
              Phòng Khám Chuyên Khoa Ngoại
            </Typography>
            <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
              Chuyên khám và điều trị Trĩ - Bệnh Lý Vùng Hậu Môn
            </Typography>
          </Grid>

          {/* Wrapper cho các cột bên phải */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={4} sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}>
              {/* Cột địa chỉ */}
              <Grid item xs={12} sm="auto">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <LocationOnIcon sx={{ mr: 1.5, color: '#1E88E5' }} />
                  <Typography variant="body1">
                    59 Phan Chu Trinh - Phường 9 - Đà Lạt
                  </Typography>
                </Box>
              </Grid>

              {/* Cột điện thoại */}
              <Grid item xs={12} sm="auto">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <PhoneIcon sx={{ mr: 1.5, color: '#1E88E5' }} />
                  <Typography variant="body1">
                    <Link href="tel:0908125630" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      0908125630
                    </Link>
                    {' - '}
                    <Link href="tel:0919550080" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      0919550080
                    </Link>
                    {' - '}
                    <Link href="tel:0918814717" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      0918814717
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ pt: 4, mt: 4, borderTop: '1px solid #424242' }}>
          <Typography variant="body2" align="center" sx={{ color: '#B0BEC5' }}>
            © {new Date().getFullYear()} Phòng Khám Chuyên Khoa Ngoại. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
