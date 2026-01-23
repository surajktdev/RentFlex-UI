import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";

const Login = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Card
            className="mx-auto"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <CardHeader className="text-center">
              <h3>Login Here !!</h3>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </FormGroup>
                <Container className="text-center">
                  <Button color="dark">LogIn</Button>
                  <Button color="secondary" className="ms-2">
                    Reset
                  </Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;
