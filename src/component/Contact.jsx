"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";


const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div className="container">
        <div className="contact-left row">
          <div className="col-lg-4">
            <div className="card p-3">
              <a
                className="btn btn-lg btn-warning"
                href="https://wa.me/234"
                target="_blank"
                rel="noopener noreferrer"
              >
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card p-3">
              <a
                className="btn btn-lg btn-primary"
                href="mailto:tankohamza001@gmail.com?subject=hello&body=I%20would%20contact%20you"
              >
                SEND AN EMAIL
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card p-3">
              <a className="btn btn-lg btn-success" href="tel:+2348127404418">
                CALL
              </a>
            </div>
          </div>
        </div>



      </div>
      
      <div className="container py-5">
        {" "}
        <div className="row align-items-center">
          {" "}
          {/* Left: Image */}{" "}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            {" "}
            <img
              src="/logo.jpg"
              alt="Contact illustration"
              className="img-fluid rounded-5"
            />{" "}
          </div>
          {/* Right: Form */}{" "}
          <div className="col-md-6">
            {" "}
            <h2 className="text-center text-warning mb-4">Contact Us</h2>{" "}
            <form onSubmit={handleSubmit} className="border rounded-2 p-2">
              {" "}
              <div className="mb-3 text-light">
                {" "}
                <label className="form-label">Name</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />{" "}
              </div>
              <div className="mb-3 text-light">
                {" "}
                <label className="form-label">Email</label>{" "}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />{" "}
              </div>
              <div className="mb-3 text-light">
                {" "}
                <label className="form-label">Phone</label>{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />{" "}
              </div>
              <div className="mb-3 text-light">
                {" "}
                <label className="form-label">Message</label>{" "}
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />{" "}
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100"
                disabled={isSubmitting}
              >
                
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
              </button>
              <Link href="/intouch" className="btn w-100 btn-outline-warning mt-3">View Contact</Link>
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default ContactUs;
