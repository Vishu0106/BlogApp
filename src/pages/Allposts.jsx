import React, { useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config.js'
function Allposts() {

    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
    }, [])

    appwriteService.getPosts().then((posts) => {
        if(posts) {
            setPosts(posts.documents);
            setLoading(false);
        }
    })
  
  return (
    <div className='py-8'>
       <Container>
           <div className='flex flex-wrap'>
            {
                posts.map((post) => {
                    return(
                        <PostCard 
                        key={post.$id}
                        post={post}
                        className='p-2 w-1' />
                    )
                })
            }
           </div>
       </Container>
    </div>
  )
}

export default Allposts