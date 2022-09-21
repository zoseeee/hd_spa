import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import '../css/Main.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

const SLIDE = [
    { id: 1, title: "01 The world expands along the new path created", content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다", link: "/sub01" },
    { id: 2, title: "02 The world expands along the new path created", content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다", link: "/sub02" },
    { id: 3, title: "03 The world expands along the new path created", content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다", link: "/sub03" },
]

const dataurl = process.env.PUBLIC_URL + '/data/slidedata.json';
console.log(dataurl)



const Main = () => {
    const [slide, setSlide] = useState([]);
    const getSlideData = async () => {
        const data = await axios.get(dataurl);
        setSlide(data);
    }
    useEffect(() => {
        getSlideData();
        console.log(slide)
    }, [])
    return (
        <section className='Main'>
            <div className="mainVisual">
                <Swiper className='mainSlider'>
                    {
                        SLIDE.map((slide, idx) => {
                            return (
                                <SwiperSlide className={`itm itm${slide.id}`}>
                                    <div className="content">
                                        <p>{slide.title}</p>
                                        <div className="des">
                                            {slide.content}
                                        </div>
                                        <Link to={slide.link}>
                                            자세히보기
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Main