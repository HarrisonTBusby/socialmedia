import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { useState } from 'react';
import Switch from './Toggle/togglecomponent';
import FacebookImg from '../Assets/icon-facebook.svg';
import TwitterImg from '../Assets/icon-twitter.svg';
import InstagramImg from '../Assets/icon-instagram.svg';
import YoutubeImg from '../Assets/icon-youtube.svg';
import Up from '../Assets/icon-up.svg';
import Down from '../Assets/icon-down.svg';



export default function Dashboard(props) {
    const [value, setValue] = useState(false);


    return (
        <body className='background1'>
            <div className='background2'>
                <Container className='pb-5'>

                    <Row>
                        <Col className='col-xxl-6 col-12'>
                            <h3 className='font1 mr2'>Social Media Dashboard</h3>
                            <p className='font2 mr2'>Total Followers: 23,004</p>
                        </Col>
                        <div className='line'></div>
                        <Col className='col-xxl-6 col-12 d-flex justify-content-end align-items-center'>
                           <Switch  isOn={value}
                                handleToggle={() => setValue(!value)}/>
                        </Col>
                    </Row>

                    <Row>

                        <Col className=''>
                            <Card className='boxBackground1 font2 text-center'>
                                <Card.Body>
                                    <img src={FacebookImg} />
                                    @nathanf
                                    <Row className='center'>
                                        <p className='fontFollower'>1987</p>
                                    </Row>
                                    <Row>
                                        <p className='font3'>FOLLOWERS</p>
                                    </Row>
                                    <Row>
                                        <Col className='fontUp'>
                                            <img src={Up} />
                                            12 Today
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col>
                            <Card className='boxBackground2 font2 text-center'>
                                <Card.Body>
                                    <img src={TwitterImg} />
                                    @nathanf
                                    <Row className='center'>
                                        <p className='fontFollower'>1044</p>
                                    </Row>
                                    <Row>
                                        <p className='font3'>FOLLOWERS</p>
                                    </Row>
                                    <Row>
                                        <Col className='fontUp'>
                                            <img src={Up} />
                                            99 Today
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className=''>
                            <Card className='boxBackground3 font2 text-center'>
                                <Card.Body>
                                    <img src={InstagramImg} />
                                    @realnathanf
                                    <Row className='center'>
                                        <p className='fontFollower'>11k</p>
                                    </Row>
                                    <Row>
                                        <p className='font3'>FOLLOWERS</p>
                                    </Row>
                                    <Row>
                                        <Col className='fontUp'>
                                            <img src={Up} />
                                            1099 Today
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className='boxBackground4 font2 text-center'>
                                <Card.Body>
                                    <img src={YoutubeImg} />
                                    Nathan F.
                                    <Row className='center'>
                                        <p className='fontFollower'>8239</p>
                                    </Row>
                                    <Row>
                                        <p className='font3'>SUBSCRIBERS</p>
                                    </Row>
                                    <Row>
                                        <Col className='fontDown'>
                                            <img src={Down} />
                                            144 Today
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* ============================================================================ */}
                    {/* BOTTOM PART */}

                    <Row className='mt1'>
                        <div className='mt-5'>
                            <h1 className='font1'>Overview - Today</h1>
                        </div>
                    </Row>

                    <Row className='mt-5'>
                        <Col className='col-xxl-3 col-12'>
                            <Card className='boxBackgroundBottom'>
                                <Card.Body>
                                <Row>
                                    <Col className='center mt-2 font2'>Page Views</Col>
                                    <Col className='center mt-2'>
                                        <img src={FacebookImg}/>
                                        </Col>
                                </Row>

                                <Row className='mt-5'>
                                    <Col className='center fontFollower2'>87</Col>

                                    <Col className='fontUp mt-4 text-center'>
                                    <img src={Up}/> 3%
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-xxl-3 col-12'>
                            <Card className='boxBackgroundBottom'>
                                <Card.Body>
                                <Row>
                                    <Col className='center mt-2 font2'>Likes</Col>
                                    <Col className='center mt-2'>
                                        <img src={FacebookImg}/>
                                        </Col>
                                </Row>

                                <Row className='mt-5'>
                                    <Col className='center fontFollower2'>52</Col>

                                    <Col className='fontDown text-center mt-4'>
                                    <img src={Down}/> 2%
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-xxl-3 col-12'>
                            <Card className='boxBackgroundBottom'>
                                <Card.Body>
                                <Row>
                                    <Col className='center mt-2 font2'>Likes</Col>
                                    <Col className='center mt-2'>
                                        <img src={InstagramImg}/>
                                        </Col>
                                </Row>

                                <Row className='mt-5'>
                                    <Col className='center fontFollower2'>5262</Col>

                                    <Col className='fontUp text-center mt-4 '>
                                    <img src={Up}/> 2257%
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-xxl-3 col-12'>
                            <Card className='boxBackgroundBottom'>
                                <Card.Body>
                                <Row>
                                    <Col className='center mt-2 font2'>Profile Views</Col>
                                    <Col className='center mt-2'>
                                        <img src={InstagramImg}/>
                                        </Col>
                                </Row>

                                <Row className='mt-5'>
                                    <Col className='center fontFollower2'>52k</Col>

                                    <Col className='fontUp text-center mt-4 '>
                                    <img src={Up}/> 1375%
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                    <Row className='mt-5'>
                    <Col className='col-xxl-3 col-12'>
                            <Card className='boxBackgroundBottom'>
                                <Card.Body>
                                <Row>
                                    <Col className='center mt-2 font2'>Retweets</Col>
                                    <Col className='center mt-2'>
                                        <img src={TwitterImg}/>
                                        </Col>
                                </Row>

                                <Row className='mt-5'>
                                    <Col className='center fontFollower2'>117</Col>

                                    <Col className='fontUp text-center mt-4 '>
                                    <img src={Up}/> 303%
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-xxl-3 col-12'>
                            <Card className='boxBackgroundBottom'>
                                <Card.Body>
                                <Row>
                                    <Col className='center mt-2 font2'>Likes</Col>
                                    <Col className='center mt-2'>
                                        <img src={TwitterImg}/>
                                        </Col>
                                </Row>

                                <Row className='mt-5'>
                                    <Col className='center fontFollower2'>507</Col>

                                    <Col className='fontUp text-center mt-4 '>
                                    <img src={Up}/> 553%
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-xxl-3 col-12'>
                            <Card className='boxBackgroundBottom'>
                                <Card.Body>
                                <Row>
                                    <Col className='center mt-2 font2'>Likes</Col>
                                    <Col className='center mt-2'>
                                        <img src={YoutubeImg}/>
                                        </Col>
                                </Row>

                                <Row className='mt-5'>
                                    <Col className='center fontFollower2'>107</Col>

                                    <Col className='fontDown text-center mt-4 '>
                                    <img src={Down}/> 19%
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-xxl-3 col-12'>
                            <Card className='boxBackgroundBottom'>
                                <Card.Body>
                                <Row>
                                    <Col className='center mt-2 font2'>Total Views</Col>
                                    <Col className='center mt-2'>
                                        <img src={YoutubeImg}/>
                                        </Col>
                                </Row>

                                <Row className='mt-5'>
                                    <Col className='center fontFollower2'>1407</Col>

                                    <Col className='fontDown text-center mt-4 '>
                                    <img src={Down}/> 12%
                                    </Col>
                                </Row>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>


                </Container>
            </div>

        </body>
    );
}

