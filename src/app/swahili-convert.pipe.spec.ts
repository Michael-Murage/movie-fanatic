import { SwahiliConvertPipe } from './swahili-convert.pipe';

describe('SwahiliConvertPipe', () => {
    const pipe = new SwahiliConvertPipe();
    const testData = [
        {input: 'Fast and Furious', result: 'haraka and furious'},
        {input: 'Lord of the rings', result: 'Lord of the rings'},
        {input: 'Lord of the Ring', result: 'lord of the pete'},
        {input: 'Fast and faster', result: 'haraka and faster'},
        {input: 'The family', result: 'the familia'},
        {input: 'The families', result: 'The families'}
    ];
    it('create an instance', () => {
      expect(pipe).toBeTruthy();
    });
    testData.forEach(({ input, result }) => {
        it(`returns ${input}`, () => {
            expect(pipe.transform(input)).toEqual(result);
        });
    });
});
