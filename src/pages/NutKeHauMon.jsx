import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Link, Grid } from '@mui/material';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HealingIcon from '@mui/icons-material/Healing';

const SectionTitle = ({ title }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 4, borderBottom: '2px solid #0277BD', pb: 1 }}>
    <SquareFootIcon sx={{ color: '#0277BD', fontSize: '2rem', mr: 1.5 }} />
    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#01579B' }}>
      {title}
    </Typography>
  </Box>
);

const InfoListItem = ({ children }) => (
  <ListItem sx={{ py: 0.5, pl: 0 }}>
    <ListItemIcon sx={{ minWidth: 'auto', mr: 1, mt: 0.5 }}>
      <ArrowRightIcon sx={{ color: '#0288D1', fontSize: '1.5rem' }} />
    </ListItemIcon>
    <ListItemText primary={children} primaryTypographyProps={{ variant: 'body1', sx: { lineHeight: 1.7 } }} />
  </ListItem>
);

function NutKeHauMon() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 5 }, borderRadius: '12px' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
        NỨT KẼ HẬU MÔN: NỖI ĐAU THẦM KÍN VÀ GIẢI PHÁP ĐIỀU TRỊ
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', my: 3, fontStyle: 'italic' }}>
        Nứt kẽ hậu môn là một vết rách nhỏ, nông trên bề mặt da hoặc niêm mạc của ống hậu môn. Mặc dù chỉ là một tổn thương nhỏ, nó có thể gây ra cơn đau dữ dội, đặc biệt là khi đi đại tiện, và là một trong những nguyên nhân hàng đầu gây chảy máu hậu môn ở người trẻ.
      </Typography>

      <SectionTitle title="Nguyên nhân chính gây nứt kẽ hậu môn" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{p:2, height: '100%'}}>
            <Typography variant="h6">Táo bón kinh niên</Typography>
            <Typography>Đây là nguyên nhân phổ biến nhất. Phân cứng, khô và lớn làm căng, rách niêm mạc hậu môn khi đi qua.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{p:2, height: '100%'}}>
            <Typography variant="h6">Tiêu chảy kéo dài</Typography>
            <Typography>Việc đi ngoài nhiều lần làm cho vùng hậu môn bị kích ứng và dễ bị tổn thương.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{p:2, height: '100%'}}>
            <Typography variant="h6">Chấn thương vùng hậu môn</Typography>
            <Typography>Quan hệ tình dục qua đường hậu môn hoặc các thủ thuật y tế có thể gây ra các vết rách nhỏ.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{p:2, height: '100%'}}>
            <Typography variant="h6">Bệnh lý khác</Typography>
            <Typography>Các bệnh như Crohn, viêm loét đại tràng hoặc các bệnh lây truyền qua đường tình dục cũng có thể là nguyên nhân.</Typography>
          </Paper>
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 5 }} />

      <SectionTitle title="Triệu chứng điển hình" />
      <List>
        <InfoListItem><strong>Đau dữ dội:</strong> Cơn đau sắc, buốt như dao cắt xảy ra trong và sau khi đi đại tiện, có thể kéo dài vài giờ.</InfoListItem>
        <InfoListItem><strong>Chảy máu:</strong> Thấy máu đỏ tươi trên giấy vệ sinh hoặc trên bề mặt phân.</InfoListItem>
        <InfoListItem><strong>Ngứa và kích ứng:</strong> Cảm giác ngứa ngáy, khó chịu liên tục ở vùng hậu môn.</InfoListItem>
        <InfoListItem><strong>Co thắt cơ vòng hậu môn:</strong> Gây khó khăn và đau đớn hơn cho lần đi đại tiện tiếp theo.</InfoListItem>
      </List>
      
      <Divider sx={{ my: 5 }} />

      <SectionTitle title="Điều trị dứt điểm tại Phòng Khám" />
      <Box sx={{ p: 3, backgroundColor: '#E1F5FE', borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}><HealingIcon sx={{mr:1}}/> Hướng điều trị chung</Typography>
        <Typography paragraph sx={{mt:1}}>
          Mục tiêu chính là làm mềm phân, giảm co thắt cơ vòng và giúp vết nứt mau lành. Đa số các trường hợp nứt kẽ hậu môn cấp tính có thể được chữa khỏi bằng các biện pháp bảo tồn.
        </Typography>
        <ul>
          <li><strong>Thay đổi lối sống:</strong> Tăng cường chất xơ, uống đủ nước, ngâm hậu môn trong nước ấm.</li>
          <li><strong>Sử dụng thuốc:</strong> Bác sĩ có thể kê đơn thuốc bôi tại chỗ (như nitroglycerin) để giúp tăng lưu lượng máu và làm giãn cơ vòng, hoặc các loại thuốc làm mềm phân.</li>
          <li><strong>Can thiệp ngoại khoa:</strong> Phẫu thuật được xem xét khi các phương pháp điều trị khác thất bại. Thủ thuật phổ biến là cắt một phần nhỏ cơ vòng hậu môn để giảm co thắt và giúp vết thương lành lại.</li>
        </ul>
      </Box>
    </Paper>
  );
}

export default NutKeHauMon; 