import { useState } from "react";

const useSpeakerFilter = ( startingShowSessions, startingYear ) => {
  const [showSessions, setShowSessions] = useState(startingShowSessions);
  const [eventYear, setEventYear] = useState(startingYear);
  const [searchQuery, setSearchQuery] = useState('');

  const EVENT_YEARS = [
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ]

  return {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS,
  }
}

export default useSpeakerFilter;