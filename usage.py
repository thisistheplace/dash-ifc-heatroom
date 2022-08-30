import dash_ifc_heatroom
from dash import Dash, html
from dash.dependencies import Input, Output

app = Dash(__name__)

app.layout = html.Div([
    dash_ifc_heatroom.DashIfcHeatroom(
        id='input',
        value='my-value',
        label='my-label'
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
