import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import Switch from "react-switch";
import { Container } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import { useParams } from "react-router-dom";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSubscribers,
  verifyInfluencer,
} from "../../redux/actions/storage.actions";
/**
 * @author
 * @function InfluencerProfileComponent
 **/

const InfluencerProfileComponent = (props) => {
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
      {
        label: "Subscribed On",
        field: "subscribedOn",
        sort: "asc",
        width: 100,
      },
    ],

    rows: [],
  };
  const { influencerName } = useParams();
  const [influencerDetails, setInfluencerDetails] = useState();
  const [subscriberDetails, setSubscriberDetails] = useState();
  const [verified, setVerified] = useState(false);
  const allInfluencers = useSelector((state) => state.storage.allInfluencers);
  const allSubscribers = useSelector((state) => state.storage.allSubscribers);
  const token = useSelector((state) => state.auth.adminToken);
  const dispatch = useDispatch();
  useEffect(() => {
    allInfluencers?.forEach((element) => {
      if (element.username === influencerName) {
        dispatch(getAllSubscribers(token, element._id));
        setInfluencerDetails(element);
        setVerified(element.influencer_data.verified);
      }
    });
  }, []);
  useEffect(() => {
    setSubscriberDetails(allSubscribers);
  }, [allSubscribers]);
  useEffect(() => {
    influencerDetails?.influencer_data.close_friends.forEach((element) => {
      console.log({ element });
      data.rows.push({
        uName: element.username,
        instagramId: element.instagram_link,
        email: element.email,
      });
    });
  }, [influencerDetails]);

  subscriberDetails?.forEach((element) => {
    console.log({ element });
    data.rows.push({
      uName: element.subscriber_id.username,
      instagramId: element.subscriber_id.instagram_link,
      email: element.subscriber_id.email,
      subscribedOn: element.updatedAt,
    });
  });

  console.log({ influencerDetails });
  return (
    <div>
      <div className="d-flex flex-row">
        <Container
          fluid
          className="financial-details-style mt-5 p-2 d-flex flex-column"
        >
          <Avatar
            name={influencerName}
            size="80"
            round={true}
            src={influencerDetails?.influencer_data.image}
          />
          <div className="d-flex flex-row p-2 w-100 mt-2">
            <p className="account-balance-style mr-auto my-auto">
              Influencer Name:
            </p>
            <p className="account-balance-style my-auto">
              {influencerDetails?.username}
            </p>
          </div>
          <div className="d-flex flex-row p-2 w-100 mt-2">
            <p className="account-balance-style mr-auto my-auto">
              Profile Status:
            </p>
            <Switch
              onChange={() => {
                if (verified) {
                  alert("user is already verified");
                } else {
                  dispatch(
                    verifyInfluencer(token, influencerDetails._id, true)
                  );
                  setVerified(!verified);
                }
              }}
              checked={verified}
              onColor="#53b9ea"
            />
          </div>
          <div className="solid-line"></div>
          <div className="d-flex flex-row p-2 w-100">
            <p className="account-balance-style mr-auto my-auto">
              Total Subscriber count:
            </p>
            <p className="account-balance-style my-auto">
              {subscriberDetails?.length}
            </p>
          </div>
        </Container>

        {/* for future use */}
        {/* <Container className="financial-details-style mt-5 d-flex flex-column">
          <div className="d-flex flex-row p-2 w-100">
            <p className="account-balance-style mr-auto">Account Balance:</p>
            <p className="account-balance-style">
              $ {influencerDetails?.influencer_data.balance}
            </p>
          </div>
          <div className="d-flex flex-row p-2 w-100">
            <p className="account-balance-style mr-auto">Growth Rate:</p>
            <p className="account-balance-style">132%</p>
          </div>

          <div className="solid-line"></div>
          <div className="d-flex flex-row p-2 w-100">
            <p className="account-balance-style mr-auto">Total Earnings:</p>
            <p className="account-balance-style">$4200</p>
          </div>
        </Container> */}
      </div>
      <Container className="table-container mt-5">
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
    </div>
  );
};

export default InfluencerProfileComponent;
