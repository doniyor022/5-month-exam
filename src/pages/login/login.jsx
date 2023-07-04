import { Typography, Row, Form, Input, Button } from "antd";
import { useAuth } from '../../hooks/useAuth';
import {Link} from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const  {Title} = Typography;
const { Item } = Form


export const Login = () => {
  const [setToken] = useAuth(true)

  const handleLogin = async (evt) => {

    const res = await fetch(process.env.REACT_APP_API + '/api/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(evt),
    });

    if (res.ok) {
      const token = await res.json();

      return setToken(token)
    }
    
  };
  return(
    <>
    <div className="container">
      <div>

      <Link to=''>
          <img src={logo} alt="" />
      </Link>
      </div>
    </div>
      <Row
      justify="center" 
      align="middle"
      style={{flexDirection: 'column', height: '100vh'}}>
           <Title>Login</Title>

           <Form layout="vertical" onFinish={handleLogin}>
            <Item
            name="email"
            rules={[
              {
              type: 'email',
              message: 'The input is not  valid Email'
            },
            {
              required: true,
              message: 'Please input your Email',
            },
          ]}
        >
          <Input className="input"    placeholder="Login" block />
        </Item>

        <Item
            name="password"
            rules={[
            
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <Input.Password className="input"   placeholder="Password" block />
        </Item>
        <Button  style={{backgroundColor: 'black'}} type="primary" htmlType="submit" block>Submit</Button>
           </Form>
      </Row>
    </> 
  )
}