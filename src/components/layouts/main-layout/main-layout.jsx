import { Layout, Row } from 'antd';
import { Header } from './header';
import { SidebarLayout } from './sidebar';
import { FooterLayout } from './footer';

const { Content } = Layout;

export const MainLayout = ({ children }) => {
  return (
    <Row>
      <Layout>
        <Header />
        <Layout>
          <SidebarLayout />
          <Content style={{ backgroundColor: '#fff' }}>
            {children}
          </Content>
        </Layout>
        <Layout>
          <FooterLayout />
        </Layout>
      </Layout>
    </Row>
  )
}