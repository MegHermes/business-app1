import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const Timeline = createContext();

function TimelineProvider({ children, value }) {
  return <Timeline.Provider value={value}>{children}</Timeline.Provider>;
}

TimelineProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any,
};

function useTimeline() {
  return useContext(Timeline);
}

export { TimelineProvider, useTimeline };
