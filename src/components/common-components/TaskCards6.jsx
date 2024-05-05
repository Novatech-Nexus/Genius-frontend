import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FM from '../../assets/common-images/FM.jpg';

function TasksCards6() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={FM} />
            <Card.Body>
                <Card.Title>Customer care Management</Card.Title>
                <Button variant="primary" href='/manager'>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards6;