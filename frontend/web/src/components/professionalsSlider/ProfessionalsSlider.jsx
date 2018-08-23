import React from 'react';
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import './ProfessionalsSlider.module.scss'
import Swiper from 'react-id-swiper';
import {inject, observer} from "mobx-react/index";
import loader from '../../assets/images/loading.svg'


@inject('professionalsStore')
@observer
class ProfessionalsSlider extends ResponsiveComponent {

    renderDesktop() {
        const {professionalsStore} = this.props

        const params = {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            }
        }

        return (
            <div className="prof-slider-wrapper">
                <div className="mb3 suggested-profs">מומלצים</div>
                {
                    professionalsStore.isLoadingProfessionals ?
                        <img src={loader} className="loader" alt="loading-spinner"/>
                        :
                        <div className="prof-slider">
                            <Swiper
                                ref={swiper => this.swiper = swiper}
                                loop={true}
                                rtl={true}
                                autoplay={{delay: 3500}}
                                preloadImages={false}
                                watchSlidesVisibility={true}
                                lazyLoading={true}
                                slidesPerView="auto"
                                autoplayDisableOnInteraction={false}
                                {...params}
                            >

                                {
                                    professionalsStore.professionals.map(prof =>
                                        <div key={prof.id}>
                                            <div className="slider-img" style={{backgroundImage: `url(${prof.image})`}}>
                                                <div className="prof-info">
                                                    {prof.name} {prof.secondName}, {prof.category}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }


                                {/*<div alt="slide" className="slider-img" style={{ backgroundImage: `url(https://source.unsplash.com/featured/1920*430/?culture)` }}>*/}
                                {/*<div className="slogan flex flex-column items-center">*/}

                                {/*</div>*/}
                                {/*</div>*/}

                                {/*<div alt="slide" className="slider-img" style={{ backgroundImage: `url(https://source.unsplash.com/featured/1920*430/?concert)` }}>*/}
                                {/*<div className="slogan flex flex-column items-center">*/}

                                {/*</div>*/}
                                {/*</div>*/}


                            </Swiper>
                        </div>
                }

            </div>
        );
    }

    renderMobile() {
        return <div>Slider</div>
    }
}

export default ProfessionalsSlider;
