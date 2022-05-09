import React from 'react';
import Card from 'react-bootstrap/Card'
import { CardGroup } from 'react-bootstrap';
import bell from './Images/bell.png';
import key from './Images/key.png';
import stone from './Images/stone.png';
import Ellipse from './Images/Ellipse.svg';
import Ellipse2 from './Images/Ellipse2.svg';
import Ellipse3 from './Images/Ellipse3.svg';

const WhyUs = () => {
    return (
        <>
            <div classNameName="whyUs">
                <div classNameName="info">
                    <p classNameName='title' style={{ textAlign: 'center' }}>Why Us?</p>
                </div>
            </div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="bell" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="stone" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="key" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
    )
}
export default WhyUs