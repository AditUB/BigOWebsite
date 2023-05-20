import { Col } from "react-bootstrap";

export const EventCard = ({ title, description, imgUrl }) => {
  return (
    // <Col size={12} sm={6} md={4}>
    <div className="item">
      <div className="events-imgbx">
        <img src={imgUrl} />
        <div className="events-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
    // </Col>
  );
};