import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../redux/slice/postSlice';
import { AiFillEdit } from 'react-icons/ai';
import Grid from '@mui/material/Grid';
import { DeleteModal } from '../../modals/DeleteModal';
import { AiFillDelete } from 'react-icons/ai';

import axios from 'axios';
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


export function AllQoute()  {
   
    const [posts, setPosts]= useState([])
    useEffect(() => {
        getQoutes()

    }, []);


    const getQoutes = async () => {
      const {data}= await axios.get("/qoutes")
      setPosts(data);
    }

    return (

     <>
      
       <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Service</TableCell>
                
                </THead>
            </TableHead>
            <TableBody>
                {posts.map((post) => (
                    <TRow key={post._id}>
                         <TableCell>{post.name}</TableCell>
                        <TableCell>{post.email}</TableCell>
                        <TableCell>{post.address }</TableCell>
                        <TableCell>{post.service}</TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    
        </>
    )
}

