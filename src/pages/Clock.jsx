import React from 'react'

class Clock extends React.Component {
   constructor(props) {
      super(props)
      this.state = {date: new Date()}
   }
   tick() {
      this.setState({
         date: new Date()
      })
   }
   componentDidMount() {
      this.TimerId = setInterval(()=> {
         this.tick()
      }, 1000)
   }
   componentWillUnmount() {
      clearInterval(this.TimerId)
   }
   render() {
      return (
         <>
            <h1>My Clock</h1>
            <p>Current time: {this.state.date.toLocaleTimeString()}</p>
         </>
      )
   }
}

export default Clock;