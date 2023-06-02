import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { db, storage } from "../firebase";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const initialState = {
  eventName: "",
  eventLink: "",
  startDate: "",
  endDate: "",
};
export const AddEvent = ({ showModalAddEvent, handleCloseAddEvent }) => {
  const [data, setData] = useState(initialState);
  const { eventName, eventLink, startDate, endDate } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Paused");
              break;
            case "running":
              console.log("running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!eventName || !startDate || !endDate || !file) {
      errors.name = "req";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    await addDoc(collection(db, "events"), {
      ...data,
      timestamp: serverTimestamp(),
    });
    setIsSubmit(true);
    setData(initialState);
    setFile(null);
  };

  //resets fields
  const handleCloseModalAddEvent = () => {
    setData(initialState);
    // setFile(null);
    setIsSubmit(false);
    handleCloseAddEvent();
  };

  setTimeout(() => {
    setIsSubmit(false);
  }, 3000);

  return (
    <Modal
      scrollable
      show={showModalAddEvent}
      onHide={handleCloseModalAddEvent}
      centered
      className="opaque-modal"
    >
      <Modal.Header closeButton closeVariant="white" className="modal-header">
        <Modal.Title>Add Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="eventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              value={eventName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="eventLink">
            <Form.Label>Event Link</Form.Label>
            <Form.Control
              type="text"
              value={eventLink}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" value={endDate} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="poster">
            <Form.Label>Upload Poster</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>

          <div className="d-flex flex-column align-items-center  p-2">
            <Button
              variant="primary"
              type="submit"
              className="btn-purple glow-on-hover"
              disabled={progress !== null && progress < 100}
            >
              Submit
            </Button>
            <div className={isSubmit ? "success mt-2" : "submitNone"}>
              submitted
            </div>
            <div className={isSubmit ? "submitNone" : "danger mt-2"}>
              *enter all fields to submit
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
