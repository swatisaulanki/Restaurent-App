import React,{useState} from 'react'
import data from "./data.json"
import { Link } from 'react-router-dom'
import { Pagination } from 'react-bootstrap';

const Home = () => {
  const [menu, setMenu] = useState(data)
 

  const h2l = () =>{
  const list = menu?.sort(function (b,a){
     return b.rating-a.rating
    })
    setMenu([...list])
  }

  const l2h = () =>{
  const list = menu?.sort(function (a,b){
     return a.rating-b.rating
    })
    setMenu([...list])
  }
  // console.log(name);



  const cash = () =>{
    console.log("cash")
     const list = data?.filter((item) => item?.payment?.cash === "true")
     setMenu([...list])   
    }


  const card = () =>{
    console.log("card")
    const list = data?.filter((item) => item?.payment?.card === "true")
     setMenu([...list])  
  }
  const upi = () =>{
    console.log("upi")
    const list = data?.filter((item) => item?.payment?.upi === "true")
     setMenu([...list])  
  }
  const all = () =>{
    console.log("all")
     setMenu(data)  
  }


  const ph2l = () =>{
   const list =  menu?.sort(function (a,b){
      return b.cost-a.cost
     })
     setMenu([...list])
     console.log(list);
  }
  const pl2h = () =>{
    const list = menu?.sort(function (a,b){
      return a.cost-b.cost
     })
     setMenu([...list])
     console.log(list);
  }

  console.log(menu);
  
  
  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

  const page = () =>{
    return (
      <div>
    <Pagination>{menu}</Pagination>
    <br />

    <Pagination size="lg">{menu}</Pagination>
    <br />

    <Pagination size="sm">{menu}</Pagination>
  </div>
    )
  }

  return (
    <div>
    <div className="add-sort">
   <Link to="/form">
   <button className='add-res'><h2> Add Restuarant </h2></button>
   </Link>
   <div className="sorting">
    <h2>Sort By Rating</h2>
   <button className='HtoL' onClick={()=>h2l()}>High to Low</button>
   <button className='LtoH' onClick={()=>l2h()}>Low to High</button>
   <button className='LtoH' onClick={()=>l2h()}>midium to High</button>

   </div>
   <div className="pay">
    <h2>Payment</h2>
   <button className='cash' onClick={cash}>Cash</button>
   <button className='card-p' onClick={card}>Card</button>
   <button className='upi' onClick={upi}>UPI</button>
   <button className='all' onClick={all}>All</button>
   </div>
   <div className="cost">
    <h2>Sort by Price</h2>
   <button className='low2high' onClick={()=>pl2h()}>Low to High</button>
   <button className='high2low' onClick={()=>ph2l()}>High to Low</button>
   </div>

   </div>

   <div className="mapped-data">
   {menu.map( item =>{
        return (
          <div className='card' key={item.id}>
           <div className='img-container'>
          <img src={`${item.image}`} alt="" />
          <div className="row0">
              <h5 className='time'>{item.time}</h5>
            {item?.offer && (<h4 className='offer'>{item.offer}</h4>)}
            </div>
          </div>
          <div className="detail">
            <div className="row1">
              <h2>{item.name}</h2>
              <div className='rating'>{item.rating} <i className="fas fa-star-half-alt"></i>
               </div>
            </div>
            <div className="row2">
              <p>{item.types}</p>
              <h4 className='costing'>{`₹${item.cost} for one`}</h4>
            </div>
            <button className='online-btn'>Order Online <i className="fas fa-arrow-right"></i></button>
          </div>

          </div>
        )
      })}
  </div>
  {page}
  <Pagination className='Pagination'>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  {/* <Pagination.Ellipsis /> */}

  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item >{3}</Pagination.Item>
  <Pagination.Item disabled>{4}</Pagination.Item>

  {/* <Pagination.Ellipsis /> */}
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
    </div>
  )
}

export default Home