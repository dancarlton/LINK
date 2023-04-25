import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import { selectOrigin } from '../slices/navSlice'

const data = [
    {
        id: "123",
        title: "Create a Quest",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen" // change to screen you want to link to
    },
    {
        id: "456",
        title: "Choose a Quest",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen" // change to screen you want to link to
    },
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item }) => (
            <TouchableOpacity
            onPress={ () => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            // disabled={!origin}
            >
                <View >
{/* place this inside view when you figure out the onPress undefined:
style={tw`${!origin && 'opacity-20'}`} */}
                    <Image
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: 'contain',
                        }} 
                        source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-4 font-semibold`}>{item.title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name='arrowright'
                        color='white'
                        type='antdesign'
                    />   
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions
