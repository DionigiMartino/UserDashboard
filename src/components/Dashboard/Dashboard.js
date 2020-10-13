import React, { Component } from 'react'
import DashboardStyle from './Dashboard.module.css'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: 'Dionigi Martino de Carles',
            userJob: 'Programmatore',
            userPhoto: '',
            userJobsList: [
                {id: 0, jobName: 'Sito Web Rosmino', expire: '27/10/2020'},
                {id: 1, jobName: 'LandingPage Boh', expire: '28/10/2020'}
            ],
            lastProject: 'Ovopiù',
            nextProjects: 'Rosmino Srl'
        }
    }

    componentDidMount(){
        document.title = 'Dashboard - ' + this.state.userName
    }

    render(){

        let jobsList = this.state.userJobsList.map(job => {
            return <li key={job.id}>{job.jobName} - Scadenza: {job.expire}</li>
        })

        return(
            <div className={DashboardStyle.cont__dashboard}>
                <div className={DashboardStyle.cont__dashboard_anagraphics}>
                    <img src={this.state.userPhoto} className={DashboardStyle.cont__dashboard_anagraphics_picImage} alt="ProPic" />
                    
                    <ul className={DashboardStyle.cont__dashboard_anagraphics_data}>
                        <li className={DashboardStyle.cont__dashboard_anagraphics_data_el}>{this.state.userName} - {this.state.userJob}</li> 
                        <li className={DashboardStyle.cont__dashboard_anagraphics_data_el}>Ultimo Lavoro: {this.state.lastProject}</li>
                        <li className={DashboardStyle.cont__dashboard_anagraphics_data_el}>Prossimo Lavoro: {this.state.nextProjects}</li>
                    </ul>
                </div>

                <div className={DashboardStyle.cont__dashboard_jobList}>
                    <h2>Job List</h2>
                    <ul className={DashboardStyle.cont__dashboard_jobList_list}>
                        {jobsList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dashboard;