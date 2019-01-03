import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeesFormReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});
