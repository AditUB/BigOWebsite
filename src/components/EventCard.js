import { Button } from "react-bootstrap";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { UpdateEvent } from "./UpdateEvent";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export const EventCard = ({
  eventName,
  startDate,
  endDate,
  eventLink,
  img,
  isLogged,
  id,
}) => {
  const [showUpdateEvent, setShowUpdateEvent] = useState(false);

  const handleUpdateEvent = () => {
    setShowUpdateEvent(true);
  };
  const handleCloseUpdateEvent = () => {
    setShowUpdateEvent(false);
  };

  const handleDeleteEvent = () => {
    deleteDoc(doc(db, "events", id))
      .then(() => {
        toast.success("Document successfully deleted!");
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        toast.error("Error removing document");
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div>
      <div className="item">
        <div className="events-imgbx">
          <img src={img} />
          <div className="events-txtx">
            <h4>{eventName}</h4>
            <span>
              <b>Starts: </b>
              {startDate}
            </span>
            <br />
            <span>
              {" "}
              <b> Ends: </b>
              {endDate}
            </span>
            {eventLink && (
              <div>
                <a href={eventLink}>
                  <BoxArrowUpRight size={50} />
                </a>
              </div>
            )}
            {isLogged && (
              <div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleUpdateEvent()}
                >
                  Update
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={handleDeleteEvent}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
        {showUpdateEvent && (
          <UpdateEvent
            event={{ eventName, startDate, endDate, eventLink, img, id }}
            showModalUpdateEvent={showUpdateEvent}
            handleCloseUpdateEvent={handleCloseUpdateEvent}
          />
        )}
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};
