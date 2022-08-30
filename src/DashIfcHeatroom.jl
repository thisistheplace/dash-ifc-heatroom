
module DashIfcHeatroom
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/dashifcheatroom.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_ifc_heatroom",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_ifc_heatroom.min.js",
    external_url = "https://unpkg.com/dash_ifc_heatroom@0.0.1/dash_ifc_heatroom/dash_ifc_heatroom.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_ifc_heatroom.min.js.map",
    external_url = "https://unpkg.com/dash_ifc_heatroom@0.0.1/dash_ifc_heatroom/dash_ifc_heatroom.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
