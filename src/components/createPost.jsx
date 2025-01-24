import { useState } from "react"; 
import { LiaPhotoVideoSolid } from "react-icons/lia"; 
import { FaGreaterThan, FaLessThan } from "react-icons/fa"; 
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon
import "./css/createPost.css";  

export function CreatePostBox() {     
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTextInput, setShowTextInput] = useState(false);
  const [username, setUsername] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isVisible, setIsVisible] = useState(true); // Visibility state

  const handleFileChange = (event) => {     
    const files = event.target.files;     
    setSelectedFiles(Array.from(files));
    setCurrentIndex(0);
    setShowTextInput(true); // Automatically show the input fields when a file is uploaded
  };    

  const hasImageFile = selectedFiles.some(file => file.type.startsWith('image/'));

  const handleNext = () => {
    if (selectedFiles.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedFiles.length);
    }
  };

  const handlePrevious = () => {
    if (selectedFiles.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + selectedFiles.length) % selectedFiles.length);
    }
  };

  const handlePreviewClick = () => {
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

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (     
    <div className="create-post-box">       
      <div className="header-container">
        <h2>Create new post</h2>
        <AiOutlineClose className="close-icon" onClick={handleClose} /> {/* Close button */}
      </div>

      <div className="upload-area">         
        {!hasImageFile && <LiaPhotoVideoSolid className="upload-icon" />}
        {!hasImageFile && <span>Drag photos here</span>}
        
        {!hasImageFile && <label htmlFor="file-upload" className="custom-file-button">
          Choose
        </label>}
        
        <input
          id="file-upload"
          type="file"
          accept="image/*,"
          onChange={handleFileChange}
        />
        
        <div className="file-previews">           
          {selectedFiles.length > 0 && (
            <div className="file-preview" onClick={handlePreviewClick}>
              {selectedFiles[currentIndex].type.startsWith('image/') ? (                  
                <img src={URL.createObjectURL(selectedFiles[currentIndex])} alt={selectedFiles[currentIndex].name} className="file-thumbnail" />                              
              ) : null}               
            </div>
          )}         
        </div>

        {selectedFiles.length > 1 && (
          <div className="navigation-buttons">
            <button onClick={handlePrevious} className="prev-button">
              <FaLessThan />
            </button>
            <button onClick={handleNext} className="next-button">
              <FaGreaterThan />
            </button>
          </div>
        )}
      </div>

      {showTextInput && (
        <div className="post-input-section">
          <input 
            type="text" 
            className="post-header" 
            placeholder="Enter your titel name..." 
            value={username}
            onChange={handleUsernameChange}
          />
          <textarea 
            value={postContent} 
            onChange={handlePostContentChange} 
            placeholder="Write a caption..." 
            className="post-content-input"
          />
        </div>
      )}

      {hasImageFile && (
        <div className="post-button-container">
          <button onClick={handleClose} className="post-button">
            Post
          </button>
        </div>
      )}
    </div>   
  );
}
