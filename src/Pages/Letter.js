import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';

const Letter = () => {
  return (
    <div style={{display:"flex",height:440,alignItems:"center",justifyContent:"center"}}>
    <Card
      bg="primary"
      text="white"
      style={{ width: '18rem',padding:10,margin:10 ,height:'15rem'}}
      className="mb-2">
      <Card.Header>Offer Letter</Card.Header>
      <Card.Body>
        <Card.Title> Download Offer Letter </Card.Title>
        <Card.Text>
          Kindly, Download the offer letter on before 25 june,as it wil be taken down after that.
        </Card.Text>
        <Button variant="warning">Download</Button>
      </Card.Body>
    </Card>
    <Card
      bg="secondary"
      text="white"
      style={{ width: '18rem',padding:10,margin:10 ,height:'15rem'}}
      className="mb-2">
      <Card.Header>Resume</Card.Header>
      <Card.Body>
        <Card.Title> Upload Resume </Card.Title>
        <Card.Text>
          Kindly Upload Resume on or before 25 june, for further onboarding process
        </Card.Text>
        <Button variant="warning">Upload</Button>
      </Card.Body>
    </Card>
    <Card
      bg="success"
      text="white"
      style={{ width: '18rem',padding:10,margin:10 ,height:'15rem'}}
      className="mb-2">
      <Card.Header>Documents</Card.Header>
      <Card.Body>
        <Card.Title> Upload Documents </Card.Title>
        <Card.Text>
          Kindly upload all the necessary certificates on or before 25 june for background verification.
        </Card.Text>
        <Button variant="warning">Upload</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Letter
