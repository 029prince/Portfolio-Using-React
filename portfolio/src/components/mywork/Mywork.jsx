import React, { useState } from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? mywork_data : mywork_data.slice(0, 3);

  const toggleShow = () => {
    setShowAll(!showAll);
  }

  return (
    <div id='portfolio' className='mywork'>
      <div className="mywork-title">
        <h1>MyWork</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {visibleProjects.map((work, index) => (
          <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
            <img src={work.w_img} alt={work.w_name} />
          </a>
        ))}
      </div>

      <div className="mywork-showmore" onClick={toggleShow}>
        <p>{showAll ? "Show Less" : "Show More"}</p>
        <img src={arrow_icon} alt="Toggle Projects" style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0)' }} />
      </div>
    </div>
  )
}

export default Mywork
