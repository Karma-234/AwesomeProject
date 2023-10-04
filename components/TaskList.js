import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import TaskCard from './TaskCard';
import CustomGap from './CustomGap';

const TaskList = ({itemsToDisplay=[], onDelete=([])=>{}, onDone=([])=>{}}) => {
    const renderItem = ({item})=> <TaskCard 
                                    key={item.id} 
                                    title={item.title} 
                                    description={item.description}
                                    isDone={item.isDone}
                                    onDone={()=>{
                                        const newData = item;
                                        newData.isDone = true;
                                        itemsToDisplay.splice(itemsToDisplay.indexOf(item),0,newData);
                                        itemsToDisplay.splice(itemsToDisplay.indexOf(item),1);
                                        onDone(itemsToDisplay);
                                    }}
                                    onDelete={()=>{
                                        itemsToDisplay.splice(itemsToDisplay.indexOf(item),1);
                                        console.log(itemsToDisplay.length);
                                        onDelete(itemsToDisplay);
                                    }}
                                    />
  return (
    <View style={style.container}>
      <FlatList
      data={itemsToDisplay}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={<CustomGap height={8}/>}>
      </FlatList>
    </View>
  );
}
const style = StyleSheet.create({
    container: {
        // flex: 1,

    }
});

export default TaskList;
export const menuItemsToDisplay = [
    { title: 'Hummus', id: '1A', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Moutabal', id: '2B', description: 'Lorem ipsum aquafina selecter opions', isDone: false },
    { title: 'Falafel', id: '3C', description: 'Lorem ipsum aquafina selecter opions', isDone: false },
    { title: 'Marinated Olives', id: '4D', description: 'Lorem ipsum aquafina selecter opions', isDone: false },
    { title: 'Kofta', id: '5E', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Eggplant Salad', id: '6F', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Lentil Burger', id: '7G', description: 'Lorem ipsum aquafina selecter opions', isDone: false },
    { title: 'Smoked Salmon', id: '8H', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Kofta Burger', id: '9I', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Turkish Kebab', id: '10J', description: 'Lorem ipsum aquafina selecter opions', isDone: false },
    { title: 'Fries', id: '11K', description: 'Lorem ipsum aquafina selecter opions', isDone: false },	
    { title: 'Buttered Rice', id: '12L', description: 'Lorem ipsum aquafina selecter opions', isDone: false },
    { title: 'Bread Sticks', id: '13M', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Pita Pocket', id: '14N', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Lentil Soup', id: '15O', description: 'Lorem ipsum aquafina selecter opions', isDone: false },
    { title: 'Greek Salad', id: '16Q', description: 'Lorem ipsum aquafina selecter opions', isDone: false },
    { title: 'Rice Pilaf', id: '17R', description: 'Lorem ipsum aquafina selecter opions', isDone: false },
    { title: 'Baklava', id: '18S', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Tartufo', id: '19T', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Tartufo', id: '20U', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Tiramisu', id: '21V', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
    { title: 'Panna Cotta', id: '22W', description: 'Lorem ipsum aquafina selecter opions', isDone: true },
  ];