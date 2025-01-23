import { useState } from 'react'; 
import { LiaPhotoVideoSolid } from "react-icons/lia"; 
import { FaGreaterThan, FaLessThan } from "react-icons/fa"; 
import "./css/createPost.css";  

export function CreatePostBox() {     
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTextInput, setShowTextInput] = useState(false);
  const [username, setUsername] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleFileChange = (event) => {     
    const files = event.target.files;     
    setSelectedFiles(Array.from(files));
    setCurrentIndex(0);
  };    

  const hasImageFile = selectedFiles.some(file => file.type.startsWith('image/'));

  const handleNext = () => {
    if (selectedFiles.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedFiles.length);
    }
    setShowTextInput(true);  // Show username and text input after clicking "Next"
  };

  const handlePrevious = () => {
    if (selectedFiles.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + selectedFiles.length) % selectedFiles.length);
    }
  };

  const handlePreviewClick = () => {
    // Go back one step when clicking on the preview
    if (selectedFiles.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + selectedFiles.length) % selectedFiles.length);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  return (     
    <div className="create-post-box">       
      <div className="header-container">
        <h2>Create new post</h2>
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      </div>

      <div className="upload-area">         
        {!hasImageFile && <LiaPhotoVideoSolid className="upload-icon" />}
        {!hasImageFile && <span>Drag photos and videos here</span>}
        
        {!hasImageFile && <label htmlFor="file-upload" className="custom-file-button">
          Choose
        </label>}
        
        <input
          id="file-upload"
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleFileChange}
        />
        
        <div className="file-previews">           
          {selectedFiles.length > 0 && (
            <div className="file-preview" onClick={handlePreviewClick}> {/* Click event to go back */}
              {selectedFiles[currentIndex].type.startsWith('image/') ? (                  
                <img src={URL.createObjectURL(selectedFiles[currentIndex])} alt={selectedFiles[currentIndex].name} className="file-thumbnail" />               
              ) : selectedFiles[currentIndex].type.startsWith('video/') ? (                  
                <video controls className="file-thumbnail">                   
                  <source src={URL.createObjectURL(selectedFiles[currentIndex])} type={selectedFiles[currentIndex].type} />                 
                </video>               
              ) : null}               
            </div>
          )}         
        </div>

        {selectedFiles.length > 1 && (
          <div className="navigation-buttons">
            <button onClick={handleNext} className="next-button">
              <FaGreaterThan />
            </button>
          </div>
        )}
      </div>

      {showTextInput && (
        <div className="post-input-section">
          <h3>{username || "jkcoder01"}</h3>
          <textarea 
            value={postContent} 
            onChange={handlePostContentChange} 
            placeholder="Write your post..." 
            className="post-content-input"
          />
        </div>
      )}
    </div>   
  ); 
}
