import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IM from '../../assets/common-images/IM.jpg';

function TasksCards4() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={IM} />
            <Card.Body>
                <Card.Title>Inventory Management</Card.Title>
                <Button variant="primary" href='/dashboard'>Inventory Management</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards4;