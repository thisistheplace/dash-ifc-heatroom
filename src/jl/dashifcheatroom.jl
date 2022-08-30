# AUTO GENERATED FILE - DO NOT EDIT

export dashifcheatroom

"""
    dashifcheatroom(;kwargs...)

A DashIfcHeatroom component.

Keyword arguments:
- `id` (String; required): The ID used to identify the container for the IFC viewer component.
- `ifcData` (String; optional): The contents of the ifc file
"""
function dashifcheatroom(; kwargs...)
        available_props = Symbol[:id, :ifcData]
        wild_props = Symbol[]
        return Component("dashifcheatroom", "DashIfcHeatroom", "dash_ifc_heatroom", available_props, wild_props; kwargs...)
end

