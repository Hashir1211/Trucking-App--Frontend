import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillEdit } from 'react-icons/ai';
import Grid from '@mui/material/Grid';
import { DeleteModal } from '../../modals/DeleteModal';
import { AiFillDelete } from 'react-icons/ai';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import axios from 'axios';
const StyledTable = styled(Table)`
    width: 95%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        font-weight: bold;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;
const services =['pending', 'working', 'resolved'];

export function AllTickets() {

    const [posts, setPosts] = useState([])
    const postStatus = useSelector((state) => state.post.status);
    const user = useSelector((state) => state.user.currentUser.role);
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    useEffect(() => {
        if (user !== 'Employee') {
            getAdmin()
            return
        }
        getEmployeePost()
        return
    }, [open]);

    const deleteUserData = async (id) => {
        setOpen(true)
        setDeleteId(id)
    }

    const getEmployeePost = async () => {
        const { data } = await axios.get("/tickets/employee")
        setPosts(data)
    }

    const getAdmin = async () => {
        const { data } = await axios.get("/tickets")
        setPosts(data);
    }
    const handleChange=async (id , event , value)=>{
      
     if (value === event.target.value)
     return 
     const {data} = await axios.put(`/tickets/update/${id}`, {status: event.target.value})
     const { data : tickets} = await axios.get("/tickets")
     setPosts(tickets);
    }

    const assignTicket = async (id)=>{
        const {data} = await axios.get(`/tickets/assign/${id}`)
        const { data : tickets} = await axios.get("/tickets")
        setPosts(tickets);
    }

    if (!posts){
        return (
            <div>Loading</div>
        )
    }

   if (user !== 'Employee')
    return (

        <>
            <Grid container sx={{
                pl: 70,
                pt: 5
            }}>
                <Grid item>
                    <Link to="/create/ticket" >
                        Do you want to create a new Ticket
                    </Link>
                </Grid>
            </Grid>
            <StyledTable>

                <TableHead>
                    <THead>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Allocation</TableCell>
                        <TableCell>Delete Ticket</TableCell>
                    </THead>
                </TableHead>
                <TableBody>
                    {posts.map((post) => (
                        <TRow key={post._id}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.description.substring(0, 100)}</TableCell>
                            <TableCell>{post.type}</TableCell>
                            <TableCell>     <FormControl fullWidth >
                                <InputLabel id="demo-multiple-name-label">Service</InputLabel>
                                <Select
                                    id="service"
                                    name='service'
                                    input={<OutlinedInput label="Service" />

                                    }
                                    value={post.status}
                                    onChange={(event) => handleChange(post._id, event , post.status)}
                                >
                                    {services.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl></TableCell>
                            <TableCell>{post.user?.name}</TableCell>
                            <TableCell>
                               <Button color="error" variant="contained" onClick={() => deleteUserData(post._id)}><AiFillDelete /></Button>
                            </TableCell>
                        </TRow>
                    ))}
                </TableBody>
            </StyledTable>
            <DeleteModal openModel={open} setOpenModel={setOpen} text='ticket' deleteId={deleteId} />
        </>
    )
    else{
        return (

            <>
                <Grid container sx={{
                    pl: 70,
                    pt: 5
                }}>
                </Grid>
                <StyledTable>
    
                    <TableHead>
                        <THead>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Allocation</TableCell>
                            <TableCell>Actions</TableCell>
                        </THead>
                    </TableHead>
                    <TableBody>
                        {posts.map((post) => (
                            <TRow key={post._id}>
                                <TableCell>{post.title}</TableCell>
                                <TableCell>{post.description.substring(0, 100)}</TableCell>
                                <TableCell>{post.type}</TableCell>
                                <TableCell> {post.status}</TableCell>
                                <TableCell>{post.user?.name}</TableCell>
                                <TableCell>
                                  {!post.user && <Button color="secondary" variant="contained" style={{ marginRight: 10 }} onClick={() => assignTicket(post._id)}><AiFillEdit /></Button>}
                                </TableCell>
                            </TRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </>
        ) 
    }
}

