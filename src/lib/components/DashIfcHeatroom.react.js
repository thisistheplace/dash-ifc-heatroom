import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { applyFullScreen } from '../ui/fullscreen'
import { ifcLoader } from '../loader/ifcLoader'
import { createViewer } from '../viewer/ifcViewer'

const DashIfcHeatroom = (props) => {
  const {
    id,
    ifcData
  } = props

  const [viewer, setViewer] = useState(null)
  const [idState] = useState(id)
  const didMount = useRef(false)

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }
    console.log(viewer)
    if (viewer != null) {
      viewer.dispose()
    }
    if (ifcData != null) {
      setViewer(
        (props) => {
          const viewer = createViewer(idState)
          ifcLoader(ifcData, viewer)
          return viewer
        }
      )
    }
  }, [ifcData])

  return (
    <div id={props.id} className={'fullsize'}/>
  )
}

DashIfcHeatroom.defaultProps = {
  id: 'test',
  ifcData: null
}

DashIfcHeatroom.propTypes = {
  /**
   * The ID used to identify the container for the IFC viewer component.
   */
  id: PropTypes.string.isRequired,

  /**
   * The contents of the ifc file
   */
  ifcData: PropTypes.string
}

export default applyFullScreen(DashIfcHeatroom)
