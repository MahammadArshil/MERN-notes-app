import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteModal from "../components/NoteModal";
import axios from "axios";
import NoteCard from "../components/NoteCard";
import { toast } from "react-toastify";

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [filteredNote, setFilteredNote] = useState(false);
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);
    const [query, setQuery] = useState('');

    const fetchNotes = async () =>{
        try{
            const {data} = await axios.get("http://localhost:5000/api/note",{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setNotes(data.notes);
        } catch(error){
            console.log(error);
        }
    }
    
    useEffect(()=>{
        fetchNotes();
    },[])

    useEffect(()=> {
        setFilteredNote(
            notes.filter((note) => 
                note.title.toLowerCase().includes(query.toLowerCase()) ||
                note.description.toLowerCase().includes(query.toLowerCase())
        )
        );
    },[query, notes])

    const closeModal = () =>{
        setModalOpen(false);
    }

    const onEdit = (note) => {
        setCurrentNote(note);
        setModalOpen(true);
    }

    const addNote = async (title, description) => {
        try {
            const response = await axios.post('http://localhost:5000/api/note/add', { title, description },{
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            });
            if(response.data.success){
                fetchNotes();
                closeModal();
                toast.success("Note Added Successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Can't Add the Note!");
        }
    }

    const editNote = async (id, title, description) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/note/${id}`, 
            { title, description },{
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            });
            if(response.data.success){
                fetchNotes();
                closeModal();
                toast.success("Note Edited Successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Can't Edit the Note!");
        }
    }

    const deleteNote = async(id) =>{
        try {
            const response = await axios.delete(`http://localhost:5000/api/note/${id}`, 
            {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            });
            if(response.data.success){
                fetchNotes();
                toast.success("Note Deleted Successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Can't Delete the Note!");
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar setQuery={setQuery} query={query} setNotes={setNotes} />

            <div className="px-8 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                { filteredNote.length >0 ? filteredNote.map(note =>(
                    <NoteCard note={note} onEdit={onEdit} deleteNote={deleteNote} />
                )) : <p>No Notes Found</p>}
            </div>

            <button 
            onClick={()=>{
                localStorage.getItem('token') ? setModalOpen(true) : toast.error("Please Login!")}}
            className="text-2xl fixed right-4 bottom-4 bg-teal-500 text-white font-bold p-4 rounded-full">
                +
            </button>
            {isModalOpen && <NoteModal closeModal={closeModal} addNote={addNote} 
            currentNote={currentNote} setCurrentNote={setCurrentNote} editNote={editNote} 
            />}
        </div>
    );
}
    
export default Home;
