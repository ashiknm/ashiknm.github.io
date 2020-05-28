  
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
} from "semantic-ui-react";
export const Tasklists = () => {
  return (
    <div>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={true}
        width="thin"
      >
        <Menu.Item as="a">
          <h2>2DOApp</h2>
        </Menu.Item>

        <Menu.Item as="a">
          <h2>TaskLists</h2>
        </Menu.Item>

        <Menu.Item as="a">Home</Menu.Item>
        <Menu.Item as="a">Offcie</Menu.Item>
        <Menu.Item as="a">Work</Menu.Item>
        <Menu.Item as="a">Gym</Menu.Item>
        <br />

        <Modal trigger={<Button color="green">Add TaskList</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Add Task List</Header>
              <Input fluid placeholder="Ex work , home , gym ......" />
              <br />
              <Button color="green">Add</Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Sidebar>
    </div>
  );
};