import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Link, Grid } from '@mui/material';
import HealingIcon from '@mui/icons-material/Healing';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

// Tạm thời vô hiệu hóa import ảnh
// import triNgoaiBanner from '../assets/tri-ngoai-banner.png';

const SectionTitle = ({ title }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 4, borderBottom: '2px solid #FFA000', pb: 1 }}>
    <HealingIcon sx={{ color: '#FFA000', fontSize: '2rem', mr: 1.5 }} />
    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#BF360C' }}>
      {title}
    </Typography>
  </Box>
);

const SymptomListItem = ({ children }) => (
  <ListItem sx={{ py: 0.5, pl: 0 }}>
    <ListItemIcon sx={{ minWidth: 'auto', mr: 1, mt: 0.5 }}>
      <ArrowRightIcon sx={{ color: '#FF6F00', fontSize: '1.5rem' }} />
    </ListItemIcon>
    <ListItemText primary={children} primaryTypographyProps={{ variant: 'body1', sx: { lineHeight: 1.7 } }} />
  </ListItem>
);

const ComplicationItem = ({ title, description, icon }) => (
    <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={{p: 2, display: 'flex', alignItems: 'center', height: '100%', borderLeft: '4px solid #f44336'}}>
            <Box sx={{mr: 2, color: '#f44336'}}>{icon}</Box>
            <Box>
                <Typography variant="h6" sx={{fontWeight: 600}}>{title}</Typography>
                <Typography variant="body2">{description}</Typography>
            </Box>
        </Paper>
    </Grid>
);


function TriNgoai() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 5 }, borderRadius: '12px' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
        TRĨ NGOẠI: NGUYÊN NHÂN, TRIỆU CHỨNG VÀ CÁCH ĐIỀU TRỊ HIỆU QUẢ
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', my: 3 }}>
        Trĩ ngoại là tình trạng các búi trĩ hình thành ở bên ngoài, ngay trên bề mặt của hậu môn. Khác với trĩ nội, người bệnh có thể dễ dàng nhận thấy và sờ được búi trĩ ngoại. Tình trạng này tuy không nguy hiểm đến tính mạng ở giai đoạn đầu nhưng gây ra rất nhiều phiền toái, đau đớn và ảnh hưởng trực tiếp đến chất lượng cuộc sống.
      </Typography>

      {/* Tạm thời vô hiệu hóa banner
      <Box component="figure" sx={{ my: 4, mx: 0 }}>
        <img src={triNgoaiBanner} alt="Minh họa bệnh trĩ ngoại" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
      </Box>
      */}

      <SectionTitle title="Dấu hiệu nhận biết trĩ ngoại" />
      <List>
        <SymptomListItem>
          <strong>Cảm giác cộm, vướng víu:</strong> Người bệnh luôn cảm thấy có vật gì đó lạ ở vùng hậu môn, gây khó chịu khi ngồi hoặc di chuyển.
        </SymptomListItem>
        <SymptomListItem>
          <strong>Đau rát:</strong> Đây là triệu chứng điển hình, cơn đau tăng lên khi đi đại tiện, ngồi lâu hoặc khi búi trĩ bị cọ xát.
        </SymptomListItem>
        <SymptomListItem>
          <strong>Chảy máu:</strong> Máu có thể xuất hiện trên giấy vệ sinh hoặc lẫn trong phân, thường là máu đỏ tươi.
        </SymptomListItem>
        <SymptomListItem>
          <strong>Búi trĩ sa ra ngoài:</strong> Có thể sờ thấy một hoặc nhiều cục thịt nhỏ, mềm ở rìa hậu môn. Khi bệnh nặng, búi trĩ có thể sưng to và không thể tự co lại.
        </SymptomListItem>
      </List>
      
      <Divider sx={{ my: 5 }} />

      <SectionTitle title="Biến chứng nguy hiểm nếu không điều trị" />
      <Grid container spacing={3}>
          <ComplicationItem 
              icon={<ReportProblemIcon fontSize="large"/>}
              title="Tắc mạch trĩ ngoại"
              description="Các cục máu đông hình thành trong búi trĩ, gây đau dữ dội, sưng to và có thể dẫn đến hoại tử nếu không được can thiệp kịp thời."
          />
          <ComplicationItem 
              icon={<ReportProblemIcon fontSize="large"/>}
              title="Nhiễm khuẩn"
              description="Búi trĩ bị lở loét, chảy dịch là môi trường lý tưởng cho vi khuẩn phát triển, gây nhiễm trùng, áp-xe hậu môn, thậm chí là nhiễm trùng máu."
          />
      </Grid>
      
      <Divider sx={{ my: 5 }} />

      <SectionTitle title="Phương pháp điều trị tại Phòng khám" />
      <Typography paragraph>
        Tùy thuộc vào mức độ nghiêm trọng của bệnh, các bác sĩ tại Phòng Khám Chuyên Khoa Ngoại sẽ chỉ định phương pháp điều trị phù hợp nhất:
      </Typography>
      <ul>
        <li><strong>Điều trị nội khoa:</strong> Sử dụng thuốc uống, thuốc bôi tại chỗ để giảm đau, kháng viêm, làm bền thành mạch. Áp dụng cho các trường hợp trĩ nhẹ.</li>
        <li><strong>Can thiệp thủ thuật:</strong> Các phương pháp như cắt trĩ bằng công nghệ Laser, HCPT... được áp dụng để loại bỏ búi trĩ một cách nhanh chóng, ít đau đớn và hạn chế tái phát.</li>
      </ul>
       {/* <Typography variant="body1" sx={{ mt: 3, fontStyle: 'italic', fontWeight: 500, textAlign: 'center', p: 2, backgroundColor: '#FFF8E1', borderRadius: '8px' }}>
        Đừng để trĩ ngoại ảnh hưởng đến cuộc sống của bạn. 
        <Link href="#" underline="hover" sx={{ color: '#BF360C', fontWeight: 'bold' }}>
          [Liên hệ ngay với chúng tôi để được tư vấn miễn phí!]
        </Link>
      </Typography> */}

    </Paper>
  );
}

export default TriNgoai; 