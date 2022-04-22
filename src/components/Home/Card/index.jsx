import React, { useState } from 'react';
import { Wrap, Filter, Houses } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import lodha from '../../../assets/image/lodha.png';
import prestige from '../../../assets/image/prestige.png';
import brigade from '../../../assets/image/brigade.png';
import sobh from '../../../assets/image/sobh.png';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import home1 from '../../../assets/image/slide-home.png';
import home2 from '../../../assets/image/slide-home2.jpg';
import home3 from '../../../assets/image/slide-home3.jpg';

const Card = () => {
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(3);

  return (
    <Wrap>
      <Wrap.Swiper>
        <Swiper className='swiper' slidesPerView={3.5} spaceBetween={30}>
          <SwiperSlide>
            <Wrap.SwiperSlide>
              <Wrap.Img src={lodha} />
              <Wrap.Title>Lodha Group</Wrap.Title>
              <Wrap.P>35+ years of experience</Wrap.P>
              <Wrap.Link>270+ Project Done</Wrap.Link>
              <Wrap.Button>
                Check profile
                <Wrap.Btn>
                  <Wrap.Arrow />
                </Wrap.Btn>
              </Wrap.Button>
            </Wrap.SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <Wrap.SwiperSlide>
              <Wrap.Img className='prestige' src={prestige} />
              <Wrap.Title>Prestige Group</Wrap.Title>{' '}
              <Wrap.P>40+ years of experience</Wrap.P>
              <Wrap.Link>140+ Project Done</Wrap.Link>
              <Wrap.Button>
                Check profile
                <Wrap.Btn>
                  <Wrap.Arrow />
                </Wrap.Btn>
              </Wrap.Button>
            </Wrap.SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <Wrap.SwiperSlide>
              <Wrap.Img className='brigade' src={brigade} />
              <Wrap.Title>Brigade Group</Wrap.Title>{' '}
              <Wrap.P>35+ years of experience</Wrap.P>
              <Wrap.Link>180+ Project Done</Wrap.Link>
              <Wrap.Button>
                Check profile
                <Wrap.Btn>
                  <Wrap.Arrow />
                </Wrap.Btn>
              </Wrap.Button>
            </Wrap.SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <Wrap.SwiperSlide>
              <Wrap.Img className='sobh' src={sobh} />
              <Wrap.Title>Sobha Limited</Wrap.Title>{' '}
              <Wrap.P>35+ years of experience</Wrap.P>
              <Wrap.Link>150+ Project Done</Wrap.Link>
              <Wrap.Button>
                Check profile
                <Wrap.Btn>
                  <Wrap.Arrow />
                </Wrap.Btn>
              </Wrap.Button>
            </Wrap.SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <Wrap.SwiperSlide>
              <Wrap.Img src={lodha} />
              <Wrap.Title>Lodha Group</Wrap.Title>
              <Wrap.P>35+ years of experience</Wrap.P>
              <Wrap.Link>270+ Project Done</Wrap.Link>
              <Wrap.Button>
                Check profile
                <Wrap.Btn>
                  <Wrap.Arrow />
                </Wrap.Btn>
              </Wrap.Button>
            </Wrap.SwiperSlide>
          </SwiperSlide>
        </Swiper>
      </Wrap.Swiper>
      <Filter>
        <Filter.Wrap type='column'>
          <Filter.Wrap>
            <Filter.Input placeholder='Search Property Name, Locality, Developer' />
            <Filter.Title>Bedrooms</Filter.Title>
            <Filter.Count>
              <Filter.Btn minus='true' /> <span>2</span> <Filter.Btn />
            </Filter.Count>
          </Filter.Wrap>
          <Filter.Wrap>
            <Filter.Title>Price Segment</Filter.Title>
            <Filter.Swipe>
              <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide>Affordable</SwiperSlide>
                <SwiperSlide>Cheapest</SwiperSlide>
                <SwiperSlide>Costy</SwiperSlide>
              </Swiper>
            </Filter.Swipe>
            <Filter.Title>Ready to Move</Filter.Title>
            <Filter.CheckBox>
              <Filter.Check onClick={() => setCheck(!check)} check={check}>
                <Filter.CheckBtn check={check} />
              </Filter.Check>
            </Filter.CheckBox>
            <Filter.Advance>Advance Filters</Filter.Advance>
          </Filter.Wrap>
        </Filter.Wrap>

        <Filter.Search>
          <Filter.SearchBtn />
        </Filter.Search>
      </Filter>

      <Houses>
        <Houses.Each
          home={home1}
          onClick={() => setShow(1)}
          width={show}
          real={1}
        >
          <Houses.Text width={show} real={1}>
            <Houses.Title>Lodha Miracles</Houses.Title>
            <Houses.P> Andheri East, Mumbai</Houses.P>
            <Houses.P>$ 4350K - 1680K</Houses.P>
            <Houses.Ul>
              <Houses.Li>1BHK</Houses.Li>
              <Houses.Li>2BHK</Houses.Li>
              <Houses.Li>Rental</Houses.Li>
            </Houses.Ul>
          </Houses.Text>
          <Houses.Bottom width={show} real={1}>
            Lodha Miracles
          </Houses.Bottom>
          <Houses.Layer width={show} real={1} />
        </Houses.Each>
        <Houses.Each
          home={home2}
          onClick={() => setShow(2)}
          width={show}
          real={2}
        >
          <Houses.Text width={show} real={2}>
            <Houses.Title>Lodha Miracles</Houses.Title>
            <Houses.P> Andheri East, Mumbai</Houses.P>
            <Houses.P>$ 150K - 380K</Houses.P>
            <Houses.Ul>
              <Houses.Li>1BHK</Houses.Li>
              <Houses.Li>2BHK</Houses.Li>
              <Houses.Li>Rental</Houses.Li>
            </Houses.Ul>
          </Houses.Text>
          <Houses.Bottom width={show} real={2}>
            Lodha Miracles
          </Houses.Bottom>
          <Houses.Layer width={show} real={2} />
        </Houses.Each>
        <Houses.Each
          home={home3}
          onClick={() => setShow(3)}
          width={show}
          real={3}
        >
          <Houses.Text width={show} real={3}>
            <Houses.Title>Lodha Miracles</Houses.Title>
            <Houses.P> Andheri East, Mumbai</Houses.P>
            <Houses.P>$ 450K - 680K</Houses.P>
            <Houses.Ul>
              <Houses.Li>1BHK</Houses.Li>
              <Houses.Li>2BHK</Houses.Li>
              <Houses.Li>Rental</Houses.Li>
            </Houses.Ul>
          </Houses.Text>
          <Houses.Bottom width={show} real={3}>
            Lodha Miracles
          </Houses.Bottom>
          <Houses.Layer width={show} real={3} />
        </Houses.Each>
      </Houses>
    </Wrap>
  );
};

export default Card;
