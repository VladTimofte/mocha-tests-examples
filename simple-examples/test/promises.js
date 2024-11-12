// promises.js

import { expect } from "chai";

async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data recieved')
        }, 1000)
    })
}

describe('fetchData', () => { 
    it('should return "data recieved" after a timeout', async () => {
        const result = await fetchData()
        expect(result).to.equal('Data recieved')
    });

    it('should return "data recieved" after a timeout', () => {
        return fetchData().then(result => {
            expect(result).to.equal('Data recieved')
        })
    });
 })