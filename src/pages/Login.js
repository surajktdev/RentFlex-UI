import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../services/user-service";
import { doLogin } from "../auth/index";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setCredentials({
      ...credentials,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);
    // validation
    if (credentials.email.trim() === "") {
      toast.error("Email is required !!");
      return;
    }

    if (credentials.password.trim() === "") {
      toast.error("Password is required !!");
      return;
    }

    // submit the data to server
    login(credentials)
      .then((data) => {
        console.log(data);

        // save the data to local storage
        doLogin(data, () => {
          console.log("Login detail saved to local storage");
          // redirect to user dashboard page
          window.location.href = "/user/dashboard";
        });
        toast.success("Login Successful !!");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400 || error.response.status === 404) {
          toast.error(error.response.data);
        } else {
          toast.error("Invalid Details !! Try again");
        }
      });
  };

  const handleReset = () => {
    setCredentials({
      email: "",
      password: "",
    });
  };

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
              <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={credentials.email}
                    onChange={(e) => handleChange(e, "email")}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={(e) => handleChange(e, "password")}
                  />
                </FormGroup>
                <Container className="text-center">
                  <Button color="dark">LogIn</Button>
                  <Button
                    onClick={handleReset}
                    color="secondary"
                    className="ms-2"
                  >
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
