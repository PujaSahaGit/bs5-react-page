import "./App.css";
import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>
          <Image src="https://picsum.photos/900/400" fluid rounded className="" />
        </Col>
        <Col sm={5}>
          <h1 className="font-weight-light">Tagline</h1>
          <p className="mt-4">
            This is a template that is great for small businesses. It doesn't have too
            much fancy flare to it, but it makes great use of the standard Bootstrap
            core components. Feel free to use this template for any project you want!
          </p>
          <Button variant="outline-primary">Call to action</Button>
        </Col>
      </Row>
      <Row>
        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Body>
            This call to action card is a great place to showcase some important
            information or display a clever tagline!
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="http://picsum.photos/id/220/320/200" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="http://picsum.photos/id/200/320/200" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="http://picsum.photos/id/201/320/200" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <footer className="py-5 my-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
    </Container>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        {/* Your logo import and styling here */}
        <main>
          <ResponsiveAutoExample />
        </main>
      </header>
      <BasicExample />
    </div>
  );
}

export default App;
