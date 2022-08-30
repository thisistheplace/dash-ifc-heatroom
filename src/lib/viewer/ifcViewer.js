import { IfcViewerAPI } from 'web-ifc-viewer'

export function createViewer (id) {
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
