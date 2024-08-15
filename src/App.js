import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Courses from "./components/Courses";
import Spinner from "./components/Spinner";
// import Error from "./components/Error";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      setCourses(data.data);
    } catch (error) {
      toast.error("Error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#474F7A]">
      <div>
        <Navbar />
      </div>
      <div className="bg-[#474F7A]">
        <div>
          <Filter filterData={filterData} category = {category} setCategory = {setCategory}/>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">
          {loading ?<Spinner />: <Courses courses={courses} category = {category} />}
        </div>
        
      </div>
    </div>
  );
}

export default App;
