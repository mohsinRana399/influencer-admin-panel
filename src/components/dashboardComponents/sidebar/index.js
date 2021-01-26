import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import DashboardAnalytics from "./dashboardAnalytics";
import InfluencerAnalytics from "./influencerAnalytics";
import "./styles.css";
import SubscriberAnalytics from "./subscriberAnalytics";
/**
 * @author
 * @function SideBar
 **/

const SideBar = (props) => {
  return (
    <div className="sidebar-style m-3 p-3">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Dashboard</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="second">Subscribers</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="third">Influencers</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <DashboardAnalytics />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <SubscriberAnalytics />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <InfluencerAnalytics />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default SideBar;
