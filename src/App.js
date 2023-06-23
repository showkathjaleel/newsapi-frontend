import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = "99659b2b7929dfea96aafe1a5d3659f2";


 
function App() {

  const [articles,setArticles]=useState([])
  // const itemsToShow = 5;
  const displayedData = articles?.slice(0, 4);

  useEffect(()=>{
   fetchNews()
  },[])

  const fetchNews=async ()=>{
    try{
  
      const response=await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-05-23&sortBy=publishedAt&apiKey=a82f36c0a75e49bab19241d8eacb1b0b')
      console.log(response)
     if(response.status===200){
      setArticles(response.data.articles)
     }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="bg-gray-200 pt-5 h-screen justify-center flex  pb-4 overflow-y-hidden">
      <div className="shadow-lg rounded-2xl bg-white px-16 h-screen w-4/5 ">
        <Navbar />

        <div className=" flex h-36 bg-gray-100 justify-center items-center  mb-8  text-lg">
          <div>
            <h2 className="text-sm text-gray-600 pl-44">WELCOME TO BULLETIN</h2>

            <p className="font-bold text-3xl">
              Craft Narratives that ignite{" "}
              <span className="text-red-700 "> inspiration ,</span>
            </p>
            <p className="text-red-700 pl-5 font-bold text-3xl">
              {" "}
              knowledge <span className="text-black">and</span>
              <span className="text-red-700 "> entertainment</span>
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-16">
          <div class="w-[800px] rounded overflow-hidden ">
            <img
              className="w-full h-64"
              src="https://pyxis.nymag.com/v1/imgs/a85/912/a5ef47190c966169cf6e9c6da815b0f0ad-07-john-wick-2-2.rsquare.w700.jpg"
              alt="Sunset in the mountains"
            />
          </div>

          <div className="p-4">
            <div className="flex ">
              <img
                className="w-10 h-10"
                src="https://static.vecteezy.com/system/resources/previews/020/336/373/original/netflix-logo-netflix-icon-free-free-vector.jpg"
                alt=""
              />
              <p className="text-sm text-gray-600 mt-2">
                Netflix 12 minute ago
              </p>
            </div>

            <p className="text-6xl font-semibold">
              {" "}
              Where To Watch 'John
              <br /> Wick: Chapter 4
            </p>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              distinctio, dolores vero quos id adipisci a at et, suscipit
              repellat aspernatur? Aliquid velit reiciendis voluptas, ex
              eligendi voluptate totam vero.
            </p>

            <p className="text-sm text-gray-600 mt-2 ">
              <span className="text-red-700"> Movies</span> 4 min read
            </p>
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <div className="font-semibold text-3xl">Latest News</div>
          <div className="text-red-700">See all →</div>
        </div>

        <div className="flex flex-wrap gap-7 mt-4">
          {displayedData?.map((info)=> (
              <Card info={info}/>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
