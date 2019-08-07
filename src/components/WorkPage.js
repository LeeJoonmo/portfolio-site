import React, { Component } from 'react';
import CardContainer from './CardContainer';
import './Header.css';
import Footer from './Footer';



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

        const characterWorks = worksData.filter((work) =>
        work.category === 'character'
        );
        // const etcWorks = worksData.filter((work) =>
        // work.category === 'etc'
        // );
        return(
            
            <div>
                <div className = "container">
                <div style = {{height: 35}}></div>
                <div className = "work-category" style = {{marginTop:35}}>UI/UX</div>
                <CardContainer worksData = {uiWorks}/>
                <div className = "work-category">BRANDING</div>
                <CardContainer worksData = {brandingWorks}/>
                <div className = "work-category">CHARACTER</div>
                <CardContainer worksData = {characterWorks}/>

                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default WorkPage;



