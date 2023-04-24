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
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
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

const options = ['Option 1', 'Option 2'];
export function AllBlog() {

    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [postName, setPostName] = useState([])
    const dispatch = useDispatch()
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
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
        const { data } = await axios.get("/posts/employee")
        const names = data.map((value) => {
            return value.title
        })
        names.push('')
        setPostName(names)
        setPosts(data)
        setFilteredPosts(data)
    }

    const getAdmin = async () => {
        const { data } = await axios.get("/posts")
        const names = data.map((value) => {
            return value.title
        })
        names.push('')
        setPostName(names)
        setPosts(data);
        setFilteredPosts(data)
    }

    return (

        <>
            <Grid container sx={{
                pl: 20,
                pt: 5
            }}>
             
                <Grid item >
                    <Autocomplete

                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);

                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            if (newInputValue.length > 3) {

                                const newFilteredPost = posts.filter((value) => {
                                   
                                    if (value.title.toLowerCase().startsWith(newInputValue.toLowerCase())) {
                                        return value
                                    }
                                })
                                setFilteredPosts(newFilteredPost)
                            }
                            else {
                                setFilteredPosts(posts)
                            }

                            setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={postName}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search" />}
                    />
                </Grid>
                <Grid item sx={{
                    pl : 50
                }}  >
                    <Button> 
                    <Link to="/create/post" >
                       Create A Post
                    </Link></Button>
                   
                </Grid>
            </Grid>
            <StyledTable>

                <TableHead>
                    <THead>
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Actions</TableCell>
                    </THead>
                </TableHead>
                <TableBody>
                    {filteredPosts.map((post) => (
                        <TRow key={post._id}>
                            <TableCell><div className='employeeBlogcontainer'><img src={post.image} /></div></TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.description.substring(0, 100)}</TableCell>
                            <TableCell>{post.user.name}</TableCell>
                            <TableCell>
                                <Button color="secondary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/post/${post._id}`}><AiFillEdit /></Button>
                                <Button color="error" variant="contained" onClick={() => deleteUserData(post._id)}><AiFillDelete /></Button>
                            </TableCell>
                        </TRow>
                    ))}
                </TableBody>
            </StyledTable>
            <DeleteModal openModel={open} setOpenModel={setOpen} text='post' deleteId={deleteId} />
        </>
    )
}

