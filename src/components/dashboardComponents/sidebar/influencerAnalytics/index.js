import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ChartComponent from "../../../chartComponents";
import { MDBDataTable } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { getInfluencerData } from "../../../../redux/actions/storage.actions";
import { useHistory } from "react-router-dom";
/**
 * @author
 * @function InfluencerAnalytics
 **/

const InfluencerAnalytics = (props) => {
  const data = {
    columns: [
      {
        label: "Userame",
        field: "uName",
        sort: "asc",
        width: 150,
      },
      {
        label: "Instagram ID",
        field: "instagramId",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 200,
      },
    ],

    rows: [],
  };
  const [weekToShow, setWeekToShow] = useState();
  const history = useHistory();
  const influencerDetails = useSelector(
    (state) => state.storage.allInfluencers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfluencerData());
    const dates = [];
    influencerDetails?.forEach((data) => {
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
  influencerDetails?.forEach((element) => {
    data.rows.push({
      clickEvent: () => {
        console.log({ element });
        history.push("/influencerprofile/" + element.username);
      },
      uName: element.username,
      instagramId: element.instagram_link,
      email: element.email,
    });
  });
  return (
    <Container className="analytics-container-style p-2">
      <ChartComponent
        title="Total influencers gained"
        xAxisTitle="No of People"
        graphData={weekToShow}
      />
      <Container className="table-container">
        <MDBDataTable
          striped
          bordered
          small
          hover
          data={data}
          clickEvent={(id) => {
            console.log("row id = ", id);
          }}
        />
      </Container>
    </Container>
  );
};

export default InfluencerAnalytics;
