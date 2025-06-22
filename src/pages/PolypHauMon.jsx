import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import ctaBanner from '../assets/cta-banner.png'; // Tạm thời vô hiệu hóa do file có thể chưa tồn tại

const SectionTitle = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 4 }}>
    <HealthAndSafetyIcon sx={{ color: '#4CAF50', fontSize: '2.5rem', mr: 1.5 }} />
    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#1E88E5' }}>
      {children}
    </Typography>
  </Box>
);

const CauseListItem = ({ children }) => (
  <ListItem sx={{ py: 0.5, pl: 0 }}>
    <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
      <ArrowRightIcon sx={{ color: '#F44336', fontSize: '1.5rem' }} />
    </ListItemIcon>
    <ListItemText 
      primary={children} 
      primaryTypographyProps={{ variant: 'body1', sx: { lineHeight: 1.7 } }}
    />
  </ListItem>
);

function PolypHauMon() {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 5 }, borderRadius: '12px' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
        POLYP HẬU MÔN CÓ NGUY HIỂM KHÔNG?
      </Typography>

      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', fontStyle: 'italic' }}>
        Polyp hậu môn là một khối u nhỏ, thường xuất hiện trên bề mặt nội soi của hậu môn hoặc trực tràng. Đây là một tình trạng phổ biến, đặc biệt là ở những người trên 50 tuổi. Tuy nhiên, polyp hậu môn cũng có thể xuất hiện ở những người trẻ hơn tuổi.
      </Typography>

      {/* Tạm thời vô hiệu hóa banner
      <Box component="figure" sx={{ my: 4, mx: 0, '&:hover': { boxShadow: '0 8px 25px rgba(0,0,0,0.15)', cursor: 'pointer' }, transition: 'box-shadow 0.3s' }}>
        <img src={ctaBanner} alt="Đội ngũ bác sĩ đang online" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
      </Box>
      */}

      <SectionTitle>NGUYÊN NHÂN POLYP HẬU MÔN LÀ GÌ?</SectionTitle>
      <List dense>
        <CauseListItem>
          Trước hết, hậu môn là đoạn cuối cùng của đường tiêu hóa nên chế độ ăn uống là một trong những căn nguyên gây ra bệnh polyp hậu môn, đặc biệt là ăn những thực phẩm có nhiều axit.
        </CauseListItem>
        <CauseListItem>
          Thứ hai, bệnh có thể di truyền từ cha mẹ sang con cái, cả nam và nữ đều có thể di truyền bệnh.
        </CauseListItem>
        <CauseListItem>
          Thứ ba, tổn thương bên ngoài hậu môn cũng là tác nhân dẫn đến bệnh polyp hậu môn. Tổn thương bên ngoài hậu môn sẽ tạo điều kiện thuận lợi cho nhiều mầm bệnh tấn công, xâm nhập sâu vào bên trong hậu môn. Điều này gây tổn thương nghiêm trọng bên trong hậu môn, điển hình là gây áp xe hậu môn.
        </CauseListItem>
         <CauseListItem>
          Thứ tư, một số vi khuẩn từ các cơ quan khác có thể gây bệnh lây lan sang các bộ phận khác của cơ thể, bao gồm cả bệnh lao.
        </CauseListItem>
         <CauseListItem>
          Thứ năm, các bệnh lý bên trong hậu môn như tắc nghẽn mạch máu hậu môn, tế bào niêm mạc hậu môn bị hoại tử, ống hậu môn hẹp hoặc cong hơn bình thường.
        </CauseListItem>
      </List>
      <Typography variant="body1" sx={{ mt: 3, fontStyle: 'italic', fontWeight: 500, textAlign: 'center', p: 2, backgroundColor: '#E3F2FD', borderRadius: '8px' }}>
        Liên hệ với chúng tôi để được tư vấn trực tiếp với các chuyên gia về bệnh Polyp hậu có nguy hiểm gì đến sức khỏe của bạn không?
      </Typography>
      
      <Divider sx={{ my: 5 }} />

      <SectionTitle>TẠI SAO NÊN ĐIỀU TRỊ POLYP HẬU MÔN TẠI PHÒNG KHÁM CHUYÊN KHOA NGOẠI?</SectionTitle>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        <Typography component="span" sx={{ fontWeight: 'bold' }}>PHÒNG KHÁM CHUYÊN KHOA NGOẠI</Typography> là một trong những phòng khám uy tín và hiệu quả tại Đà Lạt về chẩn đoán và điều trị các vấn đề về tiêu hóa. Phòng khám sử dụng công nghệ tối tân để chẩn đoán và điều trị polyp hậu môn hiệu quả.
      </Typography>
       <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        Các chuyên gia tại đây sẽ đưa ra phương pháp điều trị phù hợp dựa trên kích thước và vị trí của polyp hậu môn. Nếu polyp hậu môn đã phát triển thành ung thư, phòng khám cũng cung cấp các phương pháp điều trị tiên tiến để đảm bảo tối đa hiệu quả điều trị.
      </Typography>

    </Paper>
  );
}

export default PolypHauMon; 