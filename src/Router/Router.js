import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Countries from "../components/Countries/Countries";
import FriendDetails from "../components/FriendDetails/FriendDetails";
import Friends from "../components/Friends/Friends";
import Home from "../components/Home/Home";
import Main from "../components/Layout/Main";
import PostDetails from "../components/PostDetails/PostDetails";
import Posts from "../components/Posts/Posts";
import Products from "../components/Products/Products";
import ShowCountry from "../components/ShowCountry/ShowCountry";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { 
                path: "/",
                element: <Home /> 
            },
            { 
                path: "home",
                element: <Home />
            },
            { 
                path: "products",
                element: <Products/>
            },
            { 
                path: "contact",
                element: <Contact /> 
            },
            {
                path: "friends",
                loader: async () => {
                    return fetch("https://jsonplaceholder.typicode.com/users")
                },
                element: <Friends />
            },
            {
                path: "/friend/:friendId",
                loader: async ({ params }) => {
                    return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
                },
                element: <FriendDetails />
            },
            {
                path: "posts",
                loader: async () => {
                    return fetch("https://jsonplaceholder.typicode.com/posts")
                },
                element: <Posts />
            },
            {
                path: 'post/:postId',
                loader: async ({ params }) => {
                    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
                },
                element: <PostDetails />
            },
            {
                path: 'countries',
                loader: async() => {
                    return fetch("https://restcountries.com/v3.1/all")
                },
                element: <Countries/>
            },
            {
                path: "country/:name",
                loader: async ({ params }) => {
                    return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
                },
                element: <ShowCountry/>
            },
            {
                path: "about",
                element: <About />
            },

        ]
    },
    { path: "*", element: <div>This route not found 404</div> }
]);