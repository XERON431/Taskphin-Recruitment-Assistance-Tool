import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ImageCard from "../components/cards/ImageCard";
import { Context } from "../context";
import TextField from '@mui/material/TextField';

const Index = ({ images }) => {
  const { user } = useContext(Context);
  const router = useRouter();

  const [searchText, setSearchText] = useState('');
  const [searchedImages, setSearchedImages] = useState([]);

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login"); // Redirect to login page if user is not logged in
  //   }
  // }, []);

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    const filteredImages = images.filter(image =>
      image.description.toLowerCase().includes(text.toLowerCase())
    );
    setSearchedImages(filteredImages);
  };

  return (
    <>
      <div style={{ textAlign: "center", background: "#000000", color: "#fff", padding: "20px" }}>
        <h1>Global Candidate Showcase</h1>
      </div>
      <div className="container-fluid">
        <div className="row pt-2">
          <div className="col-md-12">
            <TextField
              fullWidth
              id="search"
              label="Search descriptions..."
              variant="outlined"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="row pt-2">
          {(searchText ? searchedImages : images)?.map((image) => (
            <div key={image.id} className="col-md-4">
              <ImageCard key={image.id} image={image} />
            </div>
          ))}
        </div>
        {searchText && searchedImages.length === 0 && (
          <div>No candidate meets required skills</div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await axios.get('http://localhost:3000/api/images');
    return { 
      props: {
        images: data,
      },
    };
  } catch (error) {
    console.error("Error fetching images:", error);
    return { 
      props: {
        images: [],
      },
    };
  }
}

export default Index;
