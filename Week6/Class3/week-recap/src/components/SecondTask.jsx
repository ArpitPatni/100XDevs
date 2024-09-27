import { memo, useCallback, useEffect, useMemo, useState } from "react";

function SecondTask() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  const calculateCryptoReturns = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data,exchange2Data]);

  return (
    <div>
      <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
    </div>
  );
}
const CryptoGainsCalculator = memo(({ calculateCryptoReturns }) => {
  console.log("child render");
  return <div>Your crypto return is {calculateCryptoReturns()}</div>;
});

export default SecondTask;
