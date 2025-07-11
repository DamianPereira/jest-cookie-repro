describe("cookie expiring", () => {
    it("should not be expired when expire date is in the future", () => {
        jest.useFakeTimers('modern');
        jest.setSystemTime(new Date("Mon, 01 Jan 2023 12:00:00 GMT"));
        document.cookie = "foo=bar; expires=Mon, 02 Jan 2023 12:00:00 GMT";
        expect(document.cookie).toBe("foo=bar");
    });
});
