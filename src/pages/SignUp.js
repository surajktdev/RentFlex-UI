import {
  CardHeader,
  Container,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  FormFeedback,
} from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";

const SignUp = () => {

  

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "CUSTOMER",
  })

  const [error, setError] = useState({
    errors: {},
    isError: false
  });

  // this useEffect will run when formData changes
  // useEffect(() => {
  //   console.log(formData)
  // }, [formData]);

  const handleChange=(event, field)=>{
    // console.log("name changed")
    // this will log the value of the field which is being changed
    // console.log(event.target.value)
    setFormData({...formData,
    [field]: event.target.value
    })
    // this will log the form data on every change
    // console.log(formData) 
  }

  const resetData=()=>{
    setFormData({
      userName: "",
      email: "",
      password: "",
      role: "CUSTOMER",
    })
  }

  const submitForm=(event)=>{
    event.preventDefault();

    signUp(formData)
      .then((response) => {
        console.log("Success response:", response.data);
        toast.success("User registered successfully!");
        resetData();
      })
      .catch((err) => {
        console.log("Full error:", err);

        if (err.response) {
          console.log("Server error data:", err.response.data);
        }

        setError({
          errors: err,
          isError: true,
        });

        toast.error(
          err.response?.data?.message || "Registration failed! Please provide valid details."
        );
      });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          {/* {JSON.stringify(formData)} */}
          <Card
            className="mx-auto"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <CardHeader className="text-center">
              <h3>Fill Information to Register!!</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitForm}>
                <FormGroup>
                  <Label for="userName">Name</Label>
                  <Input type="text" 
                  id="userName" 
                  placeholder="Enter your name" 
                  onChange={(e)=> handleChange(e, 'userName')}
                  value={formData.userName}
                  invalid={!!error.errors?.response?.data?.userName}
                  />
                  <FormFeedback>
                    {error.errors?.response?.data?.userName}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e)=> handleChange(e, 'email')}
                    value={formData.email}
                    invalid={!!error.errors?.response?.data?.email}
                  />
                  <FormFeedback>
                    {error.errors?.response?.data?.email}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e)=> handleChange(e, 'password')}
                    value={formData.password}
                    invalid={!!error.errors?.response?.data?.password}
                  />
                  <FormFeedback>
                    {error.errors?.response?.data?.password}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="role">Role</Label>
                  <Input id="role" name="select" type="select"
                  onChange={(e)=> handleChange(e, 'role')}
                  value={formData.role}
                  >
                    <option>ADMIN</option>
                    <option>VENDOR</option>
                    <option>CUSTOMER</option>
                  </Input>
                </FormGroup>
                <Container className="text-center">
                  <Button outline color="dark">Sign Up</Button>
                  <Button onClick={resetData} color="secondary" className="ms-2">
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

export default SignUp;
