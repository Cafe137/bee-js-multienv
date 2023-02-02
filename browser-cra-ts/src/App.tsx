import { Bee, BeeDebug } from '@ethersphere/bee-js'
import { useEffect, useState } from 'react'
import './App.css'
import logo from './logo.svg'

function App() {
    const [stampId, setStampId] = useState('')
    const [reference, setReference] = useState('')

    useEffect(() => {
        const bee = new Bee('http://localhost:1633')
        const beeDebug = new BeeDebug('http://localhost:1635')
        beeDebug.createPostageBatch('1000000000', 20).then(batchId => {
            setStampId(batchId)
            bee.uploadData(batchId, 'Hello World').then(uploadResults => {
                setReference(uploadResults.reference)
            })
        })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{stampId}</p>
                <p>{reference}</p>
            </header>
        </div>
    )
}

export default App
