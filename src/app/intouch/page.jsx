"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const InTouch = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (data.success) {
        setContacts(data.contacts);
      } else {
        toast.error("Failed to load contacts");
      }
    } catch (error) {
      toast.error("Error fetching contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;
    try {
      const res = await fetch("/api/contact", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Deleted successfully");
        setContacts(contacts.filter((c) => c._id !== id));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error deleting contact");
    }
  };

 const handleUpdate = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const res = await fetch("/api/contact", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editContact._id, // ✅ send ID as 'id'
        name: editContact.name,
        email: editContact.email,
        phone: editContact.phone,
        message: editContact.message,
      }),
    });

    const data = await res.json();
    if (data.success) {
      toast.success("Updated successfully!");
      setContacts((prev) =>
        prev.map((c) => (c._id === editContact._id ? data.updatedContact : c))
      );
      setEditContact(null);
    } else {
      toast.error(data.message || "Update failed");
    }
  } catch (error) {
    toast.error("Error updating contact: " + error.message);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="container py-5">
      <h2 className="text-center text-warning mb-4">All Contacts</h2>
      {contacts.length === 0 ? (
        <p className="text-center text-light">No contacts found.</p>
      ) : (
        <div className="row">
          {contacts.map((contact) => (
            <div key={contact._id} className="col-md-4 mb-4">
              <div className="card p-3 bg-dark text-light shadow">
                <h5>{contact.name}</h5>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.message}</p>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-warning w-50"
                    onClick={() => setEditContact(contact)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger w-50"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal or Inline Form */}
      {editContact && (
        <div className="card p-3 mt-4 bg-dark text-light">
          <h4>Edit Contact</h4>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              className="form-control mb-2"
              value={editContact.name}
              onChange={(e) =>
                setEditContact({ ...editContact, name: e.target.value })
              }
            />
            <input
              type="email"
              className="form-control mb-2"
              value={editContact.email}
              onChange={(e) =>
                setEditContact({ ...editContact, email: e.target.value })
              }
            />
            <input
              type="text"
              className="form-control mb-2"
              value={editContact.phone}
              onChange={(e) =>
                setEditContact({ ...editContact, phone: e.target.value })
              }
            />
            <textarea
              className="form-control mb-2"
              rows="3"
              value={editContact.message}
              onChange={(e) =>
                setEditContact({ ...editContact, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="btn btn-warning w-100"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Contact"}
            </button>
            <button
              type="button"
              className="btn btn-outline-light w-100 mt-2"
              onClick={() => setEditContact(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default InTouch;
