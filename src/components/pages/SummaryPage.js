import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import useTransactions from "./useTransactions";
import SummaryBox from "../SummaryBox";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import IntervalButtonGroup from "../IntervalButtonGroup";
import WideButton from "../WideButton";
import BackIcon from "../../icons/arrow_back.svg";
import TransactionList from "../transaction/TransactionList";
import { globalLightBlue, globalBorder } from "../../constants";

const SummaryList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;
  padding-bottom: 1rem;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: ${globalBorder};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const StyledFooter = styled(Footer)`
  justify-content: space-between;
`;

const SummaryPage = ({ history }) => {
  const [interval, setInterval] = useState("month");
  const [transactions] = useTransactions();
  const [date, setDate] = useState(new Date());

  const content = useRef();

  useEffect(() => {
    content.current.scrollTo(0, 0);
  }, [interval]);

  const getDate = () =>
    `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

  const getMonth = () => `${date.getMonth() + 1}.${date.getFullYear()}`;

  const getSum = (total, item) => total + item;

  const getValues = transactions => {
    const values = [0];
    transactions.forEach(transaction => {
      values.push(
        transaction.type === "in" ? transaction.value : -transaction.value
      );
    });
    return values;
  };

  const getFilteredTransactions = () => {
    switch (interval) {
      case "day":
        return transactions.filter(({ created }) => created === getDate());
      case "month":
        return transactions.filter(
          ({ created }) =>
            created.substr(
              created.length - getMonth().length,
              getMonth().length
            ) === getMonth()
        );
      case "all":
      default:
        return transactions;
    }
  };

  const getSummary = type => {
    if (type !== "all") {
      const filteredArray = getFilteredTransactions().filter(
        transaction => transaction.type === type
      );
      return getValues(filteredArray).reduce(getSum);
    } else {
      return getValues(getFilteredTransactions()).reduce(getSum);
    }
  };

  return (
    <>
      <Header>
        <IntervalButtonGroup
          selected={interval}
          setInterval={setInterval}
          intervalTypes={["day", "month", "all"]}
        />
      </Header>
      <Content ref={content}>
        <SummaryList>
          <SummaryBox level={"in"} summary={getSummary("in")} />
          <SummaryBox level={"out"} summary={getSummary("out")} />
          <SummaryBox level={"all"} summary={getSummary("all")} />
        </SummaryList>
        <TransactionList transactions={getFilteredTransactions()} />
      </Content>
      <StyledFooter>
        <WideButton
          onClick={() => history.push("/")}
          label={"Back"}
          bgColor={globalLightBlue}
          icon={BackIcon}
        />
        {interval === "day" && (
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            dateFormat="d. MMMM, yyyy"
            maxDate={new Date()}
            className="date-picker-summary"
            withPortal
          />
        )}
        {interval === "month" && (
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            dateFormat="MMMM, yyyy"
            maxDate={new Date()}
            className="date-picker-summary"
            showMonthYearPicker
            withPortal
          />
        )}
      </StyledFooter>
    </>
  );
};

export default SummaryPage;
