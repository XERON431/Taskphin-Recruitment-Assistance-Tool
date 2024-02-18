import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CreatorRoute from '../../../../components/routes/CreatorRoute';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { FaEdit, FaToggleOn, FaTrash } from 'react-icons/fa'; // Import the delete icon
import { toast } from 'react-toastify';

const ImageView = () => {
  const [image, setImage] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadImage();
  }, [slug]);

  const loadImage = async () => {
    try {
      const { data } = await axios.get(`/api/image/${slug}`);
      setImage(data);
    } catch (error) {
      console.error('Error loading image:', error);
    }
  };

  const handlePublish = async (e, imageId) => {
    try {
      let answer = window.confirm('Are you sure you want to publish? It will be live.');
      if (!answer) return;

      const { data } = await axios.put(`/api/image/publish/${imageId}`);
      setImage(data);
      toast('Congratulations! Your Candidate is live!');
    } catch (err) {
      console.error('Error publishing candidate:', err);
      toast('Image publish failed. Try again.');
    }
  };

  const handleUnpublish = async (e, imageId) => {
    try {
      let answer = window.confirm('Are you sure you want to unpublish?');
      if (!answer) return;

      const { data } = await axios.put(`/api/image/unpublish/${imageId}`);
      setImage(data);
      toast('Candidate is taken down from showcase!');
    } catch (err) {
      console.error('Error unpublishing image:', err);
      toast('Image unpublish failed. Try again.');
    }
  };

  const handleDelete = async (imageId) => {
    try {
      let answer = window.confirm('Are you sure you want to delete this image?');
      if (!answer) return;

      await axios.delete(`/api/image/${imageId}`);
      toast('Image deleted successfully.');
      router.push('/'); // Redirect to homepage after deletion
    } catch (err) {
      console.error('Error deleting image:', err);
      toast('Image deletion failed. Try again.');
    }
  };

  return (
    <CreatorRoute>
      <div className="container-fluid pt-3">
        {image && (
          <div className="container-fluid pt-1">
            <div className="d align-items-center pt-2">
              <img
                src={image.image ? image.image.Location : '/1-8.jpg'}
                alt="Image Thumbnail"
              />
              <div className="flex">
                <div className="ml-3">
                  <h5 className="text-primary">{image.name}</h5>
                  <p style={{ fontSize: '10px' }}>{image.category}</p>
                </div>
              </div>
              <div className="align-items-right">
                <FaEdit
                  style={{
                    cursor: 'pointer',
                    marginRight: '10px',
                    color: '#007bff',
                    fontSize: '20px',
                  }}
                  onClick={() => {
                    router.push(`/creator/image/edit/${slug}`);
                  }}
                />
                <FaToggleOn
                  style={{
                    cursor: 'pointer',
                    color: image.published ? '#4caf50' : '#d9534f', // Green if published, Red if not
                    fontSize: '20px',
                  }}
                  onClick={(e) => (image.published ? handleUnpublish(e, image.id) : handlePublish(e, image.id))}
                />
                <FaTrash
                  style={{
                    cursor: 'pointer',
                    color: '#d9534f', // Red color for delete button
                    fontSize: '20px',
                  }}
                  onClick={() => handleDelete(image.id)}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <ReactMarkdown>{image.description}</ReactMarkdown>
              </div>
            </div>
            <br />
          </div>
        )}
      </div>
    </CreatorRoute>
  );
};

export default ImageView;
