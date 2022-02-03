import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Applications({ currentUser }) {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showAddApp, setShowAddApp] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div id="applications">
      <br />
      <Button variant="primary" onClick={() => setShowAddApp(true)}>
        Create Adoption Application
      </Button>

      <MyVerticallyCenteredModal
        show={showAddApp}
        onHide={() => setShowAddApp(false)}
      />
      {/* <ul>
        {usersApps.map((a)=> {
          <li>{a.pet.name}</li>
        })}
      </ul> */}
    </div>
  )
}