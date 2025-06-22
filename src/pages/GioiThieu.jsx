import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider, Alert, AlertTitle } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import StarIcon from '@mui/icons-material/Star';
import Bacsi1 from '../assets/Bacsi1.png';
import Bacsi2 from '../assets/Bacsi2.png';

const SectionTitle = ({ title, icon }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 4, borderBottom: '2px solid #168295', pb: 1 }}>
    {icon && <Box sx={{ mr: 2, color: '#168295' }}>{icon}</Box>}
    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#168295' }}>
      {title}
    </Typography>
  </Box>
);

const FeatureItem = ({ title, description }) => (
  <Card sx={{ height: '100%', boxShadow: 2, '&:hover': { boxShadow: 4 } }}>
    <CardContent>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#168295' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

function GioiThieu() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 5 }, borderRadius: '12px' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333', mb: 4 }}>
        GIỚI THIỆU PHÒNG KHÁM CHUYÊN KHOA NGOẠI
      </Typography>

      {/* Giới thiệu chung */}
      <SectionTitle title="Giới thiệu chung" icon={<StarIcon fontSize="large" />} />
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
        <strong>Phòng Khám Chuyên Khoa Ngoại</strong> là một cơ sở y tế chuyên nghiệp, được thành lập với mục tiêu cung cấp dịch vụ khám và điều trị chất lượng cao cho các bệnh lý vùng hậu môn - trực tràng. Với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại, chúng tôi cam kết mang đến sự chăm sóc tốt nhất cho người bệnh.
      </Typography>

      {/* Chuyên khoa */}
      <SectionTitle title="Chuyên khoa" />
      <Alert severity="info" sx={{ mb: 3 }}>
        <AlertTitle>Chuyên môn chính</AlertTitle>
        Chuyên khám và điều trị Trĩ - bệnh lý vùng hậu môn với các phương pháp tiên tiến và hiệu quả.
      </Alert>

      {/* Sứ mệnh */}
      <SectionTitle title="Sứ mệnh chăm sóc sức khỏe toàn diện" />
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        Tại Phòng Khám Chuyên Khoa Ngoại, chúng tôi cam kết:
      </Typography>
      <List>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemIcon>
            <CheckCircleIcon sx={{ color: '#168295' }} />
          </ListItemIcon>
          <ListItemText primary="Cung cấp dịch vụ y tế chất lượng cao với đội ngũ bác sĩ chuyên môn giỏi" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemIcon>
            <CheckCircleIcon sx={{ color: '#168295' }} />
          </ListItemIcon>
          <ListItemText primary="Áp dụng các phương pháp điều trị tiên tiến, ít xâm lấn và hiệu quả" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemIcon>
            <CheckCircleIcon sx={{ color: '#168295' }} />
          </ListItemIcon>
          <ListItemText primary="Tạo môi trường khám chữa bệnh thoải mái, an toàn và thân thiện" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemIcon>
            <CheckCircleIcon sx={{ color: '#168295' }} />
          </ListItemIcon>
          <ListItemText primary="Đặt sức khỏe và sự hài lòng của người bệnh lên hàng đầu" />
        </ListItem>
      </List>

      {/* Điểm nổi bật */}
      <SectionTitle title="Điểm nổi bật được người bệnh tin tưởng" />
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <FeatureItem 
            title="Đội ngũ bác sĩ chuyên môn cao"
            description="Đội ngũ bác sĩ có trình độ chuyên môn cao, giàu kinh nghiệm trong lĩnh vực điều trị các bệnh lý vùng hậu môn - trực tràng."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureItem 
            title="Trang thiết bị hiện đại"
            description="Được trang bị các thiết bị y tế hiện đại, công nghệ tiên tiến như HCPT, Laser để đảm bảo hiệu quả điều trị tối ưu."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureItem 
            title="Phương pháp điều trị tiên tiến"
            description="Áp dụng các phương pháp điều trị ít xâm lấn, ít đau đớn và thời gian hồi phục nhanh chóng."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureItem 
            title="Dịch vụ chăm sóc tận tâm"
            description="Đội ngũ nhân viên y tế tận tâm, chu đáo, luôn sẵn sàng hỗ trợ và tư vấn cho người bệnh."
          />
        </Grid>
      </Grid>

      {/* Hình ảnh bác sĩ */}
      <SectionTitle title="Đội ngũ bác sĩ" />
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src={Bacsi1} 
              alt="Bác sĩ 1" 
              style={{ 
                width: '100%', 
                maxWidth: '400px', 
                height: 'auto', 
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }} 
            />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', color: '#168295' }}>
              Bác sĩ chuyên khoa
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src={Bacsi2} 
              alt="Bác sĩ 2" 
              style={{ 
                width: '100%', 
                maxWidth: '400px', 
                height: 'auto', 
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }} 
            />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', color: '#168295' }}>
              Bác sĩ chuyên khoa
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5 }} />

      {/* Tại sao nên chọn */}
      <SectionTitle title="Tại sao nên chọn Phòng Khám Chuyên Khoa Ngoại?" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#168295' }} />
              </ListItemIcon>
              <ListItemText primary="Chuyên môn cao trong điều trị các bệnh lý vùng hậu môn" />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#168295' }} />
              </ListItemIcon>
              <ListItemText primary="Công nghệ điều trị tiên tiến, ít xâm lấn" />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#168295' }} />
              </ListItemIcon>
              <ListItemText primary="Thời gian hồi phục nhanh, ít biến chứng" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#168295' }} />
              </ListItemIcon>
              <ListItemText primary="Dịch vụ chăm sóc tận tâm, chu đáo" />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#168295' }} />
              </ListItemIcon>
              <ListItemText primary="Chi phí hợp lý, minh bạch" />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#168295' }} />
              </ListItemIcon>
              <ListItemText primary="Được nhiều người bệnh tin tưởng và đánh giá cao" />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5 }} />

      {/* Thông tin liên hệ */}
      <SectionTitle title="Thông tin liên hệ" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocationOnIcon sx={{ mr: 2, color: '#168295', fontSize: '2rem' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#168295' }}>
                Địa chỉ
              </Typography>
              <Typography variant="body1">
                59 Phan Chu Trinh - Phường 9 - Đà Lạt
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PhoneIcon sx={{ mr: 2, color: '#168295', fontSize: '2rem' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#168295' }}>
                Điện thoại
              </Typography>
              <Typography variant="body1">
                0908125630 - 0919550080
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Alert severity="success" sx={{ mt: 4 }}>
        <AlertTitle>Lời nhắn từ chúng tôi</AlertTitle>
        Phòng Khám Chuyên Khoa Ngoại luôn sẵn sàng đồng hành cùng bạn trong hành trình chăm sóc sức khỏe. Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất!
      </Alert>
    </Paper>
  );
}

export default GioiThieu; 