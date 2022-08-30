import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { IfcViewerAPI } from 'web-ifc-viewer'
import { applyFullScreen } from '../ui/fullscreen'

const DashIfcHeatroom = (props) => {
  const {
    id,
    ifcData
  } = props

  const [viewer, setViewer] = useState(null)

  useEffect(() => {
    console.log(viewer)
    if (viewer != null) {
      viewer.dispose()
    }
    if (id != null) {
      setViewer(
        (props) => {
          console.log(props)
          const viewer = createViewer(props)
          if (ifcData != null) {
            ifcLoader(props, viewer)
          }
          return viewer
        }
      )
    }
  }, [ifcData])

  function createViewer (props) {
    const container = document.getElementById(id)
    const viewer = new IfcViewerAPI({
      container: container
    })
    viewer.axes.setAxes()
    viewer.IFC.setWasmPath('../../')
    viewer.IFC.loader.ifcManager.applyWebIfcConfig({
      USE_FAST_BOOLS: true,
      COORDINATE_TO_ORIGIN: true
    })

    // Don't show edges
    viewer.context.renderer.postProduction.active = false

    // Selectors
    window.onmousemove = () => viewer.IFC.selector.prePickIfcItem()
    window.onclick = () => viewer.IFC.selector.pickIfcItem(true)
    window.ondblclick = viewer.IFC.selector.highlightIfcItem(true)
    // Clear selection
    window.onkeydown = (event) => {
      if (event.code === 'KeyC') {
        viewer.IFC.selector.unpickIfcItems()
        viewer.IFC.selector.unHighlightIfcItems()
      }
    }
    return viewer
  }

  async function ifcLoader (props, viewer) {
    const blob = new Blob([ifcData], { type: 'text/plain', endings: 'native' })
    const ifcFile = new File([blob], 'file.ifc')
    await viewer.IFC.loadIfc(ifcFile, true)
  }

  return (
    <div id={id} className={'fullsize'}/>
  )
}

DashIfcHeatroom.defaultProps = {
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
