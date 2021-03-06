import React, { useState } from 'react'
import { InputGroup, Button, FormControl, Spinner, Row, Col, Container, Form } from 'react-bootstrap'
import { connect, useStore } from 'react-redux'

import { addShift } from '../../actions/index'


const AddShiftWindow = props => {

    const handleOnChange = (event) => {
        if (event.target.name === 'start date') {
            props.inputHandler({ ...props.input, start: event.target.value })
        }
        else { //end
            props.inputHandler({ ...props.input, end: event.target.value })
        }
    }

    const handleAddShift = async() => {
        if (props.input.start === '' || props.input.end === '') {
            alert('Add start & end datetime')
        }
        else {
            await props.setIsLoading(true)
            await props.addShift(props.user, props.input.start, props.input.end)
            await props.displayDialogHandler(false)
            await props.setIsLoading(false)
        }
    }


    return (
        <>
            <Container style={{ width: '100%' }}>
                <Row style={RowStyle}>
                    <Col>Start Date {'&'} Hour:</Col>
                </Row>
                <Row style={RowStyle}>
                    <Col>
                        <InputGroup className="mb-3">
                            <Form.Control type='datetime-local' value={props.input.start} name="start date" onChange={handleOnChange} required />
                        </InputGroup>
                    </Col>
                </Row>

                <Row style={RowStyle}>
                    <Col>End Date {'&'} Hour:</Col>
                </Row>
                <Row style={RowStyle}>
                    <Col>
                        <InputGroup className="mb-3">
                            <Form.Control type='datetime-local' name="end date" onChange={handleOnChange} required />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="outline-secondary" id="button-addon2" onClick={handleAddShift} type="submit">
                            Add shift
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({
    user: state.User
})

const mapDispatchToProps = {
    addShift
}

const RowStyle = {
    marginBottom: 5
}

export default connect(mapStateToProps, mapDispatchToProps)(AddShiftWindow)