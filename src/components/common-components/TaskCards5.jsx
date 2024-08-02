import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CM from '../../assets/common-images/CM.jpg';

function TasksCards5() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CM} />
            <Card.Body>
                {/* <Card.Title></Card.Title> */}
                <Button variant="primary">Catering Management</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards5;