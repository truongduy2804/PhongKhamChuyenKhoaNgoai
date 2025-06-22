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

function BenhTri() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 5 }, borderRadius: '12px' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
        BỆNH TRĨ: NGUYÊN NHÂN, TRIỆU CHỨNG VÀ PHƯƠNG PHÁP ĐIỀU TRỊ
      </Typography>
      
      <Alert severity="info" sx={{ my: 3 }}>
        <AlertTitle>Thông tin tổng quan</AlertTitle>
        Bệnh trĩ là một trong những bệnh lý phổ biến nhất ở vùng hậu môn - trực tràng, ảnh hưởng đến khoảng 50% dân số trưởng thành. Bệnh có thể được điều trị hiệu quả nếu được phát hiện và can thiệp sớm.
      </Alert>

      <SectionTitle title="Bệnh trĩ là gì?" />
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        Bệnh trĩ là tình trạng các tĩnh mạch ở vùng hậu môn và trực tràng bị giãn nở quá mức, tạo thành các búi trĩ. Các búi trĩ này có thể nằm bên trong ống hậu môn (trĩ nội) hoặc bên ngoài hậu môn (trĩ ngoại), hoặc kết hợp cả hai (trĩ hỗn hợp).
      </Typography>

      <SectionTitle title="Nguyên nhân gây bệnh trĩ" />
      <List>
        <InfoListItem><strong>Táo bón kinh niên:</strong> Việc rặn mạnh khi đại tiện làm tăng áp lực lên các tĩnh mạch hậu môn.</InfoListItem>
        <InfoListItem><strong>Tiêu chảy kéo dài:</strong> Đi ngoài nhiều lần gây kích ứng và tổn thương vùng hậu môn.</InfoListItem>
        <InfoListItem><strong>Ngồi lâu:</strong> Ngồi làm việc hoặc đại tiện quá lâu làm tăng áp lực lên vùng hậu môn.</InfoListItem>
        <InfoListItem><strong>Mang thai và sinh nở:</strong> Áp lực từ tử cung và quá trình sinh nở có thể gây trĩ.</InfoListItem>
        <InfoListItem><strong>Tuổi tác:</strong> Các mô nâng đỡ hậu môn yếu dần theo tuổi.</InfoListItem>
      </List>
      
      <Divider sx={{ my: 5 }} />

      <SectionTitle title="Triệu chứng thường gặp" />
       <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <InfoListItem icon={<GppGoodIcon color="primary"/>}>
                <strong>Chảy máu:</strong> Máu đỏ tươi xuất hiện khi đại tiện, có thể nhỏ giọt hoặc thành tia.
            </InfoListItem>
        </Grid>
        <Grid item xs={12} md={6}>
            <InfoListItem icon={<GppGoodIcon color="primary"/>}>
                <strong>Sa búi trĩ:</strong> Các búi trĩ sa ra ngoài hậu môn, gây vướng víu và khó chịu.
            </InfoListItem>
        </Grid>
        <Grid item xs={12} md={6}>
            <InfoListItem icon={<GppGoodIcon color="primary"/>}>
                <strong>Đau rát:</strong> Cảm giác đau rát, ngứa ngáy vùng hậu môn, đặc biệt khi ngồi.
            </InfoListItem>
        </Grid>
        <Grid item xs={12} md={6}>
            <InfoListItem icon={<GppGoodIcon color="primary"/>}>
                <strong>Tiết dịch:</strong> Hậu môn tiết dịch nhầy, gây ẩm ướt và có thể dẫn đến viêm nhiễm.
            </InfoListItem>
        </Grid>
       </Grid>
      
      <Divider sx={{ my: 5 }} />

      <SectionTitle title="Phân loại bệnh trĩ" />
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        Bệnh trĩ được phân loại thành 3 loại chính:
      </Typography>
      <List>
        <InfoListItem><strong>Trĩ nội:</strong> Các búi trĩ nằm bên trong ống hậu môn, thường không đau nhưng dễ chảy máu.</InfoListItem>
        <InfoListItem><strong>Trĩ ngoại:</strong> Các búi trĩ nằm bên ngoài hậu môn, có thể sờ thấy và thường gây đau.</InfoListItem>
        <InfoListItem><strong>Trĩ hỗn hợp:</strong> Kết hợp cả trĩ nội và trĩ ngoại, là dạng bệnh phức tạp nhất.</InfoListItem>
      </List>

      <Divider sx={{ my: 5 }} />

      <SectionTitle title="Phương pháp điều trị tại Phòng khám" />
      <Typography paragraph sx={{mt: 2}}>
        Tại Phòng Khám Chuyên Khoa Ngoại, chúng tôi áp dụng các phương pháp điều trị tiên tiến:
      </Typography>
      <List>
        <InfoListItem><strong>Điều trị nội khoa:</strong> Sử dụng thuốc uống, thuốc bôi để giảm triệu chứng cho các trường hợp nhẹ.</InfoListItem>
        <InfoListItem><strong>Công nghệ HCPT:</strong> Sử dụng sóng cao tần để điều trị trĩ một cách an toàn và hiệu quả.</InfoListItem>
        <InfoListItem><strong>Laser:</strong> Sử dụng tia laser để loại bỏ búi trĩ với độ chính xác cao.</InfoListItem>
        <InfoListItem><strong>Phẫu thuật truyền thống:</strong> Áp dụng cho các trường hợp trĩ nặng hoặc có biến chứng.</InfoListItem>
      </List>
    </Paper>
  );
}

export default BenhTri; 