import Speaker from "./Speaker"
import ReactPlaceholder from "react-placeholder/lib";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from '../../SpeakerData';


const SpeakersList = ({ showSessions }) => {

  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord
  } = useRequestDelay( 2000, data );
  

  if ( requestStatus === REQUEST_STATUS.FAILURE ) {
    return (
      <div className="text-danger">
        ERROR: <b> loading speaker data failed { error } </b>
      </div>
    )
  }

  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        rows={ 15 }
        className="speakerslist-placeholder"
        ready={ requestStatus === REQUEST_STATUS.SUCCESS }
      >
        <div className="row">
          {
            speakersData.map( speaker => (
              <Speaker 
                key={ speaker.id }
                speaker={ speaker }
                showSessions={ showSessions }
                onFavoriteToggle={ ( doneCallback ) => {
                  updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite
                  }, doneCallback)
                }}
              />
            ))
          }
        </div>
      </ReactPlaceholder>
    </div>
  )
}

export default SpeakersList;