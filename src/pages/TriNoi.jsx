import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Link } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// Tạm thời vô hiệu hóa các import ảnh để tránh lỗi
// import ctaBanner from '../assets/cta-banner.png';
// import bienChungTriImg from '../assets/bien-chung-tri-noi.png';
// import khamTriImg from '../assets/kham-tri.png';

const SectionTitle = ({ icon, title }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 4 }}>
    {icon ? <HealthAndSafetyIcon sx={{ color: '#E91E63', fontSize: '2.5rem', mr: 1.5 }} /> : null}
    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#D32F2F' }}>
      {title}
    </Typography>
  </Box>
);

const CauseListItem = ({ children }) => (
  <ListItem sx={{ alignItems: 'flex-start', py: 0.5, pl: 0 }}>
    <ListItemIcon sx={{ minWidth: 'auto', mr: 1, mt: 0.5 }}>
      <ArrowRightIcon sx={{ color: '#E91E63', fontSize: '1.5rem' }} />
    </ListItemIcon>
    <ListItemText primary={children} primaryTypographyProps={{ variant: 'body1', sx: { lineHeight: 1.7 } }} />
  </ListItem>
);

const CheckListItem = ({ children }) => (
  <ListItem sx={{ alignItems: 'flex-start', py: 0.5, pl: 0 }}>
    <ListItemIcon sx={{ minWidth: 'auto', mr: 1, mt: 0.5 }}>
      <CheckBoxIcon sx={{ color: '#4CAF50', fontSize: '1.2rem' }} />
    </ListItemIcon>
    <ListItemText primary={children} primaryTypographyProps={{ variant: 'body1', sx: { lineHeight: 1.7, fontWeight: 500 } }} />
  </ListItem>
);

function TriNoi() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 5 }, borderRadius: '12px' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
        DẤU HIỆU TRĨ NỘI GIAI ĐOẠN ĐẦU – THỜI ĐIỂM VÀNG ĐIỀU TRỊ
      </Typography>
      
      {/* Tạm thời vô hiệu hóa banner
      <Box component="figure" sx={{ my: 4, mx: 0, '&:hover': { boxShadow: '0 8px 25px rgba(0,0,0,0.15)', cursor: 'pointer' }, transition: 'box-shadow 0.3s' }}>
        <img src={ctaBanner} alt="Đội ngũ bác sĩ đang online" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
      </Box>
      */}

      <SectionTitle icon title="BỆNH TRĨ NỘI LÀ GÌ? DẤU HIỆU NHẬN BIẾT" />
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        Bệnh trĩ được phân thành 3 loại chính, gồm trĩ nội (búi trĩ xuất hiện trên đường lược, khó phát hiện và nhận thấy bằng mắt thường ở giai đoạn đầu), trĩ ngoại (búi trĩ xuất hiện dưới đường lược, dễ nhận thấy bằng mắt thường trong giai đoạn đầu, gây ra nhiều triệu chứng khó chịu cho người bệnh) và trĩ hỗn hợp (xuất hiện cùng lúc cả hai loại trĩ nội và trĩ ngoại).
      </Typography>

      <SectionTitle icon title="BIẾN CHỨNG BỆNH TRĨ NỘI KHÔNG ĐIỀU TRỊ SỚM" />
      <List>
        <CauseListItem>
          <strong>Thiếu máu:</strong> Tình trạng chảy máu hậu môn do bệnh trĩ nếu diễn ra thường xuyên, kéo dài sẽ gây thiếu máu, khiến người bệnh luôn trong trạng thái suy nhược cơ thể, kiệt sức, ảnh hưởng nghiêm trọng đến chất lượng cuộc sống hàng ngày.
        </CauseListItem>
        <CauseListItem>
          <strong>Nhiễm khuẩn búi trĩ:</strong> Nếu búi trĩ không sớm được điều trị, để kéo dài dẫn đến phát triển lớn hơn, sa ra ngoài hậu môn có thể gây cọ xát liên tục với quần, mặt phẳng cứng gây nên tổn thương, chảy máu, tăng tiết dịch nhầy khiến búi trĩ thường xuyên ẩm ướt, dễ bị nhiễm trùng và hoại tử.
        </CauseListItem>
        <CauseListItem>
          <strong>Nhiễm trùng máu:</strong> Nếu tình trạng nhiễm trùng búi trĩ không sớm được khắc phục, khu vực này sẽ bị lở loét, chảy máu dẫn đến biến chứng nhiễm trùng máu rất nguy hiểm, đe dọa trực tiếp đến sức khỏe người bệnh, nhiều trường hợp cần phải phẫu thuật và lọc máu.
        </CauseListItem>
      </List>
      
      {/* Tạm thời vô hiệu hóa banner
      <SectionTitle icon title="NHỮNG BIẾN CHỨNG CỦA BỆNH TRĨ" />
      <Box component="figure" sx={{ my: 4, mx: 0 }}>
        <img src={bienChungTriImg} alt="Những biến chứng của bệnh trĩ" style={{ width: '100%', borderRadius: '8px' }} />
      </Box>
      */}

      <SectionTitle icon title="NGUYÊN NHÂN BỆNH TRĨ NỘI? CÁCH CHẨN ĐOÁN" />
      <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fafafa', my: 2 }}>
        <Typography variant="h6" gutterBottom>Có nhiều yếu tố gây nên bệnh trĩ như:</Typography>
        <ul>
          <li>Ngồi hoặc đứng nhiều, ít vận động; ngồi đại tiện lâu hoặc rặn mạnh</li>
          <li>Ăn uống thiếu khoa học, ăn ít rau xanh và chất xơ, ăn nhiều đồ cay nóng, uống ít nước</li>
        </ul>
      </Box>
      <CheckListItem>
        <strong>Để chẩn đoán bệnh trĩ nội, bác sĩ chuyên khoa thường thực hiện các bước kiểm tra sau:</strong>
      </CheckListItem>
      <CheckListItem>
        <strong>Thu thập thông tin bệnh lý:</strong> Bác sĩ sẽ hỏi các câu hỏi về triệu chứng người bệnh đang gặp phải, thói quen ăn uống sinh hoạt, tiền sử bệnh lý của bản thân và gia đình, tiền sử quan hệ tình dục,...Dựa trên các thông tin này, bác sĩ sẽ đưa ra chỉ định khám và kiểm tra phù hợp.
      </CheckListItem>

      {/* Tạm thời vô hiệu hóa banner
       <Box component="figure" sx={{ my: 4, mx: 0 }}>
        <img src={khamTriImg} alt="Khám trĩ" style={{ width: '100%', borderRadius: '8px' }} />
      </Box>
      */}

      <SectionTitle icon title="CÁCH KHẮC PHỤC VÀ ĐIỀU TRỊ BỆNH TRĨ NỘI HIỆN NAY" />
      <List>
        <CauseListItem>Đối với tình trạng bệnh trĩ nội nhẹ, bác sĩ sẽ kê đơn thuốc hỗ trợ nhuận tràng, thuốc giảm viêm sưng, tư vấn về các loại thực phẩm và chế độ sinh hoạt phù hợp. Bệnh nhân cần tái khám lại sau đó để đảm bảo bệnh trĩ đã thuyên giảm, kịp thời xử trí biến chứng nếu bệnh trĩ vẫn tiếp tục phát triển.</CauseListItem>
        <CauseListItem>Đối với tình trạng bệnh trĩ nội nặng hoặc đã tiến triển một thời gian dài, bác sĩ sẽ tiến hành thủ thuật hoặc phương pháp ngoại khoa phù hợp để loại bỏ búi trĩ. Một số phương pháp được sử dụng để hỗ trợ điều trị như thắt vòng cao su, tiêm xơ búi trĩ, cắt trĩ bằng Laser, cắt trĩ PPH, cắt trĩ HCPT,...</CauseListItem>
      </List>

    </Paper>
  );
}

export default TriNoi;
