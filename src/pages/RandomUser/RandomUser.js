import { Avatar, Button, Skeleton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function RandomUser() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // page load
        getData()


    }, [])

    function getData() {
        setLoading(true)
        fetch('https://randomuser.me/api/')
            .then(x => x.json())
            .then(response => {
                setLoading(false)
                setUser(response.results[0])
            })
    }

    return (
        <div>
            <Button varient='contained' onClick={getData}>Get Data</Button>



            {
                loading == true
                    ? <div>
                            <Skeleton variant="circular" width={200} height={200} />
                            <Skeleton height={20}/>
                            <Skeleton height={20}/>
                      </div>
                    : <>
                        <Avatar sx={{ height: '200px', width: '200px' }} src={user?.picture?.medium} />
                        <br />
                        <Typography>{user?.name?.title} {user?.name?.first} {user?.name?.last}</Typography>

                        <br />
                        <Typography>{user?.email}</Typography>

                    </>
            }





        </div>
    )
}
