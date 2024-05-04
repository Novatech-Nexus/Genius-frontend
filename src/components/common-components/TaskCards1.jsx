import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UM from '../../assets/common-images/UM.jpg';

function TasksCards1() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={UM} />
            <Card.Body>
                <Card.Title>User Management</Card.Title>
                <Button variant="primary" href='/alluser'>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards1;