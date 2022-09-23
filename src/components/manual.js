import {Card, Nav } from 'react-bootstrap';

function Manual(){
    return(
        <div style={{backgroundColor:'lightgray', width:'100vw', height:'100vh', position:'relative', top:'100px'}}>
            {/* <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first" >
                        <Nav.Item>
                            <Nav.Link href="/manual">이용방법</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#review">후기</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#FAQ">
                                FAQ
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card> */}

<Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">이용방법</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">FAQ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled">
              이용후기
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
            
        </div>
    )
}

export default Manual