import { React } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={[tw`bg-white h-full`]}>
            <View style={tw`p-5`}>
                <Image 
                source={
                    require('../assets/tb-black.png')
                }
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain'
                }}
                />

                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})