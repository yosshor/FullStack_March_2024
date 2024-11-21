import React, { useEffect, useState } from "react";
import "./GenerateImages.scss";

const GenerateImages = () => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [replaceImage, setReplaceImage] = useState<string | null>(null);

  async function fetchImages(num: number = 10): Promise<void> {
    try {
      const apiKey = import.meta.env.VITE_CAT_API_KEY;
      if (!apiKey) {
        console.error(
          "API key is missing. Please set VITE_CAT_API_KEY in your environment."
        );
        return;
      }
      const url = `https://api.thecatapi.com/v1/images/search?limit=${num}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      });
      const data = await res.json();
      if (num === 10) {
        setImages(data.map((image: any) => image.url));
      } else {
        const newImage = data[0]?.url;
        setReplaceImage(newImage || null);
      }
    } catch (error: any) {
      console.error("Error fetching data: ", error);
      setError(error.message || "Failed to fetch images.");
    }
  }

  async function handleReplaceImage(imageUrl: string): Promise<void> {
    try {
      setTempImage(imageUrl); // Set tempImage before fetching a new one
      await fetchImages(1); // Fetch one replacement image
    } catch (error: any) {
      console.error("Error replacing image: ", error);
      setError(error.message || "Failed to replace image.");
    }
  }

  useEffect(() => {
    // If a new replacement image is available, update the selected image
    if (replaceImage && tempImage) {
      const updatedImages = images.map((img) =>
        img === tempImage ? replaceImage : img
      );
      setImages(updatedImages );
      setSelectedImage(replaceImage); // Automatically select the new image
      setTempImage(null); // Reset tempImage after updating
      setReplaceImage(null); // Reset replaceImage
    }
  }, [replaceImage]);

  useEffect(() => {
    setLoading(true);
    fetchImages();
    setLoading(false);
  }, []);

  return (
    <>
      <div>
        <h2 id='generate-image-title'>Generate Images</h2>
      </div>
      <div className="generate-new-images">
        <button
          onClick={() => {
            fetchImages();
            setSelectedImage(null);
          }}
        >
          Generate New Images
        </button>
      </div>
      <div className="cats">
        {error && <p className="error">{error}</p>}
        {loading && <p>Loading...</p>}
        {images.map((image, index) => (
          <div className="wrapper-cat" key={index}>
            <div
              className={selectedImage === image ? "cat selected" : "cat"}
              key={index}
            >
              <img
                key={index}
                src={image}
                alt="cat"
                onClick={() => {
                  setSelectedImage(
                    selectedImage === image ? null : image
                  );
                }}
              />
            </div>
            <div>
              <button onClick={() => handleReplaceImage(image)}>
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenerateImages;
