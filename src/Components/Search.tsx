import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

function Search(){
    const [name , setName] = useState("Sports Highlights");
  const [data, setData] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: 'GET',
    params: {
      query: name,
      safesearch: 'false'
    },
    headers: {
      'X-RapidAPI-Key': '8697846c19msh68e30df43c51f2bp19c2bajsn2b7e7247ef14',
      'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
    }
  };

  async function getData() {
    const res = await fetch("https://simple-youtube-search.p.rapidapi.com/search?query=" +name+"&safesearch=false", options);
    if (!res.ok) {
      throw new Error("Failed to fetch data");

    }
    return res.json();
  }


  const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    console.log(e.target.value);
  }


  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("You Searched? " + name);
    try {
        const fetchedData = await getData();
        setData(fetchedData.results); // Update the state with fetched data
        const jsonData: apidata[] = fetchedData.results;
        setData(jsonData);
        console.log(jsonData);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
  }


  /* const handleInputChange = async (e: { target: { value: SetStateAction<string>; }; }) => {

  try {  setName(e.target.value);
    const fetchedData = await getData();
    setData(fetchedData.results); // Update the state with fetched data
    const jsonData: apidata[] = fetchedData.results;
    setData(jsonData);
    console.log(jsonData);
    setIsLoading(true);
  } catch (error) {
    console.error("Error fetching data:", error);
    setIsLoading(false);
  }

  getData();
  }
 */
  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch("https://simple-youtube-search.p.rapidapi.com/search?query=" +name+"&safesearch=false", options);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await getData();
        setData(fetchedData.results); // Update the state with fetched data
        const jsonData: apidata[] = fetchedData.results;
        setData(jsonData);
        console.log(jsonData);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  type apidata = {
    channel: {
        name: string;
        icon: string;
        id: string;
      };
      description: string | null;
      duration: number;
      duration_formatted: string;
      id: string;
      live: boolean;
      nsfw: boolean;
      private: boolean;
      title: string;

    thumbnail: {
        url: string;

    }
  }





    return(
        <body className=' bg-black ' >
        <div>
            <h2></h2>



           <form className=' bg-gray-800'>
              <div className=' text-center content-center p-2'>
                 <input className=' rounded-2xl h-10 w-80 my-4 p-4 mr-8' type="text"  placeholder={name} onChange={handleChange}  />
                 <button className=" w-52  content-center bg-white p-2 rounded-md" onClick={handleClick}> Search </button>
                 <button></button>
              </div>

           </form>





           <h2 className=' bg-white text-cyan-500'>

          {isLoading ? '' : 'Try Again' }
        </h2>
           <div className='grid  gap-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2' >
           {data.map((item) => (
            <><Card className="  bg-gray-900 rounded-2xl text-bo">
                <Card.Body className=" text-cyan-200"></Card.Body>
               <Button href={item.url}>
                    <img className="rounded-2xl" src={item.thumbnail.url} alt={item.title} />
                </Button>
      <Card.Body>
        <Card.Title className=" text-white font-bold">{item.title}</Card.Title>

        <Card.Text className=" text-slate-400 font-medium mt-3">{item.channel.name} </Card.Text>

        <Card.Text className=" text-slate-400 font-medium">{item.views} || {item.uploadedAt}  </Card.Text>

      </Card.Body>

               </Card><>


                   </></>
              ))}
           </div>
        </div>
     </body>
    )
}

export default Search;