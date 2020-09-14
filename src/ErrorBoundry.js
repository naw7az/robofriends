// Error Boundry is useful when we put our app in production.

import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor (props) {
        super (props);
        this.state = {
            hasError: false
        }
    }

    // this method is likeb try, catch in js
    componentDidCatch (error, info) {
        this.setState({hasError: true})

    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. That is not Goood.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry

