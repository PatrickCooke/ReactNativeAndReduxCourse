import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from './common';
import {connect} from 'react-redux';
import {Picker} from 'react-native';
import {employeeUpdate} from "../actions";

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone Number"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection>
                    <Picker
                        style ={{ flex: 1 }}
                        selectedValue = {this.props.shift}
                        onValueChange = {value => this.props.employeeUpdate({prop: 'shift', value})}

                    >
                        <Picker.item label= "Monday" value = "Monday" />
                        <Picker.item label= "Tuesday" value = "Tuesday" />
                        <Picker.item label= "Wednesday" value = "Wednesday" />
                        <Picker.item label= "Thursday" value = "Thursday" />
                        <Picker.item label= "Friday" value = "Friday" />
                        <Picker.item label= "Saturday" value = "Saturday" />
                        <Picker.item label= "Sunday" value = "Sunday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button>Create</Button>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);
