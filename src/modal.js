import React from "react";
import { Modal, Button } from "react-bootstrap";
import Addstation1 from "./registrationformadd.js";
import { ModalHeader } from 'react-bootstrap';
class Addmodel extends React.PureComponent {
  constructor(props) {
    super(props);  
  this.state = {
    isOpen: false
  };
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  AddStation(e) {
   this.props.AddStation(e);
   this.closeModal(e);
  }
    render() {
    return (
      <>
        <div>
        <h2 style={{ textAlign: "center" }}>ADD STATION</h2>
       
          <Button color="primary" style={{ float: 'right' }} onClick={this.openModal} >
            Add Station
          </Button>
          <Modal size="lg" show={this.state.isOpen} onHide={this.closeModal}>
          <ModalHeader>
            <div style={{justifyContent:"center",width:"600px",marginLeft:"300px"}}> <b>ADD  STATION</b></div>

          <button className="btn btn-danger" style={{marginBottom:"5px" }} onClick={this.closeModal}>X</button>
          
          </ModalHeader>

            <Addstation1
              AddStation={(e)=>  this.AddStation(e)}
            />   
          </Modal>   
        </div>
      </>
    );
  }
}
export default Addmodel;


