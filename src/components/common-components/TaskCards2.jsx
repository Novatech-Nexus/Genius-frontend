import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EM from '../../assets/common-images/EM.jpg';

function TasksCards2() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={EM} />
            <Card.Body>
                <Card.Title>Employee Management</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards2;