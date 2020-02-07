import React from 'react'

const withClass = (WrappedComponent, className) => {
    class hoc extends React.Component {
        render() {
            console.log(this.props)
            console.log({...this.props})
            
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }

    return hoc
}

export default withClass;