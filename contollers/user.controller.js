import fetch from "node-fetch"
/**
 * 
 * @param {import("express").Request} req 
 * @param {import('express').Response} res 
 */

export const Login = (req, res) => {
    // const {username,password} = req.query
    // const {username,password} = req.params
    const {username,password} = req.body
    const newPass = `${password}-onepoint`
    res.json({
        username,
        password,newPass
    })
}

let datauser = [];

export const Register = (req, res) => {
    const {username} = req.body
    datauser.push({username})
    res.json({
        username,
    })
}

export const Search = (req, res) => {
    const {findusername} = req.params
    const datausername = datauser.filter((r) => r.username == findusername)
    res.json({
        data: datausername,
    })
}

export const User = async (req, res) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await data.json()
    const {id} = req.params
    const value = json.filter(user => user.id === parseInt(id))
    res.json({
        msg :'user',
        data : value,
    })
}

export default { Login , Register ,Search ,User}