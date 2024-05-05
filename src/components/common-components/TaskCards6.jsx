import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FM from '../../assets/common-images/FM.jpg';

function TasksCards6() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={FM} />
            <Card.Body>
                {/* <Card.Title></Card.Title> */}
                <Button variant="primary">Customer care Management</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards6;