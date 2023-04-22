

import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../redux/slice/postSlice';
import { AiFillEdit } from 'react-icons/ai';
import Grid from '@mui/material/Grid';
import { DeleteModal } from '../../modals/DeleteModal';
import { AiFillDelete } from 'react-icons/ai';
import { setUser } from '../../../redux/slice/userSlice';

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


export function AllTickets()  {
    
    const dispatch = useDispatch()
    const [posts, setPosts]= useState([])
    const postStatus=useSelector((state) => state.post.status);
    const user = useSelector((state) => state.user.currentUser.role);
    const [open, setOpen] =useState(false);
    const [deleteId, setDeleteId]= useState('');
    useEffect(() => {
        if (user!=='Employee'){
        getAdmin()
        return 
        }
        getEmployeePost()
        return 
    }, [dispatch]);

    const deleteUserData = async (id) => {
        setOpen(true)
        setDeleteId(id)
    }

    const getEmployeePost= async()=>{
        const {data}= await axios.get("/tickets")
        setPosts(data)
    }

    const getAdmin = async () => {
      const {data}= await axios.get("/tickets")
      setPosts(data);
    }

    return (

     <>
        <Grid container sx={{
            pl: 70,
            pt:5
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
                    <TableCell>Actions</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {posts.map((post) => (
                    <TRow key={post._id}>
                        <TableCell>{post.title}</TableCell>
                        <TableCell>{post.description.substring(0, 100)}</TableCell>
                        <TableCell>{post.type}</TableCell>
                        <TableCell>{post.status}</TableCell>
                        <TableCell>{post.user?.name}</TableCell>
                        <TableCell>
                        <Button color="secondary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/post/${post._id}`}><AiFillEdit/></Button>
                        <Button color="error" variant="contained" onClick={() => deleteUserData(post._id)}><AiFillDelete/></Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
        <DeleteModal openModel={open} setOpenModel={setOpen} text='post' deleteId={deleteId} />
        </>
    )
}

