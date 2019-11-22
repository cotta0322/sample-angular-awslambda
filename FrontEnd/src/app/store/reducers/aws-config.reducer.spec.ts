import { reducer } from './aws-config.reducer';
import { AWSConfigState } from '../states';


describe('AppMode Reducer', () => {
    describe('an unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as any;

            const result = reducer(AWSConfigState.initialState, action);

            expect(result).toBe(AWSConfigState.initialState);
        });
    });
});
