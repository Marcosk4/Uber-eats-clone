import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/Home/BottomTabs'
import Categories from '../components/Home/Categories'
import HeaderTabs from '../components/Home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/Home/RestaurantItems'
import SearchBar from '../components/Home/SearchBar'

const YELP_API_KEY = "ctQ_za66iiKa--f9iPNULDmYmoTBz35-RLu-wTiTKnNkLt_sgWtY9RmyYaXe_B3zBB5NlgTpgR1xF61PdbL1esr7V9TXBUAaKws06Dq0Np_vWgWO24QwHPj9AI-OYXYx"

export default function Home({navigation}) {
    const[restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState('San Francisco')
    const[activeTab, setActiveTab] = useState("delivery")

    const getRestaurantsFromYelp= () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        
    

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
        },
    };

        return fetch(yelpUrl, apiOptions).then((res) => res.json()).then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))))
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab])

    return (
        <SafeAreaView style ={{backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width ={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}
