import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addEventApi } from '../services/allApi';
// import { v4 as uuidv4 } from 'uuid';


const CreateEvent = () => {
    const [eventDetails, setEventDetails] = useState({
        eventImg: "", // Changed to match file input
        eventName: "",
        eventDate: "",
        eventTime: "",
        description: "",
        eventType: "",
        capacity: "",
        ticketPrice: "",
        isPublic: false,
        isPrivate: false,
       
    });

    const [preview, setPreview] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEventDetails(prevDetails => ({
            ...prevDetails,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    useEffect(() => {
        if (eventDetails.eventImg) {
            setPreview(URL.createObjectURL(eventDetails.eventImg));
        }
    }, [eventDetails.eventImg]);




    // const uniqueId = uuidv4();
    //     console.log(uniqueId); // Logs a unique ID like "3b241101-e2bb-4255-8caf-4136c566a962"




    const handleAdd = async () => {
        const { eventImg, eventName, eventDate, eventTime, description, eventType, capacity, ticketPrice, isPublic, isPrivate } = eventDetails;

        if (!eventImg || !eventName || !eventDate || !eventTime || !description || !eventType || !capacity || !ticketPrice) {
            toast.info("Please fill all required fields");
            return;
        }
        
       





        const reqBody = new FormData();
        reqBody.append("eventImg", eventImg);
        reqBody.append("eventName", eventName);
        reqBody.append("eventDate", eventDate);
        reqBody.append("eventTime", eventTime);
        reqBody.append("description", description);
        reqBody.append("eventType", eventType);
        reqBody.append("capacity", capacity);
        reqBody.append("ticketPrice", ticketPrice);
        reqBody.append("isPublic", isPublic ? "true" : "false");
        reqBody.append("isPrivate", isPrivate ? "true" : "false");
       

        const token = sessionStorage.getItem("token");
        if (token) {
            try {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                };
                
                const result = await addEventApi(reqBody, reqHeader); // Passing reqBody as intended
                if (result.status === 200) {
                    toast.success("Event added successfully");
                } else {
                    toast.error("Something went wrong");
                }
            } catch (error) {
                console.error(error);
                toast.error("Error adding event");
            }
        } else {
            toast.error("Authorization token is missing");
        }
    };

    return (
        <>
            <div className='row p-5' style={{ backgroundColor: 'black' }}>
                <div className="col-md-6">
                    <div style={{ width: '100%', backgroundColor: 'white' }}>
                        <div className='mt-5' style={{ height: '400px', width: '100%' }}>
                            <label htmlFor="eventImg">
                                <input
                                    id='eventImg'
                                    style={{ display: 'none' }}
                                    type="file"
                                    onChange={(e) => setEventDetails({ ...eventDetails, eventImg: e.target.files[0] })}
                                />
                                <img
                                    src={preview ? preview : 'https://cdn.dribbble.com/users/368620/screenshots/2294264/upload_button_material_design.gif'}
                                    alt=""
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="create-event">
                        <h2>Create Your Event</h2>
                        <form>
                            <label htmlFor="eventName">Event Name:</label>
                            <input
                                type="text"
                                id="eventName"
                                name="eventName"
                                value={eventDetails.eventName}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="eventDate">Event Date:</label>
                            <input
                                type="date"
                                id="eventDate"
                                name="eventDate"
                                value={eventDetails.eventDate}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="eventTime">Event Time:</label>
                            <input
                                type="time"
                                id="eventTime"
                                name="eventTime"
                                value={eventDetails.eventTime}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                value={eventDetails.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <label htmlFor="eventType">Event Type:</label>
                            <select
                                id="eventType"
                                name="eventType"
                                value={eventDetails.eventType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Event Type</option>
                                <option value="workshop">Workshop</option>
                                <option value="conference">Conference</option>
                                <option value="party">Party</option>
                            </select>
                            <label htmlFor="capacity">Capacity:</label>
                            <input
                                type="number"
                                id="capacity"
                                name="capacity"
                                value={eventDetails.capacity}
                                onChange={handleChange}
                                required
                            />
                            <fieldset>
                                <legend>Privacy Settings:</legend>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="isPublic"
                                        checked={eventDetails.isPublic}
                                        onChange={handleChange}
                                    /> Public
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="isPrivate"
                                        checked={eventDetails.isPrivate}
                                        onChange={handleChange}
                                    /> Private
                                </label>
                            </fieldset>
                            <label htmlFor="ticketPrice">Ticket Price:</label>
                            <input
                                type="number"
                                id="ticketPrice"
                                name="ticketPrice"
                                value={eventDetails.ticketPrice}
                                onChange={handleChange}
                                placeholder="Optional"
                            />
                            <button type="button" onClick={handleAdd}>Create Event</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} theme="colored" position="top-center" />
        </>
    );
};

export default CreateEvent;
