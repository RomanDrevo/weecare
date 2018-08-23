import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/scss/swiper.scss'
import './DesktopSlider.module.scss';
import ReactLoading from 'react-loading';
import homeImprove from '../../assets/images/home-improvement.jpg'
import repairHardDisk from '../../assets/images/repairing-harddisk.jpg'
import fixComputer from '../../assets/images/man-fixing-a-computer.jpg'
import fixConditioner from '../../assets/images/repairing-air-conditioner.jpg'



// @observer
// class SliderBenefitInfo extends Component {
//
//     render() {
//         const { benefit, benefitsStore } = this.props;
//
//         return (
//             <div className="slider-benefit-info p4">
//                 <div>{benefit.name}</div>
//                 <div className="store-logo flex justify-between mt3">
//                     <img alt={benefit.name} src={benefit.storeLogoImg}/>
//                     <div className="">
//                         <img className="favorite-img"
//                              alt="favorite-icon"
//                              onClick={(e) => {
//                                  e.preventDefault();
//                                  benefitsStore.toggleFavorite(benefit)
//                              }}
//                              src={require(`../../../../assets/images/${benefit.isFavorite ? 'icon_heart_full.svg' : 'favorite.svg'}`)}/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// @inject('benefitsStore')
// @observer
class DesktopSlider extends Component {
    state = {
        fuckSwiperBug: false
    };

    componentDidMount() {
        setTimeout(() => this.setState({ fuckSwiperBug: true }), 500);
    }

    render() {
        // const { benefitsStore } = this.props;

        const params = {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev'
            // }
        };

        return (
            <div className="slider">
                {
                    !this.state.fuckSwiperBug ?
                    <div className="flex items-center justify-center" style={{height: '430px'}}>
                        <ReactLoading type="spinningBubbles"
                                      height="30px"
                                      width="30px"
                                      color="#19398a"
                                      delay={0}/>
                    </div> :
                    <Swiper
                        ref={swiper => this.swiper = swiper}
                        loop={true}
                        rtl={true}
                        autoplay={{ delay: 3500 }}
                        preloadImages={false}
                        watchSlidesVisibility={true}
                        lazyLoading={true}
                        slidesPerView="auto"
                        autoplayDisableOnInteraction={false}
                        {...params}
                    >

                        {/*<div><img src="https://source.unsplash.com/featured/1920*430/?culture" /></div>*/}
                        {/*<div><img src="https://source.unsplash.com/featured/1920*430/?food" /></div>*/}
                        {/*<div><img src="https://source.unsplash.com/featured/1920*430/?movie" /></div>*/}


                        <div alt="slide" className="slider-img" style={{ backgroundImage: `url(${homeImprove})` }}>
                            <div className="slogan flex flex-column items-center">
                                <div>מחפש שיפוצניק, חשמלאי, רואה חשבון, זמר לאירוע?</div>
                                <div>הכל מוצאים פה</div>
                            </div>
                        </div>

                        <div alt="slide" className="slider-img" style={{ backgroundImage: `url(${repairHardDisk})` }}>
                            <div className="slogan flex flex-column items-center">
                                <div>מחפש שיפוצניק, חשמלאי, רואה חשבון, זמר לאירוע?</div>
                                <div>הכל מוצאים פה</div>
                            </div>
                        </div>
                        

                        <div alt="slide" className="slider-img" style={{ backgroundImage: `url(${fixConditioner})` }}>
                            <div className="slogan flex flex-column items-center">
                                <div>מחפש שיפוצניק, חשמלאי, רואה חשבון, זמר לאירוע?</div>
                                <div>הכל מוצאים פה</div>
                            </div>
                        </div>

                        <div alt="slide" className="slider-img" style={{ backgroundImage: `url(${fixComputer})` }}>
                            <div className="slogan flex flex-column items-center">
                                <div>מחפש שיפוצניק, חשמלאי, רואה חשבון, זמר לאירוע?</div>
                                <div>הכל מוצאים פה</div>
                            </div>
                        </div>



                    </Swiper>
                }

            </div>
        )
    }
}

export default DesktopSlider;
