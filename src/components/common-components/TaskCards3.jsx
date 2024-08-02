import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MM from '../../assets/common-images/MM.jpg';

function TasksCards3() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={MM} />
            <Card.Body>
                <Card.Title>Menu management</Card.Title>
                <Button variant="primary" href='/homemenu'>Login</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards3;