'use client'

import AllContext from '@/contexts/AllContext'

import { useState, useReducer } from 'react'

import List from '@/components/List'
import Loading from '@/components/Loading'

import useAPI from '@/hooks/useAPI'

import { applicationReducer } from '@/lib/reducers'

export default function() {
    const [id, setId] = useState(0)

    const [application, dispatch] = useReducer(
        applicationReducer,
        { data: [], state: undefined }
    )

    useAPI('./api/', (response) => dispatch(
        { type: 'application/loaded', response: response.data }
    ))

    if (typeof application.state === 'undefined') {
        return (<Loading />)
    }
    else if (application.state === 'loaded') {
        return (
            <AllContext.Provider value={application.data}>
                <List
                    identifier={id}
                    onClick={
                        (id: number) => {
                            setId(id)
                        }
                    }
                />
            </AllContext.Provider>
        )
    }
    else {
        throw new Error()
    }
}