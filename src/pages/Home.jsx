import { Suspense } from "react"
import { Await, defer, useLoaderData } from "react-router-dom"
import Main from "../components/Main"
import { fetchStories, fetchUsers } from "../http"
import Header from "../components/Header"

function Home(){
    const  {users}  = useLoaderData()
    const {stories} = useLoaderData()
    return (
        <Suspense fallback={<p style={{ textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={stories}>
                {(loadedStories) => <Header stories={loadedStories} />}
            </Await>
            <Await resolve={users}>
                {(loadedUsers) => <Main users={loadedUsers}/>}
            </Await>
        </Suspense>
    )
}

export default Home

async function loadUsers(){
    const gainedUsers = await fetchUsers()
    return gainedUsers
}

async function loadStories(){
    const gainedStories = await fetchStories()
    return gainedStories
}

export function loader(){
    return defer({
        users: loadUsers(),
        stories: loadStories()
    })
}