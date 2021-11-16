const ActivitiesList = (props) => {

  return (
    <div>
      <div className="activitiesList" names="props.name" parks="props.parks">
        <div className="container">
          <div className="row">
              <a key={props.activities.id} href="/parks" style={{margin:'2px'}}role="button" className="btn btn-dark" aria-haspopup="true" aria-expanded="false">
                {props.activities.name}
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}



export default ActivitiesList;