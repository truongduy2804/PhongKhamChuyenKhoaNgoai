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

function TriHonnHop() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 5 }, borderRadius: '12px' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
        TRĨ HỖN HỢP: BỆNH LÝ PHỨC TẠP VÀ HƯỚNG ĐIỀU TRỊ
      </Typography>
      
      <Alert severity="warning" sx={{ my: 3 }}>
        <AlertTitle>Thông tin quan trọng</AlertTitle>
        Trĩ hỗn hợp là dạng bệnh trĩ phức tạp nhất, kết hợp cả trĩ nội và trĩ ngoại. Bệnh thường gây ra nhiều triệu chứng khó chịu và cần được điều trị sớm để phòng ngừa biến chứng.
      </Alert>

      <SectionTitle title="Trĩ hỗn hợp là gì?" />
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        Trĩ hỗn hợp là tình trạng bệnh nhân mắc đồng thời cả trĩ nội và trĩ ngoại. Các búi trĩ nội sa ra ngoài kết hợp với các búi trĩ ngoại tạo thành một khối trĩ lớn, phức tạp. Đây là dạng bệnh trĩ nghiêm trọng nhất, thường xuất hiện ở giai đoạn muộn khi bệnh trĩ không được điều trị kịp thời.
      </Typography>

      <SectionTitle title="Triệu chứng đặc trưng" />
      <List>
        <InfoListItem><strong>Sa búi trĩ:</strong> Các búi trĩ sa ra ngoài hậu môn, có thể nhìn thấy và sờ thấy được, gây vướng víu và khó chịu.</InfoListItem>
        <InfoListItem><strong>Chảy máu:</strong> Máu chảy khi đại tiện, có thể nhỏ giọt hoặc thành tia, đôi khi chảy máu tự nhiên.</InfoListItem>
        <InfoListItem><strong>Đau rát:</strong> Cảm giác đau rát, ngứa ngáy vùng hậu môn, đặc biệt khi ngồi hoặc đại tiện.</InfoListItem>
        <InfoListItem><strong>Tiết dịch:</strong> Hậu môn tiết dịch nhầy, gây ẩm ướt và có thể dẫn đến viêm nhiễm.</InfoListItem>
        <InfoListItem><strong>Khó đại tiện:</strong> Cảm giác đại tiện không hết, có thể có phân còn sót lại.</InfoListItem>
      </List>
      
      <Divider sx={{ my: 5 }} />

      <SectionTitle title="Tại sao cần điều trị sớm?" />
       <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <InfoListItem icon={<GppGoodIcon color="primary"/>}>
                <strong>Ngăn biến chứng:</strong> Trĩ hỗn hợp có thể dẫn đến tắc mạch, hoại tử búi trĩ, thiếu máu mạn tính và các biến chứng nghiêm trọng khác.
            </InfoListItem>
        </Grid>
        <Grid item xs={12} md={6}>
            <InfoListItem icon={<GppGoodIcon color="primary"/>}>
                <strong>Cải thiện chất lượng sống:</strong> Điều trị sớm giúp giảm đau đớn, khó chịu và cải thiện đáng kể chất lượng cuộc sống của bệnh nhân.
            </InfoListItem>
        </Grid>
       </Grid>
      <Typography paragraph sx={{mt: 2}}>
        Tại Phòng Khám Chuyên Khoa Ngoại, chúng tôi áp dụng các phương pháp điều trị tiên tiến như HCPT, Laser để điều trị trĩ hỗn hợp một cách hiệu quả, ít đau đớn và thời gian hồi phục nhanh chóng.
      </Typography>
    </Paper>
  );
}

export default TriHonnHop; 