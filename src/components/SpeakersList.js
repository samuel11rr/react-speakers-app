import Speaker from "./Speaker"
import ReactPlaceholder from "react-placeholder/lib";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from '../../SpeakerData';
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { useContext } from "react";


const SpeakersList = () => {

  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord
  } = useRequestDelay( 2000, data );

  const { searchQuery, eventYear } = useContext( SpeakerFilterContext );

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
            speakersData
              .filter( speaker => (
                speaker.first.toLowerCase().includes( searchQuery ) ||
                speaker.last.toLowerCase().includes( searchQuery )
              ))
              .filter( speaker => (
                speaker.sessions.find( session => session.eventYear === eventYear )
              ))
              .map( speaker => (
                <Speaker 
                  key={ speaker.id }
                  speaker={ speaker }
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