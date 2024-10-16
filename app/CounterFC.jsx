import { Button, View ,Text} from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";

const CounterFC = () => {
  // immutable touples

  const [count, setCount] = useState(0);
  // constructor initialized
  useEffect(() => {
    console.log('ComponentDidMount: Component is mounted')

    return () => {
      console.log('componentWillUnmount: Component is unmounted')
    }
  }, []);
  uesEffect(() => {
    console.log('ComponentDidUpdate: Component has updated')
    return () => {
      console.log('useEffect cleanup: Component is unmounted')
    }
  },[count]
  )
  useLayoutEffect(() => {
    console.log('useLayoutEffect: Component is about to update')

  })
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  console.log('componentWillUpdate: Component')

  return (
    <View>
      {/* view tag is the container  */}
      {/* we can wrap something inside it  */}
      {/* it will work as a div  */}
      <Text>
        Count:{count}
      </Text>
      <Button
        title='Increment'
        onPress={incrementCount}
      />
    </View>
  )


 }
export default CounterFC;