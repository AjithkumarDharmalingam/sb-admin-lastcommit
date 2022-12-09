import React,{useState} from 'react'
export const UserContext = React.createContext();
function UserContextComponent({children}) {
    let [users,setUsers] = useState([
        {
          name:"Ajith",
          email:"ajith@gmail.com",
          mobile:"8220782876",
          batch:"B38WET",
          timings:"11am to 1pm"
        },
        {
          name:"vasanth",
          email:"vasanth@gmail.com",
          mobile:"8220782876",
          batch:"B38WET",
          timings:"11am to 1pm"
        },
        {
          name:"Dinesh",
          email:"dinesh@gmail.com",
          mobile:"8220782876",
          batch:"B38WET",
          timings:"11am to 1pm"
        },
        {
          name:"Kumar",
          email:"kumar@gmail.com",
          mobile:"8220782876",
          batch:"B38WET",
          timings:"11am to 1pm"
        },
      ])
  return <UserContext.Provider value = {{users,setUsers}}>
    {children}
  </UserContext.Provider>
}

export default UserContextComponent