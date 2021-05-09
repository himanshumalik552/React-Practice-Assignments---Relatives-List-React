import React from 'react'

const App = () => {

        const list =[{
            id:"relativeListItem1",
            name:"javaScript"
        },{
            id:"relativeListItem2",
            name:"Bootstrap"
        },{
            id:"relativeListItem3",
            name:"react"
        }];

        const listItem = list.map((list)=><li key={list.id}>{list.name}</li>);

    return (
        <div>
            <ol key="relativeList">{listItem}</ol>
        </div>
    )
}

export default App
