import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../redux/slice/postSlice';

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


export function AllBlog()  {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.data);
    const postStatus=useSelector((state) => state.post.status);

    useEffect(() => {
        getAllUsers()
    }, [dispatch]);

    const deleteUserData = async (id) => {
        // await deleteUser(id);
    }

    const getAllUsers = async () => {
        dispatch(fetchPosts());
    }
    if (postStatus!=='succeeded'){
        return (
            <div>Loading</div>
        )
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Image</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {posts.map((post) => (
                    <TRow key={post._id}>
                        <TableCell><div className='employeeBlogcontainer'><img  src={post.image}/></div></TableCell>
                        <TableCell>{post.title}</TableCell>
                        <TableCell>{post.description.substring(0, 100)}</TableCell>
                        <TableCell>{post.user.name}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${post._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(post._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

