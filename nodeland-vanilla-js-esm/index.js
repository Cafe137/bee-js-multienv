import { Bee, BeeDebug } from '@ethersphere/bee-js'

async function main() {
    const bee = new Bee('http://localhost:1633')
    const beeDebug = new BeeDebug('http://localhost:1635')
    const batchId = await beeDebug.createPostageBatch(1000000000, 20)
    console.log({ batchId })
    const { reference } = await bee.uploadData(batchId, 'Hello World')
    console.log({ reference })
}

main()
