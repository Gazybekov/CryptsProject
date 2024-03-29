import React, { useCallback, useState } from "react";
import "./LayoutHeader.scss";
import { Coin } from "../../types/types";
import { useCryptSelector } from "../../helpers/useSelector";
const LayoutHeader: React.FC = () => {
  const crypts: Coin[] = useCryptSelector();
  const [open, setOpen] = useState<boolean>(false);
  const [coin, setCoin] = useState<Coin | null>(null);
  const [drawer, setDrawer] = useState<boolean>(false);
  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => {
      const value = (event.target as HTMLSelectElement).value;
      setCoin(crypts.find((c) => c.id === value) || null);
      setOpen(!open);
    },
    [crypts, open]
  );
  return (
    <div>
      <div className="header">
        <div className="select-container">
          <div className="custom-select">
            <select
              className="ant-select"
              id="cryptSelect"
              onChange={handleSelect}
              value={coin ? coin.id : ""}
            >
              <option disabled hidden>
                Выбери крипту
              </option>
              {crypts.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  <div className="select-icon">
                    <img src={coin.icon} alt={coin.name} />
                    {coin.name}
                  </div>
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="ant-btn" id="addCryptButton" type="button">
          Добавить крипту
        </button>
      </div>
      <div className="modal" id="cryptInfoModal"></div>
      <div className="drawer" id="addCryptDrawer"></div>
    </div>
  );
};

export default LayoutHeader;
