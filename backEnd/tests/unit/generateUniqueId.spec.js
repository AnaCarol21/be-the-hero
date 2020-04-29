const generateUniqueId = require('../../src/utils/gerenateUniqueId');

describe('Gerenerate Unique ID', () => {
    it('should generate and unique ID', () => {
        const id = generateUniqueId();
        
        expect(id).toHaveLength(4);
    });
});