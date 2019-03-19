import React, { Component } from 'react';
import CardContainer from './CardContainer';
import './Header.css';



class WorkPage extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
      }

    render(){

        const uiWorks = this.props.worksData.filter((work) =>
            work.category === 'ui'
        );
        
        const brandingWorks = this.props.worksData.filter((work) =>
        work.category === 'branding'
        );

        const etcWorks = this.props.worksData.filter((work) =>
        work.category === 'etc'
        );

        return(
            <div>
                <div className = "container">
                <div style = {{height: 35}}></div>
                <div className = "work-category" style = {{marginTop:35}}>UI/UX</div>
                <CardContainer worksData = {uiWorks}/>
                <div className = "work-category">BRANDING, CHARACTER</div>
                <CardContainer worksData = {brandingWorks}/>
                <div className = "work-category">ETC, EXPERIENCE</div>
                <CardContainer worksData = {etcWorks}/>
                </div>
            </div>
        );
    }
}

export default WorkPage;