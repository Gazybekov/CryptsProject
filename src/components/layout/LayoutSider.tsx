import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Card,
  Layout,
  List,
  Modal,
  Spin,
  Statistic,
  Tag,
  Typography,
} from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { processCryptsData, deleteCrypt } from "../../store/slice/crypts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/slice";
import "./LayoutSider.scss";
import { useNavigate } from "react-router-dom";
import { Case, CaseSide } from "../../types/types";
import { getCrypts } from "../../store/actions/cryptActions";
import { useNewCaseSelector } from "../../helpers/useSelector";
import EditCrypt from "../EditCrypt";
const siderStyle: React.CSSProperties = {
  padding: "1rem",
};

const LayoutSider: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const newCase: CaseSide[] | Case = useNewCaseSelector();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchData = useCallback(
    async (dispatch: AppDispatch) => {
      try {
        setLoading(true);
        await dispatch(getCrypts());
        dispatch(processCryptsData());
      } catch (error) {
        console.error("Ошибка запроса:", error);
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );
  const handleDelete = useCallback(
    (id: string) => {
      dispatch(deleteCrypt(id));
      dispatch(processCryptsData());
    },
    [dispatch]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    fetchData(dispatch);
  }, [fetchData, dispatch]);
  if (loading) {
    return <Spin fullscreen />;
  }
  return (
    <Layout.Sider className="layoutSider" width="25%">
      <div style={{ height: "100%" }} className="scrollBox">
        {newCase.map((elem) => (
          <Card key={elem.id} style={{ marginBottom: "1rem" }}>
            <Statistic
              title={elem.id}
              value={elem.totalAmount}
              precision={2}
              valueStyle={{
                color: elem.informationPrice ? "#3f8600" : "#cf1322",
              }}
              prefix={
                elem.informationPrice ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
              suffix="$"
            />
            <List
              size="small"
              dataSource={[
                { title: "Заработали", value: elem.totalProfit, withTag: true },
                { title: "Кол-во крипты", value: elem.amount, isPlain: true },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <span>{item.title}</span>
                  <span>
                    {item.withTag && (
                      <Tag color={elem.informationPrice ? "green" : "red"}>
                        {elem.informationPercent}%
                      </Tag>
                    )}
                    {item.isPlain && item.value}
                    {!item.isPlain && (
                      <Typography.Text
                        type={elem.informationPrice ? "success" : "danger"}
                      >
                        {item.value.toFixed(2)}$
                      </Typography.Text>
                    )}
                  </span>
                </List.Item>
              )}
            />
            <Button onClick={() => handleDelete(elem.id)}>Delete</Button>
            <EditCrypt elem={elem} />
          </Card>
        ))}
      </div>
    </Layout.Sider>
  );
};

export default LayoutSider;
