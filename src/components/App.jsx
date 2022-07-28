import React, {Component} from 'react';
import EduSection from './EduSection';
import JobSection from'./JobSection';
import InfoSection from './InfoSection';

class DisplayInfo extends Component {
  state = { 

   } 

  render() { 
    return (
      <div>
        <InfoSection />
        <JobSection />
        <EduSection />
      </div>
    );
  }
}
 
export default DisplayInfo;
