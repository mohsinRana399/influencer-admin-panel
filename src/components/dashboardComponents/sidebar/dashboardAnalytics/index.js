import React, { useEffect, useState } from "react";

import "./styles.css";
import { Container } from "react-bootstrap";
import ChartComponent from "../../../chartComponents";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriberData } from "../../../../redux/actions/storage.actions";
/**
 * @author
 * @function DashboardAnalytics
 **/

const DashboardAnalytics = (props) => {
  const [weekToShow, setWeekToShow] = useState();
  const dispatch = useDispatch();
  const subscriberDetails = useSelector((state) => state.storage.allSubsGained);
  useEffect(() => {
    dispatch(getSubscriberData());

    const dates = [];
    subscriberDetails?.forEach((data) => {
      dates.push(new Date(data.createdAt));
    });
    let week = [0, 0, 0, 0, 0, 0, 0];
    filterDatesByCurrentWeek(dates).forEach((e) => {
      let index = e.getDay() - 1;
      if (index === 0) {
        index = 6;
      }
      week[index] = week[index] + 1;
    });
    setWeekToShow(week);
  }, []);

  const getWeekDates = () => {
    let now = new Date();
    let dayOfWeek = now.getDay(); //0-6
    let numDay = now.getDate();

    let start = new Date(now); //copy
    start.setDate(numDay - dayOfWeek);
    start.setHours(0, 0, 0, 0);

    let end = new Date(now); //copy
    end.setDate(numDay + (7 - dayOfWeek));
    end.setHours(0, 0, 0, 0);

    return [start, end];
  };

  const filterDatesByCurrentWeek = (dates) => {
    let [start, end] = getWeekDates();
    return dates.filter((d) => +d >= +start && +d < +end);
  };
  return (
    <Container className="analytics-container-style p-2">
      <ChartComponent
        title="Total sales"
        xAxisTitle="Amount($)"
        graphData={weekToShow}
      />
    </Container>
  );
};

export default DashboardAnalytics;
