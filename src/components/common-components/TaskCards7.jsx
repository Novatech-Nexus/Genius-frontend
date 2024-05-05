import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OM from '../../assets/common-images/OM.jpg';

function TasksCards7() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={OM} />
            <Card.Body>
                {/* <Card.Title>x</Card.Title> */}
                <Button variant="primary" href='/orderManager'>Customer care Management</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards7;