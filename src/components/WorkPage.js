import React, { Component } from 'react';
import CardContainer from './CardContainer';
import './Header.css';



class WorkPage extends Component {
    state = {
        worksData : this.props.worksData
    }
    componentDidMount(){
        window.scrollTo(0,0);
      }

    render(){
        const {worksData} = this.state;
        const uiWorks = worksData.filter((work) =>
            work.category === 'ui'
        );
        
        const brandingWorks = worksData.filter((work) =>
        work.category === 'branding'
        );

        // const etcWorks = worksData.filter((work) =>
        // work.category === 'etc'
        // );
console.log(uiWorks);
        return(
            
            <div>
                <div className = "container">
                <div style = {{height: 35}}></div>
                <div className = "work-category" style = {{marginTop:35}}>UI/UX</div>
                <CardContainer worksData = {uiWorks}/>
                <div className = "work-category">BRANDING, CHARACTER</div>
                <CardContainer worksData = {brandingWorks}/>
                <div className = "work-category">ETC, EXPERIENCE</div>

                </div>
            </div>
        );
    }
}

export default WorkPage;



