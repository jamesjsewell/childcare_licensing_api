import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import createHistory from "history/createBrowserHistory"


class Blank extends Component {
    render() {
        return <div>test</div>
    }
}

class RouterConfig extends Component {

    render() {
        return (
            <Router>

                <Switch>

                    <Route exact path="/" component={Blank} />
                    <Route path="*" component={Blank} />

                </Switch>

            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default withRouter(connect(mapStateToProps)(RouterConfig))