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

function ApXeHauMon() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 5 }, borderRadius: '12px' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
        ÁP XE HẬU MÔN: BỆNH LÝ NHIỄM TRÙNG NGUY HIỂM VÀ HƯỚNG ĐIỀU TRỊ
      </Typography>
      
      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>Thông tin quan trọng</AlertTitle>
        Áp xe hậu môn là một bệnh lý nhiễm trùng cấp tính, cần được điều trị ngay lập tức để tránh biến chứng nghiêm trọng như nhiễm trùng máu hoặc hình thành đường rò hậu môn.
      </Alert>

      <SectionTitle title="Áp xe hậu môn là gì?" />
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        Áp xe hậu môn là tình trạng nhiễm trùng cấp tính, tạo thành một ổ mủ trong các mô xung quanh hậu môn hoặc trực tràng. Bệnh thường bắt đầu từ các tuyến nhỏ trong ống hậu môn bị tắc nghẽn và nhiễm trùng, sau đó lan rộng ra các mô xung quanh, tạo thành ổ áp xe chứa đầy mủ.
      </Typography>

      <SectionTitle title="Triệu chứng cần lưu ý" />
      <List>
        <InfoListItem><strong>Đau dữ dội:</strong> Cơn đau đột ngột, dữ dội ở vùng hậu môn, tăng lên khi ngồi, đi lại hoặc đại tiện.</InfoListItem>
        <InfoListItem><strong>Sưng tấy:</strong> Vùng hậu môn sưng to, đỏ, nóng và đau khi chạm vào.</InfoListItem>
        <InfoListItem><strong>Sốt cao:</strong> Cơ thể có thể bị sốt cao (38-40°C), ớn lạnh, mệt mỏi toàn thân.</InfoListItem>
        <InfoListItem><strong>Tiết dịch mủ:</strong> Có thể thấy mủ chảy ra từ lỗ áp xe, có mùi hôi khó chịu.</InfoListItem>
        <InfoListItem><strong>Khó đại tiện:</strong> Cảm giác đau khi đại tiện, có thể bị táo bón do đau.</InfoListItem>
      </List>
      
      <Divider sx={{ my: 5 }} />

      <SectionTitle title="Tại sao cần điều trị ngay lập tức?" />
       <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <InfoListItem icon={<GppGoodIcon color="primary"/>}>
                <strong>Ngăn biến chứng:</strong> Áp xe không được điều trị có thể dẫn đến nhiễm trùng máu, hoại tử mô, hoặc hình thành đường rò hậu môn mạn tính.
            </InfoListItem>
        </Grid>
        <Grid item xs={12} md={6}>
            <InfoListItem icon={<GppGoodIcon color="primary"/>}>
                <strong>Giảm đau đớn:</strong> Điều trị sớm giúp giảm đau đớn nhanh chóng và ngăn ngừa tình trạng nhiễm trùng lan rộng.
            </InfoListItem>
        </Grid>
       </Grid>
      <Typography paragraph sx={{mt: 2}}>
        Tại Phòng Khám Chuyên Khoa Ngoại, chúng tôi thực hiện phẫu thuật dẫn lưu áp xe một cách an toàn và hiệu quả, giúp bệnh nhân hồi phục nhanh chóng và tránh các biến chứng nguy hiểm.
      </Typography>
    </Paper>
  );
}

export default ApXeHauMon;