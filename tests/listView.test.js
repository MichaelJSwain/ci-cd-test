import { describe, it, expect } from "vitest";
import { getListItems } from "../src/utils/getListItems";

describe("get list items", () => {
    it("should return an array of list items", () => {
        // arrange
        const expectedResult = [{id: 1, name: 'item 1'}, {id: 2, name: 'item 2'}, {id: 3, name: 'item 3'}, {id: 4, name: 'item 4'}];

        // act
        const result = getListItems();
        
        // assert
        expect(result).toEqual(expectedResult);
    });
});