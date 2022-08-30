export async function ifcLoader (ifcData, viewer) {
  const blob = new Blob([ifcData], { type: 'text/plain', endings: 'native' })
  const ifcFile = new File([blob], 'file.ifc')
  await viewer.IFC.loadIfc(ifcFile, true)
}
