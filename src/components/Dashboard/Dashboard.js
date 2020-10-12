import React, { Component } from 'react'
import DashboardStyle from './Dashboard.module.css'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            userJob: '',
            userPhoto: '',
            userJobsList: []
        }
    }
    render(){
        return(
            <div className={DashboardStyle.cont__dashboard}>
                
            </div>
        )
    }
}

export default Dashboard;