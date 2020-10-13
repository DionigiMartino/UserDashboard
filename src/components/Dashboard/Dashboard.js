import React, { Component } from 'react'
import DashboardStyle from './Dashboard.module.css'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: 'Dionigi Martino de Carles',
            userJob: 'Programmatore',
            userPhoto: '',
            userJobsList: [],
            lastProject: 'Ovopiù',
            nextProjects: 'Rosmino Srl'
        }
    }
    
    render(){
        return(
            <div className={DashboardStyle.cont__dashboard}>
                <div className={DashboardStyle.cont__dashboard_anagraphics}>
                    <img src={this.state.userPhoto} className={DashboardStyle.cont__dashboard_anagraphics_picImage} />
                    
                    <ul className={DashboardStyle.cont__dashboard_anagraphics_data}>
                        <li className={DashboardStyle.cont__dashboard_anagraphics_data_el}>{this.state.userName} - {this.state.userJob}</li> 
                        <li className={DashboardStyle.cont__dashboard_anagraphics_data_el}>Ultimo Lavoro: {this.state.lastProject}</li>
                        <li className={DashboardStyle.cont__dashboard_anagraphics_data_el}>Prossimo Lavoro: {this.state.nextProjects}</li>
                    </ul>
                </div>

                <div className={DashboardStyle.cont__dashboard_jobList}>

                </div>
            </div>
        )
    }
}

export default Dashboard;