import { Button, Card, Nav } from "react-bootstrap";
import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <div>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link href="#/Labs">Labs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#/Labs/Lab1"
            active={pathname.includes("Lab1")}
            id="wd-a1"
          >
            Lab 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#/Labs/Lab2"
            active={pathname.includes("Lab2")}
            id="wd-a2"
          >
            Lab 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#/Labs/Lab3"
            active={pathname.includes("Lab3")}
            id="wd-a3"
          >
            Lab 3
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#/Labs/Lab4"
            active={pathname.includes("Lab4")}
            id="wd-a3"
          >
            Lab 4
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://github.com/noah0young/kambaz-react-web-app"
            id="wd-github"
          >
            My GitHub
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/DetectiveClock.png" />
          <Card.Body>
            <Card.Title>Detective Clock</Card.Title>
            <Card.Text>A Broken Clock is Right Twice a Day</Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
