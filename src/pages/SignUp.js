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
} from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";

const SignUp = () => {

  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER",
    status: "ACTIVE",
  })

  const [error, setError] = useState({
    error: {},
    isError: false
  });

  // useEffect(() => {
  //   console.log(formData)
  // }, [formData]);

  const handleChange=(event, field)=>{
    // console.log("name changed")
    // console.log(event.target.value)
    setFormData({...formData,
    [field]: event.target.value
    })
    // console.log(formData) 
  }

  const resetData=()=>{
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "CUSTOMER",
      status: "ACTIVE",
    })
  }

  const submitForm=(event)=>{
    event.preventDefault();
    // data validate
    // call server api to sending the data
    console.log(formData);
  }

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          {JSON.stringify(formData)}
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
                  <Label for="name">Name</Label>
                  <Input type="text" 
                  id="name" 
                  placeholder="Enter your name" 
                  onChange={(e)=> handleChange(e, 'name')}
                  value={formData.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e)=> handleChange(e, 'email')}
                    value={formData.email}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e)=> handleChange(e, 'password')}
                    value={formData.password}
                  />
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
                <FormGroup>
                  <Label for="status">Status</Label>
                  <Input id="status" name="select" type="select"
                  onChange={(e)=> handleChange(e, 'status')}
                  value={formData.status}
                  >
                    <option>ACTIVE</option>
                    <option>SUSPENDED</option>
                    <option>DEACTIVATED</option>
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
