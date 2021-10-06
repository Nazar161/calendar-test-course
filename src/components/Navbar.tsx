import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router';

const Navbar: FC = () => {
    const {logout} = useActions();
    const router = useHistory();
    const {isAuth, user} = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth ?
                    <>
                        <div style={{color: 'white'}}>
                            {user.username}
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={logout} key={1}>Выйти</Menu.Item>
                        </Menu>
                    </>
                :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={()=>router.push(RouteNames.LOGIN)} key={1}>Логин</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;