import { FC } from "react";
import { Layout } from "antd";
import LayoutSider from "./components/layout/LayoutSider";
import LayoutContent from "./components/layout/LayoutContent";
import LayoutHeader from "./components/layout/LayoutHeader";
import { Provider } from "react-redux";
import store from "./store/slice";
import MainRoutes from "./routes/MainRoutes";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <LayoutHeader />
        <Layout>
          <LayoutSider />
          <Layout>
            <LayoutContent />
            <MainRoutes />
          </Layout>
        </Layout>
      </Layout>
    </Provider>
  );
};

export default App;
