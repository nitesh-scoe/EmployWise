import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state; // Get user data from navigation

  const [formData, setFormData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${user.id}`, formData);
      alert("User updated successfully!");
      navigate("/users"); // Redirect back to the users list
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error updating user!");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" name="first_name" value={formData.first_name} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-success">Update</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/users")}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUser;
