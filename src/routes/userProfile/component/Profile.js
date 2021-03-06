/**
 * Profile Page
 */
import React, { Component } from "react";
import {
  FormGroup,
  Input,
  Form,
  Label,
  Col,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import IconButton from "material-ui/IconButton";
import Button from "material-ui/Button";
import { NotificationManager } from "react-notifications";

export default class Profile extends Component {
  /**
   * On Update Profile
   */
  onUpdateProfile() {
    NotificationManager.success("Profile Updated Successfully!");
  }

  render() {
    return (
      <div className="profile-wrapper w-50">
        <h2 className="heading">Personal details</h2>
        <Form>
          <FormGroup row>
            <Label for="firstName" sm={3}>
              firstName
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                className="input-lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="lastName" sm={3}>
              lastName
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                className="input-lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="occupation" sm={3}>
              occupation
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="occupation"
                id="occupation"
                className="input-lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="company" sm={3}>
              companyName
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="company"
                id="company"
                className="input-lg mb-20"
              />
              <div className="help-text d-flex p-10">
                <i className="ti-info-alt mr-15 pt-5" />
                <span>
                  If you want your invoices addressed to a company. Leave blank
                  to use your full name.
                </span>
              </div>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="telephone" sm={3}>
              phoneNo
            </Label>
            <Col sm={9}>
              <Input
                type="tel"
                name="telephone"
                id="telephone"
                className="input-lg"
              />
            </Col>
          </FormGroup>
        </Form>
        <hr />
        <h2 className="heading">address</h2>
        <Form>
          <FormGroup row>
            <Label for="address" sm={3}>
              address
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="address"
                id="address"
                className="input-lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="city" sm={3}>
              city
            </Label>
            <Col sm={9}>
              <Input type="text" name="city" id="city" className="input-lg" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="state" sm={3}>
              state
            </Label>
            <Col sm={9}>
              <Input type="text" name="state" id="state" className="input-lg" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="zip" sm={3}>
              zipCode
            </Label>
            <Col sm={9}>
              <Input type="text" name="zip" id="zip" className="input-lg" />
            </Col>
          </FormGroup>
        </Form>
        <hr />
        <h2 className="heading">social Connection</h2>
        <div>
          <InputGroup className="mb-20">
            <InputGroupAddon addonType="prepend">
              <IconButton aria-label="facebook">
                <i className="zmdi zmdi-facebook" />
              </IconButton>
            </InputGroupAddon>
            <Input defaultValue="https://www.facebook.com" />
          </InputGroup>
          <InputGroup className="mb-20">
            <InputGroupAddon addonType="prepend">
              <IconButton aria-label="facebook">
                <i className="zmdi zmdi-twitter" />
              </IconButton>
            </InputGroupAddon>
            <Input defaultValue="https://www.twitter.com" />
          </InputGroup>
          <InputGroup className="mb-20">
            <InputGroupAddon addonType="prepend">
              <IconButton aria-label="facebook">
                <i className="zmdi zmdi-linkedin" />
              </IconButton>
            </InputGroupAddon>
            <Input defaultValue="https://www.linkedin.com" />
          </InputGroup>
        </div>
        <hr />
        <Button
          variant="raised"
          color="primary"
          className="text-white primaryButton"
          onClick={() => this.onUpdateProfile()}
        >
          updateProfile
        </Button>
      </div>
    );
  }
}
