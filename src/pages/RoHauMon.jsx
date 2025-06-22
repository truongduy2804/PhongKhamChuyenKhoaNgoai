import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Link, Grid, Alert, AlertTitle } from '@mui/material';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GppGoodIcon from '@mui/icons-material/GppGood';

const SectionTitle = ({ title }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 4, borderBottom: '2px solid #6A1B9A', pb: 1 }}>
    <SyncProblemIcon sx={{ color: '#6A1B9A', fontSize: '2rem', mr: 1.5 }} />
    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#4A148C' }}>
      {title}
    </Typography>
  </Box>
);

const InfoListItem = ({ children, icon }) => (
  <ListItem sx={{ py: 1, pl: 0, alignItems: 'flex-start' }}>
    <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5, mt: 0.5 }}>
      {icon || <ArrowRightIcon sx={{ color: '#8E24AA', fontSize: '1.5rem' }} />}
    </ListItemIcon>
    <ListItemText primary={children} primaryTypographyProps={{ variant: 'body1', sx: { lineHeight: 1.8 } }} />
  </ListItem>
);

function RoHauMon() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 5 }, borderRadius: '12px' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
        RÒ HẬU MÔN: BỆNH LÝ PHỨC TẠP VÀ HƯỚNG ĐIỀU TRỊ
      </Typography>
      
      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>Thông tin quan trọng</AlertTitle>
        Rò hậu môn là một bệnh lý nhiễm trùng mạn tính, không thể tự khỏi bằng thuốc hoặc các biện pháp thông thường. Can thiệp ngoại khoa là phương pháp điều trị duy nhất để giải quyết triệt để.
      </Alert>

      <SectionTitle title="Rò hậu môn là gì?" />
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        Rò hậu môn (còn gọi là mạch lươn) là một đường hầm nhỏ bất thường được hình thành do nhiễm trùng, nối từ ống hậu môn ra vùng da bên ngoài. Bệnh thường là hậu quả của một ổ áp-xe hậu môn không được điều trị dứt điểm, khiến mủ tích tụ và tự phá miệng ra ngoài da, tạo thành đường rò.
      </Typography>

      <SectionTitle title="Triệu chứng cần lưu ý" />
      <List>
        <InfoListItem><strong>Chảy dịch bất thường:</strong> Lỗ rò ở gần hậu môn liên tục chảy dịch mủ, máu hoặc phân có mùi hôi, gây ẩm ướt, ngứa ngáy và khó chịu.</InfoListItem>
        <InfoListItem><strong>Đau hoặc sưng tấy:</strong> Cảm giác đau âm ỉ hoặc đau nhói, vùng da quanh lỗ rò có thể bị sưng, đỏ và cứng lại.</InfoListItem>
        <InfoListItem><strong>Sốt:</strong> Cơ thể có thể bị sốt, ớn lạnh khi tình trạng nhiễm trùng trở nên nghiêm trọng.</InfoListItem>
        <InfoListItem><strong>Phát hiện lỗ rò:</strong> Có thể nhìn thấy hoặc sờ thấy một hoặc nhiều lỗ nhỏ (mụn mủ) trên da gần hậu môn.</InfoListItem>
      </List>
      
      <Divider sx={{ my: 5 }} />

      <SectionTitle title="Tại sao phải phẫu thuật?" />
       <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <InfoListItem icon={<GppGoodIcon color="primary"/>}>
                <strong>Loại bỏ hoàn toàn đường rò:</strong> Phẫu thuật giúp lấy hết các tổ chức xơ, phá vỡ đường hầm và làm sạch ổ nhiễm trùng, ngăn ngừa tái phát.
            </InfoListItem>
        </Grid>
        <Grid item xs={12} md={6}>
            <InfoListItem icon={<GppGoodIcon color="primary"/>}>
                <strong>Bảo vệ cơ thắt:</strong> Mục tiêu quan trọng của phẫu thuật là điều trị bệnh mà vẫn bảo tồn tối đa chức năng của cơ thắt hậu môn, đảm bảo khả năng tự chủ đại tiện.
            </InfoListItem>
        </Grid>
       </Grid>
      <Typography paragraph sx={{mt: 2}}>
        Tại Phòng Khám Chuyên Khoa Ngoại, chúng tôi áp dụng các kỹ thuật phẫu thuật tiên tiến như HCPT, Laser để điều trị rò hậu môn với ưu điểm: ít xâm lấn, giảm đau đớn, thời gian hồi phục nhanh và bảo vệ an toàn cấu trúc hậu môn.
      </Typography>
    </Paper>
  );
}

export default RoHauMon;
