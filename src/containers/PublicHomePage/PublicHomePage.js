import React from 'react'; 

import classes from './PublicHomePage.module.css'; 

const publicHomePage = () => {
	return <div className={ classes.PublicHomePageOuterContainer }>
		<div className={ [classes.Column, classes.LeftColumn].join(' ') }>
			<p className={ classes.Text }>Public home page</p>
		</div>

	</div>
}

export default publicHomePage;