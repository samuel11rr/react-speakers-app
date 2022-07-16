import { SpeakerFilterProvider } from '../contexts/SpeakerFilterContext';
import SpeakersList from './SpeakersList';
import SpeakersToolbar from './SpeakersToolbar';


export const Speakers = () => {
  return (
    <SpeakerFilterProvider startingShowSessions={ false } >
      <SpeakersToolbar />
      <SpeakersList />
    </SpeakerFilterProvider>
  )
}
