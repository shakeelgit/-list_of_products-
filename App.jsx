import React from 'react';

const initialList  = [
  {
     
    id: 'Id: 001',
    name: ' Name:Laptop',
    rate: 'Rate:25000',
    quality: 'Quality:Best',
    
  },
  {
    id: 'Id: 002',
    name: 'Nambe:Tab',
    rate: 'Rate:10000',
    quality: 'Quality:Best',
  },
  {
  id: 'Id: 003',
  name: 'Name:Mobile',
  rate: 'Rate:5000',
  quality: 'Quality:    Best',
  },    

];

const App = () => {
   
    const [list, setList] = React.useState(initialList);
    
   function handleRemove(id) {
      const newList = list.filter((item) => item.id !== id);
     setList(newList);
   }
   return <List list={list} onRemove={handleRemove} />;

  };



    const List = ({ list, onRemove }) => (
        <ul>
          {list.map((item) => (
            <Item key={item.id} item={item} onRemove={onRemove} />
          ))}
        </ul>
    );
       
    const Item = ({ item, onRemove }) => (
        <ol>
        
        <h4>Product</h4>
        <li><span>{item.id}</span></li>
         <tr></tr> <li><span>{item.name}</span></li>
          <li><span>{item.rate}</span></li>
        <li> <span>{item.quality}</span></li><br/>
       <button type="button" onClick={() => onRemove(item.id)}>Delete</button></ol>
    )
              
         export default App;


