import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  const [data,changeData]=useState(
    [
        {
    
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
        },
        {
    
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          
        },
        {
        
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
        },
        {
          
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          
        },
        {
         
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "phone": "(254)954-1289",
          "website": "demarco.info",
         
        },
        {
          
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          
        },
        {
          
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "phone": "210.067.6132",
          "website": "elvis.io",
          
        },
        {
          
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          
        },
        
        
      ]
  )
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">website</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>
            {
                return <tr>
                <th scope="row">{value.name}</th>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.website}</td>
              </tr>
             
                
            }
        )
    }
    
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll
