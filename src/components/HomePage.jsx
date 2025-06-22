import { Box, Grid, Button, Typography } from '@mui/material';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import CarouselImg from '../assets/Carousel.png';
import Bacsi1 from '../assets/Bacsi1.png';
import Bacsi2 from '../assets/Bacsi2.png';
import menu01 from '../assets/menu-01.jpg';
import menu02 from '../assets/menu-02.jpg';
import menu03 from '../assets/menu-03.jpg';
import menu04 from '../assets/menu-04.jpg';
import menu05 from '../assets/menu-05.jpg';
import menu06 from '../assets/menu-06.jpg';
import menu07 from '../assets/menu-07.jpg';
import menu08 from '../assets/menu-08.jpg';

function HomePage() {
  const navigate = useNavigate();

  const menuItems = [
    { image: menu01, description: 'Poly Hậu Môn', path: '/polyp-hau-mon' },
    { image: menu02, description: 'Trĩ Nội', path: '/tri-noi' },
    { image: menu03, description: 'Trĩ Ngoại', path: '/tri-ngoai' },
    { image: menu04, description: 'Nứt Kẻ Hậu Môn', path: '/nut-ke-hau-mon' },
    { image: menu05, description: 'Rò Hậu Môn', path: '/ro-hau-mon' },
    { image: menu06, description: 'Trĩ Hỗn Hợp', path: '/tri-hon-hop' },
    { image: menu07, description: 'Áp xe hậu môn', path: '/ap-xe-hau-mon' },
    { image: menu08, description: 'Bệnh Trĩ', path: '/benh-tri' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slideImages = [
    { img: CarouselImg, alt: 'Slide 1' },
    { img: Bacsi1, alt: 'Slide 2' },
    { img: Bacsi2, alt: 'Slide 3' },
  ];

  // Hàm xử lý khi bấm vào button
  const handleClick = (index) => {
    const item = menuItems[index];
    navigate(item.path);
  };

  // Chia thành 2 hàng, mỗi hàng 4 item
  const rows = [
    menuItems.slice(0, 4),
    menuItems.slice(4, 8),
  ];

  return (
    <Box sx={{ p: 2, overflow: 'hidden' }}> {/* Thêm overflow hidden để tránh thanh cuộn ngang không mong muốn */}
      {/* Carousel mới sử dụng react-slick */}
      <Box sx={{ 
        mb: 4, 
        position: 'relative', // Cần thiết để định vị các nút mũi tên
        '.slick-prev, .slick-next': {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          transition: 'background-color 0.2s',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }
        },
        '.slick-prev': {
          left: '25px', // Cách mép trái
        },
        '.slick-next': {
          right: '25px', // Cách mép phải
        },
        '.slick-prev:before, .slick-next:before': {
          color: 'white',
          fontSize: '20px', // Tăng kích thước mũi tên
          opacity: 1,
        }
      }}>
        <Slider {...sliderSettings}>
          {slideImages.map((slide, index) => (
            <div key={index}>
              <img src={slide.img} alt={slide.alt} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
            </div>
          ))}
        </Slider>
      </Box>

      {/* Thumbnails tròn dạng button chia 2 hàng */}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 4, mt: 4 }}>
        {rows.map((row, rowIndex) => (
          <Grid container key={rowIndex} justifyContent="space-around" sx={{ width: '100%', alignItems: 'flex-start' }}>
            {row.map((item, colIndex) => {
              const itemIndex = rowIndex * 4 + colIndex;
              return (
                <Grid key={itemIndex} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 120 }}>
                  <Button
                    onClick={() => handleClick(itemIndex)}
                    sx={{
                      minWidth: 0,
                      p: 0,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      boxShadow: 3,
                      width: '100px',
                      height: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.description}
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </Button>
                  <Typography variant="body1" sx={{ mt: 1.5, fontWeight: 600, color: '#333', textAlign: 'center' }}>
                    {item.description}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        ))}
      </Box>
    </Box>
  );
}

export default HomePage;
