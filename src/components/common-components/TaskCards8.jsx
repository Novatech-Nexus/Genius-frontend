import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TR from '../../assets/common-images/TR.jpg';

function TasksCards8() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={TR} />
            <Card.Body>
                <Card.Title>Table Reservation Management</Card.Title>
                <Button variant="primary" href='/booking'>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards8;