import './app-info.css';

const AppInfo = ({employeesTotal, employeesBonus}) => {

    return (
        <div className="app-info">
            <h1>Accounting for employees in the company</h1>
            <h2>Total number of employees: {employeesTotal} </h2>
            <h2>The award will be given to: {employeesBonus} </h2>
        </div>
    )
}

export default AppInfo;