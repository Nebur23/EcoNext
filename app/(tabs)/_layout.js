import { Tabs } from "expo-router"
import { AntDesign } from '@expo/vector-icons';

export default () => {
    
    return (
        <Tabs>
             <Tabs.Screen 
                name="home"
                options={{
                    tabBarIcon: () => {
                        return <AntDesign name="home" size={24} color="black" />
                    }
                }}
             />
              <Tabs.Screen 
                name="list"
                
             />
        </Tabs>
    )
}