import React from 'react';
import { Layout, Image } from 'antd';

import SideMenu from './components/SideMenu';
import AppRoutes from './routes';

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Sider style={styles.sider}>
        <Image src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg" preview={false} />
        <SideMenu />
      </Sider>
      <Layout>
        <Content style={styles.content}>
          <AppRoutes />
        </Content>
        <Footer style={styles.footer}>
          Uber Eats dashboard
        </Footer>
      </Layout>
    </Layout>
  );
}

const styles = {
  sider: {
    height: '100vh',
    backgroundColor: 'white',
  },
  content: {
  },
  footer: {
    textAlign: 'center',
  },
};

export default App;
