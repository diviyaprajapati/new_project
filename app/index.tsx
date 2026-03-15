import { router } from "expo-router";
import React, { useState, useMemo, useEffect } from "react";
import { View, Text, Pressable } from "react-native";

const App = () => {

  const [num, setnum] = useState(5)
  const [count, setCount] = useState(1)

  const Test = useMemo(() => {
    return (num * num)
  }, [num])


  return (
    <View>
      <Text>{Test}</Text>
      <Text>{count}</Text>

      <Pressable onPress={() => setnum(num + 1)}>
        <Text>Change Num</Text>
      </Pressable>


      <Pressable onPress={() => {
        router.push("/component/Form")
      }
      }>
        <Text>Open Form</Text>
      </Pressable>
    </View>
  );
};

export default App;