import { getFloor, getFloorNumber, validateRoomNumber } from 'utils/Wayfinder/mapTransformations';

describe('Map transformation helpers', () => {
    it('should return the correct 3-digit room number when valid', () => {
        expect(validateRoomNumber('012')).toBe('012');
        expect(validateRoomNumber(132)).toBe('132');
    });

    it('should extract 3-digit room number when possible', () => {
        expect(validateRoomNumber('leo3-J 476 B')).toBe('476');
        expect(validateRoomNumber('V201')).toBe('201');
        expect(validateRoomNumber('Heisenbergstr. 2, Raum 208')).toBe('208');
    });

    it('should return empty string when no valid room number', () => {
        expect(validateRoomNumber('leo3-J B')).toBe('');
        expect(validateRoomNumber('V')).toBe('');
        expect(validateRoomNumber('Heisenbergstr. 2, Raum')).toBe('');
        expect(validateRoomNumber('1234')).toBe('');
        expect(validateRoomNumber('34')).toBe('');
    });

    it('should return correct BuildingFloor value for getFloor', () => {
        expect(getFloor('099')).toBe('floor0');
        expect(getFloor('100')).toBe('floor1');
        expect(getFloor('208')).toBe('floor2');
        expect(getFloor('350')).toBe('floor3');
        expect(getFloor('420')).toBe('floor0'); // since '420' is not less than 400
    });

    it('should return correct floor number for getFloorNumber', () => {
        expect(getFloorNumber('099')).toBe(0);
        expect(getFloorNumber('100')).toBe(1);
        expect(getFloorNumber('208')).toBe(2);
        expect(getFloorNumber('350')).toBe(3);
        expect(getFloorNumber('420')).toBe(0); // since '420' is not less than 400
    });
});
