import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ChartComponent from "../../../chartComponents";
import { MDBDataTable } from "mdbreact";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getInfluencerData } from "../../../../redux/actions/storage.actions";
/**
 * @author
 * @function SubscriberAnalytics
 **/
const data = {
  columns: [
    {
      label: "First Name",
      field: "fName",
      sort: "asc",
      width: 150,
    },
    {
      label: "Last Name",
      field: "lName",
      sort: "asc",
      width: 150,
    },
    {
      label: "Phone",
      field: "phone",
      sort: "asc",
      width: 270,
    },
    {
      label: "Email",
      field: "email",
      sort: "asc",
      width: 200,
    },
    {
      label: "Subscribed On",
      field: "subscribedOn",
      sort: "asc",
      width: 100,
    },
  ],

  rows: [],
};
const SubscriberAnalytics = (props) => {
  const token = useSelector((state) => state.auth.adminToken);
  const [influencer, setInfluencer] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    // for (var i = 0; i < 1; i++) {
    //   data.rows.push({
    //     fName: "Max",
    //     lName: "ver",
    //     phone: "0900-78601",
    //     email: "maxver@gmail.com",
    //     subscribedOn: "2021-03-01 08:34 AM",
    //   });
    // }
  }, []);
  return (
    <Container className="analytics-container-style p-2">
      <ChartComponent
        title="Total subscribers gained"
        graphData={[31, 44, 55, 11, 22, 65, 90, 231, 200]}
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

export default SubscriberAnalytics;
