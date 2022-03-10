import {Button, Checkbox, Form, Input} from 'antd';
import React, {ChangeEvent, FC} from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import {IAuthInfoState} from "../../models/IUser";
import './LoginPage.scss'


const LoginPage: FC = () => {

    const [authInfo, setAuthInfo] = React.useState<IAuthInfoState>({username:"", password:""})

    const {errorValue, isLoading} = useTypeSelector(item => item.user)
    const {login} = useAction()

    function onSubmitLogin() {
        login(authInfo.username, authInfo.password)
    }

    return (
        <Form
            onFinish={onSubmitLogin}
            className={"login-form"}
        >
            <div style={{marginBottom:"10px"}}>Войдите или зарегистрируйтесь</div>
            {
                errorValue && <div style={{color:"red"}}>
                                    {errorValue}
                              </div>
            }
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input  value={authInfo.username}
                        onChange={ (e: ChangeEvent<HTMLInputElement>) => setAuthInfo({...authInfo, username: e.target.value}) }
                        />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password value={authInfo.password}
                                onChange={( e: ChangeEvent<HTMLInputElement>) => setAuthInfo({...authInfo, password: e.target.value}) }
                        />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginPage;