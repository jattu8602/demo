import { View, Text,Button } from 'react-native'
import React from 'react'
import { Component } from 'react'
class Counter extends Component {

  constructor(props) {
    super(props)
    console.log('Constructor: Component is created')
    this.state = {
      count: 0,

    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps: Component is re-rendered',nextProps,prevState)
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Component is about to update', prevProps, prevState)
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Component is about to update', nextProps, nextState)
    
    return true;
  }
  componentDidMount() {
    console.log('ComponentDidMount: Component is mounted')
  }
  componentDidUpdate(prevProps, prevState,snapshot) {
    console.log(' componentDidUpdate: Component has updated', prevProps, prevState,snapshot)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount: Component is unmounted')
  }



  // state = {
  //   count: 0,
  // };
  // props = {
  //   children: React.Children,
  // }
  incrementCount=()=> {
    let updatedCount = this.state.count + 1;
    this.setState({ count: updatedCount })
  }
  render() {
    console.log('render: Component is rendered')
    return (
      <View>
        <Text>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.incrementCount} />
        {this.props.children}
      </View>
    )
  }
}
export default Counter
