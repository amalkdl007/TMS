import './Enrollment.css';
import '.././../App.css'

function Home(props) {


    return (

        <>
       <div className="wrapper">
			<div className="inner">
			
					<h3>HOME</h3>
					<p>Please click below button to enroll as a trainer</p>
                    <div><a className="alink" href="/enroll">Enroll</a></div>
          
			
			</div>
		</div>
        </>
    );
}

export default Home;