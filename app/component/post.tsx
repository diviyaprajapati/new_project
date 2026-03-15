import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from "react"
const Post = (count) => {

    const random = Math.random()
    console.log("Post render")
    console.log(count)


    useEffect(() => {
        console.log("Post re-render")
    })
    return (
        <View>
            <Text>{random}</Text>
        </View>
    )
}

export default Post