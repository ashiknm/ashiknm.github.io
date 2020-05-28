import React from "react";
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Modal,
  Button,
  Input,
  Checkbox,
} from "semantic-ui-react";
export const Tasks = () => {
  return (
    <div style={{ marginLeft: "250px" }}>
      <br />
      <h1>Task Under Work</h1>
      <br /> <br />
      <Checkbox label="Need to work on Api" checked />
      <br />
      <br />
      <Modal trigger={<Button color="green">Add Tasks</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>Add Tasks</Header>
            <Input fluid placeholder="Ex need to work on project ...." />
            <br />
            <Button color="green">Add</Button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};