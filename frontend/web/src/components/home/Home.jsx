import React from 'react';
import {Button, Col, Grid, Modal, Row} from 'react-bootstrap';
import DesktopSlider from "../desktop-slider/DesktopSlider";
import './Home.module.scss'
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import Footer from "../../components/footer/Footer"
import Header from "../header/Header";
import {inject, observer} from "mobx-react/index";
import loader from '../../assets/images/loading.svg'
import Category from "../category/Category";
import ServiceCallForm from "../serviceCallForm/ServiceCallForm";
import ProfessionalForm from "../professionalForm/ProfessionalForm";
import ProfessionalsSlider from "../professionalsSlider/ProfessionalsSlider";


class ServiceCallModal extends React.Component {

    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">קריאת שרות</Modal.Title>
                </Modal.Header>
                <Modal.Body className="flex justify-center">
                    <ServiceCallForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>סגור</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

class ProfessionalFormModal extends React.Component {

    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">בעל מקצוע</Modal.Title>
                </Modal.Header>
                <Modal.Body className="flex justify-center">
                    <ProfessionalForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>סגור</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


@inject('categoriesStore', 'professionalsStore', 'customerStore')
@observer
class Home extends ResponsiveComponent {

    serviceCallModalClose = () => this.props.customerStore.closeServiceCallForm()

    professionalFormModalModalClose = () => this.props.professionalsStore.closeProfessionalForm()

    componentDidMount() {
        const {categoriesStore, professionalsStore} = this.props
        categoriesStore.loadCategoriesForDesktop()
        professionalsStore.loadProfessionals()
    }

    renderDesktop() {
        const {categoriesStore, professionalsStore, customerStore} = this.props
        console.log('categoriesStore: ', categoriesStore)
        console.log('professionals: ', professionalsStore.professionals)

        // if(categoriesStore.isLoadingCategories){
        //     return <img src={loader} className="loader" alt="loading-spinner" />
        // }

        return (
            <div className="home-wrapper">
                <Header/>
                <DesktopSlider/>
                <div className="slider-buttons-wrapper flex justify-center">
                    <div className="slider-buttons flex justify-around items-center">
                        <button onClick={professionalsStore.openProfessionalForm} className="slider-button">
                            קבל לידים חמים בחינם
                        </button>
                        <button onClick={customerStore.openServiceCallForm} className="slider-button">
                            קבל הצעות שירות בקליק
                        </button>
                    </div>
                </div>
                {
                    categoriesStore.isLoadingCategories ?
                        <img src={loader} className="loader" alt="loading-spinner"/>
                        :
                        <Grid className="home-content">
                            <Row>
                                <Col xs={10}>
                                    <Col className="mb3" xs={12}>
                                        <div className="categories-title">תחומים ראשיים</div>
                                    </Col>

                                    {
                                        categoriesStore.categoriesForDesktop.map((category) =>
                                            <Col key={category.id} className="flex justify-center" xs={4}>
                                                <Category category={category}/>
                                            </Col>
                                        )
                                    }

                                    <Col className="flex justify-end" xs={12}>
                                        <button className="all-categories-btn ml3">לחץ לכל התחומים</button>
                                    </Col>
                                </Col>
                                <Col xs={2}>


                                    <ProfessionalsSlider/>

                                    <button className="contact-us-btn">צור קשר</button>

                                    <div className="intro-video">
                                        Video
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                }

                <ServiceCallModal show={customerStore.isServiceCallFormOpen} onHide={this.serviceCallModalClose}/>

                <ProfessionalFormModal
                    show={professionalsStore.isProfessionalFormOpen}
                    onHide={this.professionalFormModalModalClose}
                />

                <Footer/>
            </div>

        );
    }

    renderMobile() {
        return (
            <div>MoBILE</div>
        )
    }
}

export default Home;
