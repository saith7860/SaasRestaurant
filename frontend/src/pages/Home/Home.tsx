import { useState } from "react";
import Categories from "../../components/Home/Categories";
import Navbar from "../../components/Home/Navbar"
const Home = () => {
   const [search, setSearch] = useState<string>("");
  return (
    <>
     <Navbar restaurnatName="AlHadi" setSearch={setSearch}   search={search}/>
     <Categories  search={search}/>
     
    </>
    
  )
}

export default Home;